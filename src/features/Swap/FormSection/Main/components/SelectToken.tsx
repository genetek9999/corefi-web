import { AspectRatio, type CSSObject, Group, Text } from "@mantine/core";
import Image from "next/image";
import React, { memo } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { type PropsCurrency } from "~/helpers/coingecko";
import { useRefPortal } from "~/hooks/useRefPortal";

import { ModalToken } from "./ModalToken";

type Props = {
  token?: PropsCurrency;
  otherTokens?: PropsCurrency[];
  setToken: (token: PropsCurrency) => void;
};

const _SelectToken: React.FC<Props> = ({ token, setToken, otherTokens }) => {
  const ref = useRefPortal<typeof ModalToken>();

  return (
    <>
      <Group
        bg="rgba(255, 255, 255, 0.1)"
        py={7}
        px={9}
        spacing={8}
        sx={{
          borderRadius: 20,
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.15)",
          } as CSSObject,
        }}
        onClick={() => ref.current?.open()}
      >
        <AspectRatio ratio={1} w={20}>
          <Image alt="" fill src={token?.image || ""} />
        </AspectRatio>

        <Text fz={{ base: 20 }} fw={500}>
          {token?.symbol.toUpperCase()}
        </Text>

        <BsFillCaretDownFill size={10} />
      </Group>

      <ModalToken ref={ref} selectedToken={token} onSelect={setToken} otherTokens={otherTokens || []} />
    </>
  );
};

export const SelectToken = memo(_SelectToken);
