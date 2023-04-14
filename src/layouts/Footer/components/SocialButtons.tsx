import { AspectRatio, Group } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { HybridLink } from "~/components";
import { menuSocial } from "~/constants";

export const SocialButtons = () => {
  return (
    <Group>
      {menuSocial.map(({ icon, link }) => (
        <HybridLink key={nanoid()} href={link}>
          <AspectRatio ratio={1} w={24}>
            {icon}
          </AspectRatio>
        </HybridLink>
      ))}
    </Group>
  );
};
