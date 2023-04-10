import { AspectRatio, Group, Text } from "@mantine/core";
import Image from "next/image";
import React, { memo } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { type PropsCurrency } from "~/helpers/coingecko";

type Props = {
  token?: PropsCurrency;
  setToken: (token: PropsCurrency) => void;
};

const _SelectToken: React.FC<Props> = ({ token, setToken }) => {
  if (token) {
    const { image, symbol } = token;

    console.log("render select token");

    return (
      <Group bg="rgba(255, 255, 255, 0.1)" py={7} px={9} spacing={8} sx={{ borderRadius: 20 }}>
        <AspectRatio ratio={1} w={20}>
          <Image alt="" fill src={image} />
        </AspectRatio>

        <Text fz={{ base: 20 }} fw={500}>
          {symbol.toUpperCase()}
        </Text>

        <BsFillCaretDownFill size={10} />
      </Group>
    );
  }

  return <></>;
};

export const SelectToken = memo(_SelectToken);
