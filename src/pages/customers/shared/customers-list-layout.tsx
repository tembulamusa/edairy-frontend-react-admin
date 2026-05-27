import type { ReactNode } from 'react';
import { DataTable } from 'react-admin';
import {
    TransporterListLayout,
    transporterDataTableSx,
} from '../../transporters/shared/TransporterListLayout';
import { ProduceListActionsCol } from '../../produce/shared/ProduceListActionsCol';

type CustomersListWrapperProps = {
    title: string;
    subtitle: string;
    children: ReactNode;
    showCreateButton?: boolean;
    showActions?: boolean;
    showDelete?: boolean;
    rowClick?: 'edit' | 'show' | false;
};

export const CustomersListWrapper = ({
    title,
    subtitle,
    children,
    showCreateButton = true,
    showActions = true,
    showDelete = true,
    rowClick = 'edit',
}: CustomersListWrapperProps) => (
    <TransporterListLayout
        title={title}
        subtitle={subtitle}
        showCreateButton={showCreateButton}
    >
        <DataTable rowClick={rowClick} sx={transporterDataTableSx}>
            {children}
            {showActions ? <ProduceListActionsCol showDelete={showDelete} /> : null}
        </DataTable>
    </TransporterListLayout>
);
