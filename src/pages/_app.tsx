import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";
import { ContextProvider } from "~/contexts";
import { ThemeProvider } from "~/themes";
import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
      <Head>
        <title>Base T3 Mantine Web3</title>
        <meta name="description" content="Base T3 Mantine Web3" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/feature.jpg" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="Base T3 Mantine Web3" />
        <meta property="og:image:alt" content="Base T3 Mantine Web3" />
        <meta property="og:description" content="Base T3 Mantine Web3" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Base T3 Mantine Web3" />
      </Head>

      <ThemeProvider>
        <SessionProvider session={session}>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
