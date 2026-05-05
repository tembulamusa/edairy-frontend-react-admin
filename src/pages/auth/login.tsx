import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import { Box, Card, TextField, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.png";

const appName = import.meta.env.VITE_APP_NAME;


export const LoginPage = () => {
    const login = useLogin();
    const notify = useNotify();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login({ username, password });
        } catch (error) {
            notify("Invalid username or password", { type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                
            }}
        >
            {/* DARK OVERLAY */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    
                }}
            />

            {/* LOGIN CARD */}
            <Card
                sx={{
                    position: "relative",
                    width: "30%",
                    height: "45%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",

                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 10,
                }}
            >
                {/* BRAND */}
                <Typography
                    variant="h5"
                    sx={{
                        mb: 1,
                        fontWeight: 700,
                        textAlign: "center",
                       
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="Logo"
                            sx={{
                                height: 60,
                                width: "auto",
                            }}
                        />
                    </Box>
                   {appName}
                </Typography>

                <Typography
                    sx={{
                        mb: 3,
                        textAlign: "center",
                        fontSize: 13,
                        color: "gray",
                    }}
                >
                    Sign in to continue
                </Typography>

                {/* FORM */}
                <form onSubmit={submit}>
                    <TextField
                        fullWidth
                        label="Username"
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{ }}
                    />

                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        InputProps={{ }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        disabled={loading}
                        sx={{
                            mt: 2,
                            py: 1.2,
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "rgb(217, 119, 6)",
                            "&:hover": {
                                backgroundColor: "rgb(180, 95, 0)",
                            },
                        }}
                    >
                        {loading ? "Signing in..." : "LOGIN"}
                    </Button>
                </form>
            </Card>
        </Box>
    );
};