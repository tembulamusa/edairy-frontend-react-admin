import { Edit, SimpleForm } from 'react-admin';
import { FixedAssetForm } from './FixedAssetForm';

export const FixedAssetEdit = () => (
    <Edit>
        <SimpleForm>
            <FixedAssetForm />
        </SimpleForm>
    </Edit>
);