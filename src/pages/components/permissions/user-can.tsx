type Action = "view" | "create" | "edit" | "delete";

const permissions = {
    members: ["view", "create", "edit", "delete"],
    transporters: ["view", "create", "edit", "delete"],
    produce: ["view", "create", "edit", "delete"],
    stores: ["view", "create", "edit", "delete"],
    customers: ["view", "create", "edit", "delete"],
    suppliers: ["view", "create", "edit", "delete"],

}

export const can = (
    resource: string,
    action: Action
): boolean => {
    return permissions?.[resource]?.includes(action) ?? false;
};