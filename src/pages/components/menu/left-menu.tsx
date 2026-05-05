import { Menu, MenuItemLink, useStore } from "react-admin";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { modules } from "./modules-config";

// assume this comes from context / hook
import { can } from "../permissions/user-can"; 

export const LeftMenu = () => {
    const [activeModule] = useStore<string>("activeModule", "Admin");
    const [openSections, setOpenSections] = useStore<string[]>("openSections", []);

    const module = modules[activeModule];

    if (!module) return null;

    const toggleSection = (label: string) => {
        setOpenSections((prev: string[]) =>
            prev.includes(label)
                ? prev.filter((l) => l !== label)
                : [...prev, label]
        );
    };

    return (
        <Menu>
            {module.sections.map((section, idx) => {
                const sectionKey = section.label || `__default_${idx}`;
                const isOpen = openSections.includes(sectionKey);

                // 🔐 FILTER ITEMS BASED ON PERMISSION
                const visibleItems = section.items.filter(item =>
                    can(item.resource, "view")
                );

                // 🚫 skip empty sections
                if (visibleItems.length === 0) return null;

                return (
                    <Box key={sectionKey}>
                        {section.label ? (
                            <Accordion
                                disableGutters
                                elevation={0}
                                expanded={isOpen}
                                onChange={() => toggleSection(sectionKey)}
                                sx={{
                                    backgroundColor: "transparent",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    sx={{
                                        px: 2,
                                        minHeight: 36,
                                        "& .MuiAccordionSummary-content": {
                                            margin: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            width: "100%",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            color: "text.secondary",
                                        }}
                                    >
                                        {section.label}
                                    </Typography>

                                    <ChevronRightIcon
                                        sx={{
                                            fontSize: 18,
                                            color: "text.secondary",
                                            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                                            transition: "0.2s ease",
                                        }}
                                    />
                                </AccordionSummary>

                                <AccordionDetails sx={{ py: 0, px: 1 }}>
                                    {visibleItems.map((item) => (
                                        <MenuItemLink
                                            key={item.resource}
                                            to={`/${item.resource}`}
                                            primaryText={item.label}
                                            leftIcon={item.icon}
                                            sx={{ pl: 2 }}
                                        />
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        ) : (
                            visibleItems.map((item) => (
                                <MenuItemLink
                                    key={item.resource}
                                    to={`/${item.resource}`}
                                    primaryText={item.label}
                                    leftIcon={item.icon}
                                />
                            ))
                        )}
                    </Box>
                );
            })}
        </Menu>
    );
};