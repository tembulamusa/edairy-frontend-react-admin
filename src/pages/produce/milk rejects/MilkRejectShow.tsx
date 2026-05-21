import { Show, SimpleShowLayout, TextField, DateField, FunctionField } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

type MilkRejectRecord = {
    confirmed?: number | boolean;
    transaction_date?: string;
};

export const MilkRejectShow = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/milk-rejects" underline="hover">
                Milk Rejects
            </Link>
            <Typography color="text.primary">Show</Typography>
        </Breadcrumbs>
        <Show>
            <SimpleShowLayout>
                <DateField source="transaction_date" label="Date" />
                <TextField source="route_name" label="Route Name" />
                <TextField source="quantity" label="Quantity" />
                <TextField source="transporter_name" label="Transporter Name" />
                <TextField source="member_name" label="Member Name" />
                <FunctionField
                    label="Confirmed"
                    render={(record: MilkRejectRecord) =>
                        record?.confirmed === 1 || record?.confirmed === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
                <TextField source="reason" label="Reason" />
                <TextField source="description" label="Description" />
                <TextField source="milk_delivery_shift" label="Shift" />
            </SimpleShowLayout>
        </Show>
    </Box>
);