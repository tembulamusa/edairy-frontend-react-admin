import { Resource } from 'react-admin';

/* ============ SMS MODULE ============ */
import { SmsCampaignRecipientsList } from '../pages/sms/sms-campaign-recipients/sms-campaign-recipients-list';
import { SmsCampaignRecipientCreate } from '../pages/sms/sms-campaign-recipients/SmsCampaignRecipientCreate';
import { SmsCampaignRecipientEdit } from '../pages/sms/sms-campaign-recipients/SmsCampaignRecipientEdit';
import { SmsCampaignRecipientShow } from '../pages/sms/sms-campaign-recipients/SmsCampaignRecipientShow';
import { SmsCampaignsList } from '../pages/sms/sms-campaigns/sms-campaigns-list';
import { SmsCampaignCreate } from '../pages/sms/sms-campaigns/SmsCampaignCreate';
import { SmsCampaignEdit } from '../pages/sms/sms-campaigns/SmsCampaignEdit';
import { SmsCampaignShow } from '../pages/sms/sms-campaigns/SmsCampaignShow';
import { SmsContactsList } from '../pages/sms/sms-contacts/sms-contacts-list';
import { SmsContactCreate } from '../pages/sms/sms-contacts/SmsContactCreate';
import { SmsContactEdit } from '../pages/sms/sms-contacts/SmsContactEdit';
import { SmsContactShow } from '../pages/sms/sms-contacts/SmsContactShow';
import { SmsGroupsList } from '../pages/sms/sms-groups/sms-groups-list';
import { SmsGroupCreate } from '../pages/sms/sms-groups/SmsGroupCreate';
import { SmsGroupEdit } from '../pages/sms/sms-groups/SmsGroupEdit';
import { SmsGroupShow } from '../pages/sms/sms-groups/SmsGroupShow';
import { SmsMessagesList } from '../pages/sms/sms-messages/sms-messages-list';
import { SmsMessageCreate } from '../pages/sms/sms-messages/SmsMessageCreate';
import { SmsMessageEdit } from '../pages/sms/sms-messages/SmsMessageEdit';
import { SmsMessageShow } from '../pages/sms/sms-messages/SmsMessageShow';
import { SmsProvidersList } from '../pages/sms/sms-providers/sms-providers-list';
import { SmsProviderCreate } from '../pages/sms/sms-providers/SmsProviderCreate';
import { SmsProviderEdit } from '../pages/sms/sms-providers/SmsProviderEdit';
import { SmsProviderShow } from '../pages/sms/sms-providers/SmsProviderShow';
import { SmsQueueList } from '../pages/sms/sms-queue/sms-queue-list';
import { SmsQueueCreate } from '../pages/sms/sms-queue/SmsQueueCreate';
import { SmsQueueEdit } from '../pages/sms/sms-queue/SmsQueueEdit';
import { SmsQueueShow } from '../pages/sms/sms-queue/SmsQueueShow';
import { SmsTemplatesList } from '../pages/sms/sms-templates/sms-templates-list';
import { SmsTemplateCreate } from '../pages/sms/sms-templates/SmsTemplateCreate';
import { SmsTemplateEdit } from '../pages/sms/sms-templates/SmsTemplateEdit';
import { SmsTemplateShow } from '../pages/sms/sms-templates/SmsTemplateShow';

export const smsResources = [
    <Resource key="sms-campaign-recipients" name="sms-campaign-recipients" list={SmsCampaignRecipientsList} create={SmsCampaignRecipientCreate} edit={SmsCampaignRecipientEdit} show={SmsCampaignRecipientShow} />,
    <Resource key="sms-campaigns" name="sms-campaigns" list={SmsCampaignsList} create={SmsCampaignCreate} edit={SmsCampaignEdit} show={SmsCampaignShow} />,
    <Resource key="sms-contacts" name="sms-contacts" list={SmsContactsList} create={SmsContactCreate} edit={SmsContactEdit} show={SmsContactShow} />,
    <Resource key="sms-groups" name="sms-groups" list={SmsGroupsList} create={SmsGroupCreate} edit={SmsGroupEdit} show={SmsGroupShow} />,
    <Resource key="sms-messages" name="sms-messages" list={SmsMessagesList} create={SmsMessageCreate} edit={SmsMessageEdit} show={SmsMessageShow} />,
    <Resource key="sms-providers" name="sms-providers" list={SmsProvidersList} create={SmsProviderCreate} edit={SmsProviderEdit} show={SmsProviderShow} />,
    <Resource key="sms-queue" name="sms-queue" list={SmsQueueList} create={SmsQueueCreate} edit={SmsQueueEdit} show={SmsQueueShow} />,
    <Resource key="sms-templates" name="sms-templates" list={SmsTemplatesList} create={SmsTemplateCreate} edit={SmsTemplateEdit} show={SmsTemplateShow} />,
];