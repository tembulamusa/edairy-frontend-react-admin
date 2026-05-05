// menu.types.ts

export type ResourceName = string;

export interface MenuItem {
    label: string;
    resource: ResourceName;
    icon?: React.ReactNode;
}

export interface MenuSection {
    label?: string; 
    items: MenuItem[];
}

export interface ModuleConfig {
    name: string;
    sections: MenuSection[];
}

export type ModulesConfig = Record<string, ModuleConfig>;