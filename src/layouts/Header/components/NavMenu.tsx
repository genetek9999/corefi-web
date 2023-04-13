import { Box, type BoxProps, Flex, Group, Menu, Text, TextProps } from "@mantine/core";
import { nanoid } from "nanoid";
import React, { useMemo } from "react";
import { BiDownArrow } from "react-icons/bi";
import { BsCaretDown, BsCaretDownFill, BsMenuDown } from "react-icons/bs";
import { HybridLink } from "~/components";
import { menuFeatureHeader, menuMainHeader } from "~/constants";

export const NavMenu: React.FC<BoxProps> = ({ ...props }) => {
  const { pathname, host } = window.location;

  const menu = useMemo(() => {
    if (menuFeatureHeader.some(({ link }) => pathname === link || host.includes(link.replaceAll("/", "")))) {
      return menuFeatureHeader;
    }

    return menuMainHeader;
  }, [host, pathname]);

  return (
    <Box {...props}>
      <Flex align="center" gap={{ base: 20, sm: 30 }}>
        {menu.map((item) => {
          if (item.link) {
            return <MenuItem key={nanoid()} {...item} />;
          }

          if (item.menu.length) {
            return <SubMenu key={nanoid()} {...item} />;
          }
        })}
      </Flex>
    </Box>
  );
};

type MenuItemProps = TextProps & {
  link: string;
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ link, label, ...props }) => (
  <HybridLink key={nanoid()} href={link}>
    <Text fw={500} tt="capitalize" {...props}>
      {label}
    </Text>
  </HybridLink>
);

type SubMenuProps = {
  label: string;
  withIcon: boolean;
  menu: (MenuItemProps & {
    icon: React.ReactNode;
    desc: string;
  })[];
};

const SubMenu: React.FC<SubMenuProps> = ({ label, withIcon, menu }) => {
  return (
    <Menu shadow="md" width={300} trigger="hover">
      <Menu.Target>
        <Group spacing={7} sx={{ cursor: "pointer" }}>
          <Text fw={500} tt="capitalize">
            {label}
          </Text>

          <BsCaretDownFill size={10} />
        </Group>
      </Menu.Target>

      <Menu.Dropdown
        px={24}
        py={20}
        sx={{ borderRadius: 20, backdropFilter: "blur(6px)" }}
        bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0152) 100%)"
      >
        {menu.map((item) => {
          const { label, link, icon, desc } = item;

          if (withIcon) {
            return (
              <Menu.Item key={nanoid()} px={16} py={12} sx={{ borderRadius: 12 }}>
                <HybridLink key={nanoid()} href={link}>
                  <Group spacing={10}>
                    {icon}

                    <Box>
                      <Text fw={500} tt="capitalize" mb={2}>
                        {label}
                      </Text>

                      <Text fz={12} c="rgba(255,255,255,0.8)">
                        {desc}
                      </Text>
                    </Box>
                  </Group>
                </HybridLink>
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={nanoid()} px={16} py={20} sx={{ borderRadius: 12 }}>
              <MenuItem {...item} />
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};
