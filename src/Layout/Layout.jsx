/* eslint-disable react/prop-types */

import ResponsiveAppBar from "../Components/NaBar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <ResponsiveAppBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
