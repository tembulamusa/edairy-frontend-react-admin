import { DataTable } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const ProductGradesList = () => (
    <ProduceListWrapper title="Product Grades" subtitle="Manage product grade classifications">
        <DataTable.Col source="name" label="Name" />
        <DataTable.Col source="description" label="Description" />
    </ProduceListWrapper>
);
