import { type AuthProvider } from "react-admin";

const API_URL = import.meta.env.VITE_EDAIRY_API_URL;

let cachedPermissions: Record<string, string[]> = {};
let cachedUser: any = null;
let token: string | null = null;

export const authProvider: AuthProvider = {
    // 🔐 LOGIN
    login: async ({ email, password }) => {
        const request = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!request.ok) {
            throw new Error("Invalid credentials");
        }
        const response = await request.json();
        localStorage.setItem("user", JSON.stringify(response));

        return Promise.resolve();
    },

    // 🚪 LOGOUT
    logout: async () => {
        localStorage.removeItem("user");
        return Promise.resolve();
    },

    // 🔍 CHECK ERROR (401 handling)
    checkError: async (error) => {
        if (error.status === 401 || error.status === 403) {
            return Promise.reject();
        }
        return Promise.resolve();
    },

    // 🔐 AUTH CHECK (route protection)
    checkAuth: async () => {
        const user = localStorage.getItem("user");

        if (!user) {
            return Promise.reject();
        }
        return Promise.resolve();
    },

    // 👤 GET USER IDENTITY
    getIdentity: async () => {
        const user = cachedUser || JSON.parse(localStorage.getItem("user") || "null");

        if (!user) {
            return Promise.reject();
        }

        return Promise.resolve(user);
    },

    // 🔐 GET USER PERMISSIONS (IMPORTANT FOR RBAC)
    getPermissions: async () => {
        const permissions = JSON.parse(localStorage.getItem("user") || "{}")?.permissions;
        return Promise.resolve(permissions);
    },
};