import { Box, Flex } from "@mantine/core";
import { type NextPage } from "next";
import { useCallback, useEffect } from "react";
import { Page, Section } from "~/components";
import { FormSection, useSelectedToken, useTokenList } from "~/features/Swap";
import { getAllCurrencies } from "~/helpers/coingecko";

const Swap: NextPage = () => {
  const setTokenList = useTokenList((state) => state.setTokenList);
  const [setCurrencyFrom, setCurrencyTo] = useSelectedToken((state) => [state.setCurrencyFrom, state.setCurrencyTo]);

  const initTokenList = useCallback(async () => {
    try {
      const result = await getAllCurrencies();

      setTokenList(result);

      setCurrencyFrom(result[0]);
      setCurrencyTo(result[1]);
    } catch (error) {
      console.log(error);
    }
  }, [setCurrencyFrom, setCurrencyTo, setTokenList]);

  useEffect(() => {
    void initTokenList();
  }, [initTokenList]);

  return (
    <Page visibleGalaxy={false}>
      <Section size={1450}>
        <Flex>
          <Box w={450}>
            <FormSection />
          </Box>
        </Flex>
      </Section>
    </Page>
  );
};

export default Swap;
