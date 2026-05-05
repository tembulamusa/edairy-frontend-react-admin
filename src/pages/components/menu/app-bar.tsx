import { AppBar as RAppBar } from "react-admin";
import { ModuleSwitcher } from "./module-switcher";

export const AppBar = () => (
    <RAppBar>
        <ModuleSwitcher />
    </RAppBar>
);
