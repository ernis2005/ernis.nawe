import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import Navlinck from "./Navlinck/Navlinck";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Navlinck>
      <Component {...pageProps} />
      </Navlinck>
    </SessionProvider>
  );
}
export default MyApp;
