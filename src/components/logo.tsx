import logo from "../assets/logo.png";
import { Box } from "@mui/material";

export const Logo = () => (
    <Box
        component="img"
        src={logo}
        alt="Dairy ERP Logo"
        sx={{
            height: 40,
            width: "auto",
        }}
    />
);