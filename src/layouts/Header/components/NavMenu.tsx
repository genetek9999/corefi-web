import { Accordion, Box, type BoxProps, Flex, Group, Menu, Text, type TextProps } from "@mantine/core";
import { nanoid } from "nanoid";
import React, { useMemo } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { HybridLink } from "~/components";
import { colors, menuFeatureHeader, menuMainHeader } from "~/constants";

type Props = BoxProps & {
  variant?: "horizontal" | "vertical";
};

export const NavMenu: React.FC<Props> = ({ variant = "horizontal", ...props }) => {
  const { pathname, host } = window.location;

  const menu = useMemo(() => {
    if (menuFeatureHeader.some(({ link }) => pathname === link || host.includes(link.replaceAll("/", "")))) {
      return menuFeatureHeader;
    }

    return menuMainHeader;
  }, [host, pathname]);

  return (
    <Box {...props}>
      <Flex
        direction={variant === "horizontal" ? "row" : "column"}
        align={variant === "horizontal" ? "center" : "stretch"}
        gap={variant === "horizontal" ? { base: 20, sm: 30 } : 2}
      >
        {menu.map((item) => {
          if (item.link) {
            return <MenuItem key={nanoid()} isVertical={variant === "vertical"} {...item} />;
          }

          if (item.menu.length) {
            return <SubMenu key={nanoid()} isVertical={variant === "vertical"} {...item} />;
          }
        })}
      </Flex>
    </Box>
  );
};

type MenuItemProps = TextProps & {
  isVertical?: boolean;
  isSubMenuItem?: boolean;
  link: string;
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ isVertical = false, isSubMenuItem = false, link, label, ...props }) => {
  const isActive = useMemo(() => window.location.pathname === link, [link]);

  return (
    <HybridLink key={nanoid()} href={link}>
      <Box
        {...(isVertical
          ? {
              px: 25,
              py: 15,
              bg: isActive ? "rgba(255,255,255,0.1)" : "transparent",
            }
          : {})}
        className={isActive ? "active" : ""}
        sx={
          !isSubMenuItem
            ? {
                transition: "all 0.15s ease-in-out",
                "&:hover, &.active": {
                  color: colors.PRIMARY_COLOR,
                },
              }
            : {}
        }
      >
        <Text fw={500} tt="capitalize" {...props}>
          {label}
        </Text>
      </Box>
    </HybridLink>
  );
};

type SubMenuProps = {
  isVertical?: boolean;
  label: string;
  withIcon: boolean;
  menu: (MenuItemProps & {
    icon: React.ReactNode;
    desc: string;
  })[];
};

const SubMenu: React.FC<SubMenuProps> = ({ isVertical = false, label, withIcon, menu }) => {
  const isActive = useMemo(() => menu.some((item) => window.location.pathname === item.link), [menu]);

  if (isVertical) {
    return (
      <Accordion variant="filled" radius="xs" defaultValue="0">
        <Accordion.Item
          value="0"
          sx={{
            "&[data-active]": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Accordion.Control c="#fff" fw={500} px={25} bg={isActive ? "rgba(255,255,255,0.1)" : "transparent"}>
            {label}
          </Accordion.Control>

          <Accordion.Panel
            sx={{
              ".mantine-Accordion-content": {
                padding: 0,
              },
            }}
          >
            {menu.map((item) => (
              <MenuItem key={nanoid()} {...item} px={50} py={15} isSubMenuItem />
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  }

  return (
    <Menu shadow="md" width={300} trigger="hover">
      <Menu.Target>
        <Group
          spacing={7}
          sx={{
            cursor: "pointer",
            ...(isActive
              ? {
                  "*": { color: colors.PRIMARY_COLOR },
                }
              : {}),
          }}
        >
          <Text fw={500} tt="capitalize">
            {label}
          </Text>

          <BsCaretDownFill size={10} />
        </Group>
      </Menu.Target>

      <Menu.Dropdown
        px={24}
        py={20}
        sx={{ borderRadius: 20, backdropFilter: "blur(20px)" }}
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
              <MenuItem {...item} isSubMenuItem />
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};
