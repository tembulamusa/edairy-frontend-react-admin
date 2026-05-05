import { useStore, useRefresh } from "react-admin";
import { Box, Button } from "@mui/material";

import { modules } from "./modules-config"; // ✅ single source of truth

export const ModuleSwitcher = () => {
    const [activeModule, setModule] = useStore<string>("activeModule", "Admin");
    const refresh = useRefresh();

    const moduleNames = Object.keys(modules); // ✅ dynamic

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}
        >
            {/* Modules */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    marginLeft: "auto",
                    alignItems: "center",
                }}
            >
                {moduleNames.map((m) => {
                    const selected = activeModule === m;

                    return (
                        <Button
                            key={m}
                            onClick={() => setModule(m)}
                            sx={{
                                color: "white",
                                fontSize: 12,
                                fontWeight: selected ? 700 : 400,
                                textTransform: "uppercase",
                                borderRadius: 0,
                                minWidth: "auto",
                                padding: "6px 10px",
                                borderBottom: selected
                                    ? "2px solid #fff"
                                    : "2px solid transparent",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                },
                            }}
                        >
                            {modules[m].name} {/* ✅ display name */}
                        </Button>
                    );
                })}
            </Box>
        </Box>
    );
};