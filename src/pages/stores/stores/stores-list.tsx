import { DataTable } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const StoresList = () => (
    <StoresListWrapper title="Stores" subtitle="Manage store locations" showDelete={false}>
        <DataTable.Col source="name" label="Name" />
        <DataTable.Col source="description" label="Description" />
    </StoresListWrapper>
);
