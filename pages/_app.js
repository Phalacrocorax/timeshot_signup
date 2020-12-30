import "../styles.css";
import ReactDOM from "react-dom";
import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

// import "assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/scss/nextjs-argon-dashboard.scss";

// Router.events.on("routeChangeStart", (url) => {
//   console.log(`Loading: ${url}`);
//   // document.body.classList.add("body-page-transition");
//   ReactDOM.render(
//     <PageChange path={url} />,
//     document.getElementById("page-transition")
//   );
// });
// Router.events.on("routeChangeComplete", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   // document.body.classList.remove("body-page-transition");
// });
// Router.events.on("routeChangeError", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   // document.body.classList.remove("body-page-transition");
// });

// supabase ReferenceError: globalThis is not defined
global.globalThis = global;
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || (({ children }) => <>{children}</>);
    // return <Component {...pageProps} />;
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Timeshot Dashboard</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
