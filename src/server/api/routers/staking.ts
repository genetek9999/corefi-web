import { providers } from "ethers";
import moment from "moment";
import { contracts } from "~/constants";
import { env } from "~/env.mjs";
import { formatBigNumber } from "~/libs/ethers";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Staking__factory } from "~/typechain-owned";

const getContract = () => {
  if (env.RPC_UCL) {
    const provider = new providers.JsonRpcProvider(env.RPC_UCL);

    return Staking__factory.connect(contracts.staking, provider);
  }

  throw "RPC_URL not found!";
};

export const stakingRouter = createTRPCRouter({
  getTotalStaked: publicProcedure.query(async () => {
    const contract = getContract();

    const result = await contract.totalStakedAmount();

    return formatBigNumber(result);
  }),

  getHistory: publicProcedure.query(async () => {
    const contract = getContract();

    const historyList = await contract.getAllUserStakeHistory();

    return historyList.map((item) => ({
      address: item.user,
      amount: formatBigNumber(item.amount),
      createdAt: parseInt(item.created_at.toString()),
      type: item.history_type,
    }));
  }),

  getTotalStakedChart: publicProcedure.query(async () => {
    const contract = getContract();

    const totalUserStake = parseInt((await contract.totalUserStake()).toString());

    const result: NodeJS.Dict<number> = {};

    console.log(totalUserStake);

    for (let i = 0; i < totalUserStake; i++) {
      const item = await contract.userStakes(i);

      const time = moment.unix(parseInt(item.start.toString())).format("MMMM D, YYYY");

      const amount = formatBigNumber(item.amount);

      result[time] = (result[time] || 0) + amount;
    }

    return Object.entries(result).map(([key, value = 0]) => ({
      date: key,
      total: value,
    }));
  }),
});
