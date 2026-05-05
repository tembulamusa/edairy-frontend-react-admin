import { type AuthProvider } from "react-admin";

const API_URL = import.meta.env.VITE_EDAIRY_API_URL;

let cachedPermissions: Record<string, string[]> = {};
let cachedUser: any = null;
let token: string | null = null;

export const authProvider: AuthProvider = {
    // 🔐 LOGIN
    login: async ({ username, password }) => {
        const request = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!request.ok) {
            throw new Error("Invalid credentials");
        }

        const response = await request.json();

        token = response.token;
        cachedUser = {
            id: response.id,
            name: response.name,
        };
        cachedPermissions = response.permissions;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(cachedUser));
        localStorage.setItem("permissions", JSON.stringify(cachedPermissions));

        return Promise.resolve();
    },

    // 🚪 LOGOUT
    logout: async () => {
        token = null;
        cachedUser = null;
        cachedPermissions = {};

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("permissions");

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
        const storedToken = localStorage.getItem("token");

        if (!storedToken) {
            return Promise.reject();
        }

        token = storedToken;
        cachedUser = JSON.parse(localStorage.getItem("user") || "null");
        cachedPermissions = JSON.parse(localStorage.getItem("permissions") || "{}");

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
        const permissions =
            cachedPermissions ||
            JSON.parse(localStorage.getItem("permissions") || "{}");

        return Promise.resolve(permissions);
    },
};