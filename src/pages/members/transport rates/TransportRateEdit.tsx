import { TransporterEditPage } from '../../transporters/shared/TransporterEditPage';
import { TransportRateFormFields } from './transport-rate-form-fields';

export const TransportRateEdit = () => (
    <TransporterEditPage
        resource="transport-rates"
        title="Edit Transport Rate"
        subtitle="Update transportation rate details."
        successMessage="Transport rate updated successfully"
    >
        <TransportRateFormFields />
    </TransporterEditPage>
);
