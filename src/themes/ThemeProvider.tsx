import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

type Props = {
  children: JSX.Element;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: () => ({
          body: {
            overflowX: "hidden",
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
