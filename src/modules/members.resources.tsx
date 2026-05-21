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
import { ExchangeVisitCreate, ExchangeVisitEdit, ExchangeVisitShow } from '../pages/members/exchange visits/ExchangeVisitPages';
import { ExchangeVisitAttendeesList } from '../pages/members/exchange visit attendees/exchange-visit-attendees-list';
import { ExchangeVisitAttendeeCreate, ExchangeVisitAttendeeEdit, ExchangeVisitAttendeeShow } from '../pages/members/exchange visit attendees/ExchangeVisitAttendeePages';
import { ShareTypeList } from '../pages/members/share types/share-types-list';
import { MemberShareList } from '../pages/members/member shares/member-shares-list';
import { ShareTransactionList } from '../pages/members/share transactions/share-transactions-list';
import { SharePaymentList } from '../pages/members/share payments/share-payments-list';
import { ShareTransferList } from '../pages/members/share transfers/share-transfers-list';
import { DividendDeclarationList } from '../pages/members/dividend declarations/dividend-declarations-list';
import { DividendDeclarationCreate, DividendDeclarationEdit, DividendDeclarationShow } from '../pages/members/dividend declarations/DividendDeclarationPages';
import { ShareDividendList as MemberShareDividendList } from '../pages/members/dividends/dividends-list';
import { ShareDividendCreate as MemberShareDividendCreate, ShareDividendEdit as MemberShareDividendEdit, ShareDividendShow as MemberShareDividendShow } from '../pages/members/dividends/ShareDividendPages';
import { MemberWithMissingDetailsList } from '../pages/members/reports/member-with-missing-details-list';

export const membersResources = [
    <Resource key="members" name="members" list={MemberList} />,
    <Resource key="member-bank-accounts" name="member-bank-accounts" list={MemberBankAccountList} />,
    <Resource key="transport-rates" name="transport-rates" list={TransportRateList} />,
    <Resource key="member-types" name="member-types" list={MemberTypeList} />,
    <Resource key="routes" name="routes" list={RouteList} />,
    <Resource key="route-centers" name="route-centers" list={RouteCenterList} />,
    <Resource key="payment-modes" name="payment-modes" list={PaymentModeList} />,
    <Resource key="trainings" name="trainings" list={TrainingList} />,
    <Resource key="training-sessions" name="training-sessions" list={TrainingSessionList} />,
    <Resource key="training-session-attendees" name="training-session-attendees" list={TrainingSessionAttendeesList} />,
    <Resource key="exchange-visits" name="exchange-visits" list={ExchangeVisitList} create={ExchangeVisitCreate} edit={ExchangeVisitEdit} show={ExchangeVisitShow} />,
    <Resource key="exchange-visit-attendees" name="exchange-visit-attendees" list={ExchangeVisitAttendeesList} create={ExchangeVisitAttendeeCreate} edit={ExchangeVisitAttendeeEdit} show={ExchangeVisitAttendeeShow} />,
    <Resource key="share-types" name="share-types" list={ShareTypeList} />,
    <Resource key="share-accounts" name="share-accounts" list={MemberShareList} />,
    <Resource key="share-payments" name="share-payments" list={SharePaymentList} />,
    <Resource key="share-transfers" name="share-transfers" list={ShareTransferList} />,
    <Resource key="dividend-declarations" name="dividend-declarations" list={DividendDeclarationList} create={DividendDeclarationCreate} edit={DividendDeclarationEdit} show={DividendDeclarationShow} />,
    <Resource key="dividends" name="dividends" list={MemberShareDividendList} create={MemberShareDividendCreate} edit={MemberShareDividendEdit} show={MemberShareDividendShow} />,
    <Resource key="member-with-missing-details" name="member-with-missing-details" list={MemberWithMissingDetailsList} />,
];