
import { List, DataTable, DateField, BooleanField} from 'react-admin';

export const MemberList = () => (
    <List>
        <DataTable>
            <DataTable.NumberCol source="ID" />
            <DataTable.Col source="CreatedAt">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="UpdatedAt">
                <DateField source="UpdatedAt" />
            </DataTable.Col>
            <DataTable.Col source="DeletedAt" />
            <DataTable.Col source="CreatedBy">
                <DateField source="CreatedBy" />
            </DataTable.Col>
            <DataTable.Col source="MemberNo" />
            <DataTable.Col source="FirstName" />
            <DataTable.Col source="LastName" />
            <DataTable.Col source="OtherNames" />
            <DataTable.Col source="IDNumber" />
            <DataTable.Col source="Gender" />
            <DataTable.Col source="DateOfBirth">
                <DateField source="DateOfBirth" />
            </DataTable.Col>
            <DataTable.Col source="PrimaryPhone" />
            <DataTable.Col source="SecondaryPhone" />
            <DataTable.Col source="Email" />
            <DataTable.Col source="TaxNumber" />
            <DataTable.Col source="MaritalStatus" />
            <DataTable.Col source="Status" />
            <DataTable.NumberCol source="RouteID" />
            <DataTable.NumberCol source="MemberTypeID" />
            <DataTable.NumberCol source="NumberOfCows" />
            <DataTable.Col source="NextOfKinFullName" />
            <DataTable.Col source="NextOfKinPhone" />
            <DataTable.Col source="DateRegistered">
                <DateField source="DateRegistered" />
            </DataTable.Col>
            <DataTable.Col source="PassportPhoto" />
            <DataTable.Col source="IdFrontPhoto" />
            <DataTable.Col source="IdBackPhoto" />
            <DataTable.Col source="UpdatedBy" />
            <DataTable.Col source="Downloaded" />
            <DataTable.Col source="BirthCity" />
            <DataTable.Col source="IdDateOfIssue">
                <DateField source="IdDateOfIssue" />
            </DataTable.Col>
            <DataTable.Col source="Title" />
            <DataTable.Col source="CashoutEnrolled">
                <BooleanField source="CashoutEnrolled" />
            </DataTable.Col>
            <DataTable.Col source="id" />
        </DataTable>
    </List>
);