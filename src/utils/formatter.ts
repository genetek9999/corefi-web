export const shortenWalletAddress = (address: string) => {
  if (address.length < 9) return address;

  const firstPart = address.slice(0, 5);
  const lastPart = address.slice(-4);

  return `${firstPart}...${lastPart}`;
};

export const formatPrice = (data: number | string | undefined, currency = "$") => {
  let stringData = "";

  if (!data) stringData = "0";

  if (typeof data === "number") stringData = data.toString();

  stringData = stringData.replace(/ /g, "");

  const pattern = /(-?\d+)(\d{3})/;

  while (pattern.test(stringData)) stringData = stringData.replace(pattern, "$1,$2");

  if (currency) {
    stringData = currency + stringData;
  }

  return stringData;
};
