import { TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import { ButtonCommon } from "~/components";
import { colors } from "~/constants";

import { DaoMenu, useSelectMenu } from "./hooks";

export const NewProposal = () => {
  const selectedMenu = useSelectMenu((state) => state.value);
  const [title, setTitle] = useState("");

  if (selectedMenu !== DaoMenu.NEW_PROPOSAL) return <></>;

  return (
    <>
      <Title order={2} fz={{ base: 20, sm: 24 }} fw={600} mb="xl">
        New Proposal
      </Title>

      <TextInput
        label="Title"
        withAsterisk
        variant="unstyled"
        sx={{
          input: {
            transition: "all 0.15s ease-in-out",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 20,
            paddingInline: 15,
            paddingBlock: 20,
            marginTop: 10,
            color: "#fff",

            "&:focus": {
              borderColor: "rgba(255,255,255,0.5)",
            },
          },
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ButtonCommon variant="filled" bg={colors.PRIMARY_COLOR} darkenHover mt="xl">
        Continue
      </ButtonCommon>
    </>
  );
};
