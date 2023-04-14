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
        <title>CoreFi</title>
        <meta name="description" content="Making deFi accessible to everyone" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="/feature.jpg" />
        <meta property="og:url" content="https://corefi.io" />
        <meta property="og:title" content="CoreFi" />
        <meta property="og:image:alt" content="Making deFi accessible to everyone" />
        <meta property="og:description" content="Making deFi accessible to everyone" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CoreFi" />
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
