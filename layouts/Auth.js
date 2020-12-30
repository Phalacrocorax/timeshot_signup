import React from "react";
// reactstrap components
// import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

function Auth(props) {
  React.useEffect(() => {
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  }, []);
  return (
    <>
      <div className='w-full '>
        <AuthNavbar />
        <div className="grid place-items-center">
          <div className="w-15/16 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
              {props.children}
          </div>
        </div>
        {/* <AuthFooter /> */}
      </div>
    </>
  );
}

export default Auth;
