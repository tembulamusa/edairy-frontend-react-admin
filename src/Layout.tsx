import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import { AppBar } from "./pages/components/menu/app-bar";
import { LeftMenu } from "./pages/components/menu/left-menu";

const Layout = (props:any) => {
    return (
        <RALayout  {...props}   appBar={AppBar}
        menu={LeftMenu} />
    );
};

export default Layout;