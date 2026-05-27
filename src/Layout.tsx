import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import { AppBar } from "./components/menu/app-bar";
import { LeftMenu } from "./components/menu/left-menu";
import { CreateSuccessFlashListener } from "./components/forms/CreateSuccessFlashListener";

const Layout = (props:any) => {
    return (
        <>
            <CreateSuccessFlashListener />
            <RALayout {...props} appBar={AppBar} menu={LeftMenu} />
        </>
    );
};

export default Layout;