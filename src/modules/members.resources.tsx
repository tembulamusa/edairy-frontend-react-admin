import { Resource } from 'react-admin';

/* ============ MEMBERS MODULE ============ */
import { MemberList } from '../pages/members/members/member-list';
import { MemberBankAccountList } from '../pages/members/member bank accounts/member-bank-account-list';
import { TransportRateList } from '../pages/members/transport rates/transport-rates-list';
import { MemberTypeList } from '../pages/members/member types/member-types-list';
import { RouteList } from '../pages/members/routes/routes-list';
import { RouteCenterList } from '../pages/members/route centers/route-center-list';
import { PaymentModeList } from '../pages/members/payment modes/payment-mode-list';
import { TrainingList } from '../pages/members/trainings/training-list';
import { TrainingSessionList } from '../pages/members/training sessions/training-session-list';
import { TrainingSessionAttendeesList } from '../pages/members/training session attendees/training-session-attendees-list';
import { ExchangeVisitList } from '../pages/members/exchange visits/exchange-visit-list';
import { ExchangeVisitAttendeesList } from '../pages/members/exchange visit attendees/exchange-visit-attendees-list';
import { ShareTypeList } from '../pages/members/share types/share-types-list';
import { MemberShareList } from '../pages/members/member shares/member-shares-list';
import { ShareTransactionList } from '../pages/members/share transactions/share-transactions-list';
import { SharePaymentList } from '../pages/members/share payments/share-payments-list';
import { ShareTransferList } from '../pages/members/share transfers/share-transfers-list';
import { DividendDeclarationList } from '../pages/members/dividend declarations/dividend-declarations-list';
import { ShareDividendList as MemberShareDividendList } from '../pages/members/dividends/dividends-list';
import { MemberWithMissingDetailsList } from '../pages/members/reports/member-with-missing-details-list';
import { MemberCreate } from '../pages/members/members/MemberCreate';
import { MemberBankAccountCreate } from '../pages/members/member bank accounts/MemberBankAccountCreate';
import { TransportRateCreate } from '../pages/members/transport rates/TransportRateCreate';
import { TrainingCreate } from '../pages/members/trainings/TrainingCreate';
import { TrainingSessionCreate } from '../pages/members/training sessions/TrainingSessionCreate';
import { TrainingSessionAttendeeCreate } from '../pages/members/training session attendees/TrainingSessionAttendeeCreate';
import { ExchangeVisitCreate } from '../pages/members/exchange visits/ExchangeVisitCreate';
import { ExchangeVisitAttendeeCreate } from '../pages/members/exchange visit attendees/ExchangeVisitAttendeeCreate';
import { ShareTypeCreate } from '../pages/members/share types/ShareTypeCreate';
import { MemberShareCreate } from '../pages/members/member shares/MemberShareCreate';
import { SharePaymentCreate } from '../pages/members/share payments/SharePaymentCreate';
import { ShareTransferCreate } from '../pages/members/share transfers/ShareTransferCreate';
import { DividendDeclarationCreate } from '../pages/members/dividend declarations/DividendDeclarationCreate';
import { ShareDividendCreate as MemberShareDividendCreate } from '../pages/members/dividends/ShareDividendCreate';

export const membersResources = [
    <Resource key="members" name="members" list={MemberList} create={MemberCreate} />,
    <Resource key="member-bank-accounts" name="member-bank-accounts" list={MemberBankAccountList} create={MemberBankAccountCreate} />,
    <Resource key="transport-rates" name="transport-rates" list={TransportRateList} create={TransportRateCreate} />,
    <Resource key="member-types" name="member-types" list={MemberTypeList} />,
    <Resource key="routes" name="routes" list={RouteList} />,
    <Resource key="route-centers" name="route-centers" list={RouteCenterList} />,
    <Resource key="payment-modes" name="payment-modes" list={PaymentModeList} />,
    <Resource key="trainings" name="trainings" list={TrainingList} create={TrainingCreate} />,
    <Resource key="training-sessions" name="training-sessions" list={TrainingSessionList} create={TrainingSessionCreate} />,
    <Resource key="training-session-attendees" name="training-session-attendees" list={TrainingSessionAttendeesList} create={TrainingSessionAttendeeCreate} />,
    <Resource key="exchange-visits" name="exchange-visits" list={ExchangeVisitList} create={ExchangeVisitCreate} />,
    <Resource key="exchange-visit-attendees" name="exchange-visit-attendees" list={ExchangeVisitAttendeesList} create={ExchangeVisitAttendeeCreate} />,
    <Resource key="share-types" name="share-types" list={ShareTypeList} create={ShareTypeCreate} />,
    <Resource key="share-accounts" name="share-accounts" list={MemberShareList} create={MemberShareCreate} />,
    <Resource key="share-payments" name="share-payments" list={SharePaymentList} create={SharePaymentCreate} />,
    <Resource key="share-transfers" name="share-transfers" list={ShareTransferList} create={ShareTransferCreate} />,
    <Resource key="dividend-declarations" name="dividend-declarations" list={DividendDeclarationList} create={DividendDeclarationCreate} />,
    <Resource key="dividends" name="dividends" list={MemberShareDividendList} create={MemberShareDividendCreate} />,
    <Resource key="member-with-missing-details" name="member-with-missing-details" list={MemberWithMissingDetailsList} />,
];