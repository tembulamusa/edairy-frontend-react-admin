import { Resource } from 'react-admin';
import { SmsMessagesList } from '../pages/admin/sms/sms-messages/sms-messages';

/* ============ SUPPLIERS MODULE ============ */

export const smsResources = [
    <Resource key="sms-messages" name="sms-messages" list={SmsMessagesList} />,
];