type Action = "view" | "create" | "edit" | "delete";

import { usePermissions } from "react-admin";

export const useCan = () => {
    const { permissions } = usePermissions<Record<string>>();
    return (resource: string, action: Action) => {
        var required_permisison = resource + "." + action;
        return permissions?.includes(required_permisison) ?? false;
    };
};
