import { TransporterCreatePage } from '../../transporters/shared/TransporterCreatePage';
import { TransportRateFormFields } from './transport-rate-form-fields';

export const TransportRateCreate = () => (
    <TransporterCreatePage
        resource="transport-rates"
        title="New Transport Rate"
        subtitle="Define a transportation rate for a specific route."
        successMessage="Transport rate created successfully"
    >
        <TransportRateFormFields />
    </TransporterCreatePage>
);
