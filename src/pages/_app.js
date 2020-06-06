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
          logo="/logo_transparent.png"
        ></Navbar>

        <Component {...pageProps} />

        <Footer
          color="dark"
          size="medium"
          backgroundImage=""
          backgroundImageOpacity={1}
          description="All secret and covert operations of Dumbledore's army can be found here."
          copyright="© 2020 Dumbledore's Army INC."
          logo="/logo_transparent.png"
        ></Footer>
      </>
    </ProvideAuth>
  );
}

export default MyApp;
