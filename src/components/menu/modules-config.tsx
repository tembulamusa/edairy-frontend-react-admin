import { ReactNode } from "react";
import { type ModulesConfig } from "./menu-types";

/* ============ ICONS ============ */
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SmsIcon from "@mui/icons-material/Sms";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WorkIcon from "@mui/icons-material/Work";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FactCheckIcon from "@mui/icons-material/FactCheck";

/* ============ HELPER ============ */
const r = (label: string, icon?: ReactNode) => ({
    label,
    resource: label.toLowerCase().replace(/\s+/g, "-"),
    icon,
});

/* ============ MODULES ============ */
export const modules: ModulesConfig = {
    Admin: {
        name: "Admin",
        sections: [
            {
                items: [
                    r("Dashboard", <DashboardIcon />),
                    r("Licence", <ReceiptLongIcon />),
                ],
            },
            {
                label: "Audit",
                items: [r("Audit Logs", <ReceiptLongIcon />)],
            },
            {
                label: "Auth",
                items: [
                    r("Permissions", <AdminPanelSettingsIcon />),
                    r("Roles", <AdminPanelSettingsIcon />),
                    r("Users", <PeopleIcon />),
                    r("User Contact Details", <PeopleIcon />),
                ],
            },
            {
                label: "Assets",
                items: [
                    r("Fixed Assets", <AdminPanelSettingsIcon />),
                    r("Asset Categories", <AdminPanelSettingsIcon />),
                    r("Asset Assignments", <AdminPanelSettingsIcon />),
                    r("Asset Depreciation Entries", <AdminPanelSettingsIcon />),
                    r("Asset Registers", <AdminPanelSettingsIcon />),
                    r("Asset Softwares", <AdminPanelSettingsIcon />),
                ],
            },
            {
                label: "Shares",
                items: [
                    r("Share Dividends", <AdminPanelSettingsIcon />),
                    r("Share Registrations", <AdminPanelSettingsIcon />),
                    r("Share Transactions", <AdminPanelSettingsIcon />),
                ],
            },
            {
                label: "SMS",
                items: [
                    r("Sms", <AdminPanelSettingsIcon />),
                    r("Sms Error codes", <AdminPanelSettingsIcon />),
                ],
            },
            {
                label: "Organization",
                items: [
                    r("Organization Details", <SettingsIcon />),
                    r("Document Types", <SettingsIcon />),
                    r("Directors and Management", <PeopleIcon />),
                    r("Documents", <Inventory2Icon />),
                    r("Departments", <WorkIcon />),
                    r("Banks", <AccountBalanceIcon />),
                    r("Sites", <StoreIcon />),
                ],
            },
            {
                label: "Setup",
                items: [
                    r("Payment Types", <SettingsIcon />),
                    r("Relationships", <SettingsIcon />),
                    r("Locations", <SettingsIcon />),

                ],
            },
        ],
    },

    Members: {
        name: "Members",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Members",
                items: [
                    r("Members", <PeopleIcon />),
                    r("Member Bank Accounts", <AccountBalanceIcon />),
                    r("Transport Rates", <LocalShippingIcon />),
                ],
            },
            {
                label: "Extension Services",
                items: [
                    r("Trainings", <WorkIcon />),
                    r("Training Sessions", <WorkIcon />),
                    r("Training Session Attendees", <PeopleIcon />),
                    r("Exchange Visits", <WorkIcon />),
                    r("Exchange Visit Attendees", <PeopleIcon />),
                ],
            },
            {
                label: "Shares",
                items: [
                    r("Share Types", <AttachMoneyIcon />),
                    r("Share Accounts", <AttachMoneyIcon />),
                    r("Share Transactions", <AttachMoneyIcon />),
                    r("Share Payments", <AttachMoneyIcon />),
                    r("Share Transfers", <AttachMoneyIcon />),
                    r("Dividend Declarations", <AttachMoneyIcon />),
                    r("Share Dividends", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Reports",
                items: [r("Member with Missing Details", <FactCheckIcon />)],
            },
            {
                label: "Setup",
                items: [
                    r("Member Types", <SettingsIcon />),
                    r("Routes", <LocalShippingIcon />),
                    r("Route Centers", <StoreIcon />),
                    r("Payment Modes", <AccountBalanceIcon />),
                ],
            },
        ],
    },

    Transporters: {
        name: "Transporters",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Transporters",
                items: [
                    r("Transporters", <LocalShippingIcon />),
                    r("Individual Transporters", <LocalShippingIcon />),
                    r("Company Transporters", <LocalShippingIcon />),
                    r("Transporter Vehicles", <LocalShippingIcon />),
                    r("Transporter Route Assignments", <LocalShippingIcon />),
                    r("Transporter Drivers", <LocalShippingIcon />),
                    r("Transporter Driver Assignments", <LocalShippingIcon />),
                    r("Transport Rates", <LocalShippingIcon />),
                    r("Transporter Benefits", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Reports",
                items: [
                    r("Milk Delivery Reports", <ReceiptLongIcon />),
                    r("Transporter Payroll Summary", <ReceiptLongIcon />),
                    r("Transporter Payroll Bank Summary", <ReceiptLongIcon />),
                    r("Transporter Statement", <ReceiptLongIcon />),
                ],
            },
        ],
    },
    Produce: {
        name: "Produce",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Setup",
                items: [
                    r("Milk Cans", <Inventory2Icon />),
                    r("Product Grades", <FactCheckIcon />),
                    r("Milk Delivery Shifts", <WorkIcon />),
                ],
            },
            {
                label: "Milk Collection",
                items: [
                    r("Milk Journals", <AgricultureIcon />),
                    r("Milk Journal Entries", <AgricultureIcon />),
                    r("Milk Rejects", <FactCheckIcon />),
                    r("Stray Milk Collections", <AgricultureIcon />),
                ],
            },
            {
                label: "Transporters",
                items: [
                    {
                        label: "Cooler Milk Collection",
                        resource: "cooler-milk-collections",
                        icon: <AgricultureIcon />,
                    },
                    r("Milk Deliveries", <AgricultureIcon />),
                    r("Milk Local Sales", <StoreIcon />),
                    r("Daily Milk Variances", <FactCheckIcon />),
                    r("Can Movements", <Inventory2Icon />),
                ],
            },


            {
                label: "Reports",
                items: [
                    r("Milk Delivery Reports", <ReceiptLongIcon />),
                    r("Member Payroll Summary", <ReceiptLongIcon />),
                    r("Member Statement", <ReceiptLongIcon />),
                    r("Monthly Collections", <AgricultureIcon />),
                ],
            },
        ],
    },

    Stores: {
        name: "Stores",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Data Entry",
                items: [
                    r("POS", <StoreIcon />),
                    r("Store Sales", <AttachMoneyIcon />),
                    r("Supplies", <Inventory2Icon />),
                    r("Supply Rejects", <FactCheckIcon />),
                    r("Inter Store Transfers", <Inventory2Icon />),
                    r("Store Stocks", <Inventory2Icon />),
                    r("Store Stock Takings", <FactCheckIcon />),
                    r("Store Stock Movements", <Inventory2Icon />),
                ],
            },
            {
                label: "Setup",
                items: [
                    r("Stores", <StoreIcon />),
                    r("Item Categories", <SettingsIcon />),
                    r("Store Items", <Inventory2Icon />),
                    r("Store Inventories", <Inventory2Icon />),
                    r("Store Stock Movement Types", <Inventory2Icon />),
                ],
            },
            {
                label: "Reports",
                items: [
                    r("Stock", <ReceiptLongIcon />),
                    r("Sales", <ReceiptLongIcon />),
                    r("Rejects", <FactCheckIcon />),
                ],
            },
        ],
    },

    Customers: {
        name: "Customers",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Collections",
                items: [
                    r("Customer Collections", <AttachMoneyIcon />),
                    r("Customer Payments", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Setup",
                items: [
                    r("Customer Types", <SettingsIcon />),
                    r("Customers", <PeopleIcon />),
                    r("Customer Milk Rates", <AgricultureIcon />),
                ],
            },
        ],
    },

    Suppliers: {
        name: "Suppliers",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Suppliers",
                items: [
                    r("Suppliers", <PeopleIcon />),
                    r("Supplier Bank Accounts", <AccountBalanceIcon />),
                    r("Farm Visits", <WorkIcon />),
                ],
            },
            {
                label: "Procurement",
                items: [
                    r("Purchase Requisitions", <FactCheckIcon />),
                    r("Supplier Quotes", <FactCheckIcon />),
                    r("Purchase Orders", <FactCheckIcon />),
                ],
            },
            {
                label: "Payments",
                items: [
                    r("Supplier Payments", <AttachMoneyIcon />),
                    r("Pending Payments", <AttachMoneyIcon />),
                ],
            },
        ],
    },

    Loans: {
        name: "Loans",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Loans",
                items: [
                    r("Loan Members", <PeopleIcon />),
                    r("Loan Applications", <FactCheckIcon />),
                    r("Loans", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Reports",
                items: [
                    r("Loan Portfolio Report", <ReceiptLongIcon />),
                    r("Loan Report", <ReceiptLongIcon />),
                ],
            },
        ],
    },

    Finance: {
        name: "Finance",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Cash Transactions",
                items: [
                    r("Cash Transactions", <AttachMoneyIcon />),
                    r("Cash In", <AttachMoneyIcon />),
                    r("Cash Out", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Accounts",
                items: [
                    r("Accounts", <AccountBalanceIcon />),
                    r("Sub Accounts", <AccountBalanceIcon />),
                ],
            },
            {
                label: "Reports",
                items: [
                    r("Trial Balance", <ReceiptLongIcon />),
                    r("Profit and Loss", <ReceiptLongIcon />),
                    r("Balance Sheets", <ReceiptLongIcon />),
                ],
            },
        ],
    },

    "Human Resource": {
        name: "Human Resource",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Employees",
                items: [
                    r("Employees", <PeopleIcon />),
                    r("Employee Qualifications", <WorkIcon />),
                    r("Member Bank Accounts", <AccountBalanceIcon />),
                ],
            },
            {
                label: "Leave Management",
                items: [
                    r("Leave Applications", <FactCheckIcon />),
                    r("Leave Types", <SettingsIcon />),
                ],
            },
            {
                label: "Jobs",
                items: [
                    r("Job Requisitions", <WorkIcon />),
                    r("Job Categories", <SettingsIcon />),
                    r("Job Positions", <WorkIcon />),
                ],
            },
            {
                label: "Reports",
                items: [
                    r("Employee Payslip Report", <ReceiptLongIcon />),
                    r("Employee Payrolls", <ReceiptLongIcon />),
                ],
            },
        ],
    },
    Payroll: {
        name: "Payroll",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "Members",
                items: [r("Member Payroll", <AttachMoneyIcon />)],
            },
            {
                label: "Transporters",
                items: [
                    r("Monthly Pay Date Ranges", <AttachMoneyIcon />),
                    r("Pay Rates", <AttachMoneyIcon />),
                    r("Transporter Payments", <AttachMoneyIcon />),
                    r("Deductions Recovery", <AttachMoneyIcon />),
                    r("Transporter Payroll", <AttachMoneyIcon />),
                    r("Transporter Deductions", <AttachMoneyIcon />),
                ],
            },
        ],
    },
    SMS: {
        name: "SMS",
        sections: [
            {
                items: [r("Dashboard", <DashboardIcon />)],
            },
            {
                label: "SMS",
                items: [
                    r("Quick SMS", <SmsIcon />),
                    r("Inbox", <SmsIcon />),
                    r("Outbox", <SmsIcon />),
                ],
            },
            {
                label: "Broadcasts",
                items: [
                    r("Alerts", <SmsIcon />),
                    r("Contacts", <PeopleIcon />),
                ],
            },
        ],
    },
};
