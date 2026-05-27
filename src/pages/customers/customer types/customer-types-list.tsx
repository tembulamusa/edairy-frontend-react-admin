import { DataTable } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerTypeList = () => (
    <CustomersListWrapper title="Customer Types" subtitle="Manage types used to classify customers">
        <DataTable.Col source="type_code" label="Code" />
        <DataTable.Col source="name" label="Name" />
        <DataTable.Col source="description" label="Description" />
    </CustomersListWrapper>
);
