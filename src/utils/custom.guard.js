import { Route } from "react-router-dom";
import Redirect from "./redirect";

function Guard(Component, path, permission, props = {}) {
  const token = localStorage.getItem("token");

  if (permission.authRequire && !token) {
    return (
      <Route path={path} element={<Redirect path="/login-with-option" />} />
    );
  } else if (permission.unAuthRequire && token) {
    return <Route path={path} element={<Redirect path="/" />} />;
  } else {
    return <Route path={path} element={<Component {...props} />} />;
  }
}

export default Guard;
