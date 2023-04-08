export const shortenWalletAddress = (address: string) => {
  if (address.length < 9) return address;

  const firstPart = address.slice(0, 5);
  const lastPart = address.slice(-4);

  return `${firstPart}...${lastPart}`;
};
