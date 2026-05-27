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
import LocationOnIcon from "@mui/icons-material/LocationOn";

/* ============ HELPER ============ */
const r = (label: string, icon?: ReactNode) => ({
    label,
    resource: label.toLowerCase().replace(/\s+/g, "-"),
    icon,
});

const s = (label: string, resource: string, icon?: ReactNode) => ({
    label,
    resource,
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
                items: [
                    r("Activity Logs", <ReceiptLongIcon />)
                ],
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
                label: "Setup",
                items: [
                    s("Document Types", "document-types", <SettingsIcon />),

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
                label: "Organization",
                items: [
                    r("Organization Details", <SettingsIcon />),
                    r("Organization Addresses", <LocationOnIcon />),
                    r("Organization Banks", <AccountBalanceIcon />),
                    r("Organization Documents", <Inventory2Icon />),
                    // r("Organization Kyb Comments", <ReceiptLongIcon />),
                    r("Organization Leaderships", <PeopleIcon />),
                    r("Organization Wallets", <AttachMoneyIcon />),
                    r("Departments", <WorkIcon />),
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
                    s("Transport Rates", "transport-rates", <LocalShippingIcon />),
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
                label: "Livestock",
                items: [
                    r("Share Types", <AttachMoneyIcon />),
                    r("Share Accounts", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Reports",
                items: [r("Member with Missing Details", <FactCheckIcon />)],
            },
            {
                label: "Setup",
                items: [
                    s("Locations", "locations", <LocationOnIcon />),
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
                label: "Setup",
                items: [s("Transporter Types", "transporter-types", <SettingsIcon />)],
            },
            {
                label: "Transporters",
                items: [
                    r("Transporters", <LocalShippingIcon />),
                    r("Transporter Vehicles", <LocalShippingIcon />),
                    r("Transporter Route Assignments", <LocalShippingIcon />),
                    r("Transporter Drivers", <LocalShippingIcon />),
                    r("Transporter Driver Assignments", <LocalShippingIcon />),
                    s("Transport Rates", "transport-rates", <LocalShippingIcon />),
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
                    s("Milk Cans", "milk-cans", <Inventory2Icon />),
                    s("Product Grades", "product-grades", <FactCheckIcon />),
                    s("Milk Delivery Shifts", "milk-delivery-shifts", <WorkIcon />),
                ],
            },
            {
                label: "Milk Collection",
                items: [
                    s("Milk Journals", "milk-journals", <AgricultureIcon />),
                    s("Milk Journal Entries", "milk-journal-entries", <AgricultureIcon />),
                    s("Milk Rejects", "milk-rejects", <FactCheckIcon />),
                    s("Stray Milk Collections", "stray-milk-collections", <AgricultureIcon />),
                ],
            },
            {
                label: "Transporters",
                items: [
                    s("Cooler Milk Collection", "cooler-milk-collections", <AgricultureIcon />),
                    s("Milk Deliveries", "milk-deliveries", <AgricultureIcon />),
                    s("Milk Local Sales", "milk-local-sales", <StoreIcon />),
                    s("Daily Milk Variances", "daily-milk-variances", <FactCheckIcon />),
                    s("Can Movements", "can-movements", <Inventory2Icon />),
                ],
            },
            {
                label: "Reports",
                items: [
                    s("Milk Delivery Reports", "milk-delivery-reports", <ReceiptLongIcon />),
                    s("Member Payroll Summary", "member-payroll-summary", <ReceiptLongIcon />),
                    s("Member Statement", "member-statement", <ReceiptLongIcon />),
                    s("Monthly Collections", "monthly-collections", <AgricultureIcon />),
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
                    r("Store Sales", <AttachMoneyIcon />),
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
                    r("Customer Billings", <AttachMoneyIcon />),
                    r("Customer Invoices", <ReceiptLongIcon />),
                    r("Customer Payments", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Setup",
                items: [
                    r("Customer Types", <SettingsIcon />),
                    r("Customers", <PeopleIcon />),
                    r("Customer Milk Rates", <AgricultureIcon />),
                    r("Customer Pay Date Ranges", <AttachMoneyIcon />),
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
                label: "Supplies",
                items: [
                    r("Supplier Quotes", <FactCheckIcon />),
                    r("Supplies", <Inventory2Icon />),
                    r("Supply Rejects", <FactCheckIcon />),
                    r("Purchase Orders", <FactCheckIcon />),
                    r("Purchase Requisitions", <FactCheckIcon />),],
            },
            {
                label: "Setup",
                items: [
                    r("Supplier Categories", <SettingsIcon />),
                    r("Suppliers", <PeopleIcon />),
                    r("Supplier Bank Accounts", <AccountBalanceIcon />),
                    r("Supplier Contacts", <PeopleIcon />),
                    r("Supplier Documents", <Inventory2Icon />),
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
                label: "Members & Loans",
                items: [
                    r("Loan Accounts", <PeopleIcon />),
                    r("Loans", <AttachMoneyIcon />),
                ],
            },
            {
                label: "Organization info",
                items: [
                    r("Organization Details", <ReceiptLongIcon />),
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
                label: "Setup",
                items: [
                    r("Employee Deduction Types", <SettingsIcon />),
                    r("Employee Leave Types", <SettingsIcon />),
                    r("Employee Termination Categories", <FactCheckIcon />),
                ],
            },
            {
                label: "Employees",
                items: [
                    r("Employees", <PeopleIcon />),
                    r("Employee Bank Accounts", <AccountBalanceIcon />),
                    r("Employee Dependants", <PeopleIcon />),
                    r("Employee Exit Details", <ReceiptLongIcon />),
                    r("Employee Qualifications", <WorkIcon />),
                ],
            },
            {
                label: "Leave Management",
                items: [
                    s("Employee Leave Applications", "employee-leave-applications", <FactCheckIcon />),
                    s("Employee Leave Assignments", "employee-leave-assignments", <FactCheckIcon />),
                    s("Employee Leave Details", "employee-leave-details", <FactCheckIcon />),
                ],
            },
            {
                label: "Payroll",
                items: [
                    s("Employee Benefits", "employee-benefits", <AttachMoneyIcon />),
                    s("Employee Payroll Benefits", "employee-payroll-benefits", <AttachMoneyIcon />),
                    s("Employee Payroll Deductions", "employee-payroll-deductions", <AttachMoneyIcon />),
                    s("Employee Payroll Reliefs", "employee-payroll-reliefs", <AttachMoneyIcon />),
                    s("Employee Payrolls", "employee-payrolls", <AttachMoneyIcon />),
                    s("Employee Payslips", "employee-payslips", <ReceiptLongIcon />),
                    s("Employee Salaries", "employee-salaries", <AttachMoneyIcon />),
                    s("Employee Reliefs", "employee-reliefs", <AttachMoneyIcon />),
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
                    r("SMS Messages", <SmsIcon />),
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
