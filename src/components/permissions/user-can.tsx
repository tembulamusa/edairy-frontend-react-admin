type Action = "view" | "create" | "edit" | "delete";

import { usePermissions } from "react-admin";

export const useCan = () => {
    const { permissions } = usePermissions<Record<string, Action[]>>();

    return (resource: string, action: Action) => {
        return permissions?.[resource]?.includes(action) ?? false;
    };
};