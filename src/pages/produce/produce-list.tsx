import { DataTable } from 'react-admin';
import { ProduceListWrapper } from './shared/produce-list-layout';

/** Generic list for produce resources with standard id/name columns. */
export const createProduceList = (title: string, subtitle?: string) => () => (
    <ProduceListWrapper title={title} subtitle={subtitle ?? `Manage ${title.toLowerCase()}`}>
        <DataTable.Col source="id" label="ID" />
        <DataTable.Col source="name" label="Name" />
        <DataTable.Col source="created_at" label="Created At" />
    </ProduceListWrapper>
);
