import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { colors } from "~/constants";

import { fonts } from "./fonts";

type Props = {
  children: JSX.Element;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        focusRing: "never",
        components: {
          Title: {
            styles: {
              root: {
                color: "#fff",
                fontWeight: 700,
              },
            },
          },

          Button: {
            defaultProps: { fw: 600, radius: "xl", variant: "outline", fz: "0.875rem" },
          },
        },
        globalStyles: () => ({
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            overflowX: "hidden",
            background: colors.PURPLE_1,

            "*": {
              fontFamily: `${fonts.inters.style.fontFamily} !important`,
              lineHeight: "1.2em !important",
              color: "#fff",
            },
          },
          a: {
            textDecoration: "none",
            color: "unset",
          },
        }),
        colorScheme: "dark",
      }}
    >
      <NotificationsProvider>{children}</NotificationsProvider>
    </MantineProvider>
  );
};
