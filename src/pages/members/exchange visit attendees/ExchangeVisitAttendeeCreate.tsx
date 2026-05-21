import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const AttendeeCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify('Attendee added successfully', { type: 'success' });
                            redirect('create', 'exchange-visit-attendees');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/exchange-visit-attendees')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const ExchangeVisitAttendeeCreate = () => (
    <Create
        title={false}
        sx={{
            "& .RaCreate-main": { display: "flex", justifyContent: "center", padding: 2 },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: "hidden", width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">Add Exchange Visit Attendee</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Record member attendance for an exchange visit.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<AttendeeCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="exchange_visit_id" reference="exchange-visits">
                                    <SelectInput label="Exchange Visit" optionText="purpose" fullWidth variant="outlined" validate={required()} />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="member_id" reference="members">
                                    <SelectInput
                                        label="Member (Optional)"
                                        optionText={(record) => `${record.first_name ?? ''} ${record.last_name ?? ''} (${record.member_no})`.trim()}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="attendance_employee_id" reference="employees">
                                    <SelectInput
                                        label="Attendance Employee"
                                        optionText={(record) => `${record.first_name ?? ''} ${record.last_name ?? ''}`.trim()}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="attendee" label="Attendee Names" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="attendee_designation" label="Designation" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="attendee_organization" label="Organization" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="id_number" label="ID Number" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="phone_number" label="Phone Number" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectInput
                                    source="status"
                                    label="Attendance Status"
                                    choices={[
                                        { id: 'ATTENDED', name: 'Attended' },
                                        { id: 'INVITED', name: 'Invited' },
                                        { id: 'ABSENT', name: 'Absent' },
                                    ]}
                                    fullWidth
                                    variant="outlined"
                                    validate={required()}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput source="comments" label="Comments" multiline rows={3} fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);