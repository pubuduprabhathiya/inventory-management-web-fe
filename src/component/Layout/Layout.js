import { Fragment } from "react";
import Dashboard from "../UI/Dashboard";
import Header from "./Header";

const Layout = (props)=>{
    return (
    <Fragment>
      <Header/>
      <main>
        <Dashboard/>
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;