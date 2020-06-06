import React from "react";
import "styles/global.scss";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics.js";
import { ProvideAuth } from "util/auth.js";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <>
        <Navbar
          color="dark"
          spaced={true}
          logo="https://uploads.divjoy.com/logo-white.svg"
        ></Navbar>

        <Component {...pageProps} />

        <Footer
          color="dark"
          size="medium"
          backgroundImage=""
          backgroundImageOpacity={1}
          description="All secret and covert operations of Dumbledore's army can be found here."
          copyright="© 2020 Dumbledore's Army INC."
          logo="https://uploads.divjoy.com/logo.svg"
        ></Footer>
      </>
    </ProvideAuth>
  );
}

export default MyApp;
