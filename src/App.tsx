import {
  Admin,
  Resource
} from 'react-admin'

import { dataProvider } from "./dataProvider"
import Layout from './Layout';
import { MemberList } from './pages/members/members/member-list';
import { MemberBankAccountList } from './pages/members/member bank accounts/member-bank-account-list';
import { TransportRateList } from './pages/members/transport rates/transport-rates-list';
import { MemberTypeList } from './pages/members/member types/member-types-list';
import { RouteList } from './pages/members/routes/routes-list';
import { RouteCenterList } from './pages/members/route centers/route-center-list';
import { PaymentModeList } from './pages/members/payment modes/payment-mode-list';
import { TrainingList } from './pages/members/trainings/training-list';
import { TrainingSessionList } from './pages/members/training sessions/training-session-list';
import { TrainingSessionAttendeesList } from './pages/members/training session attendees/training-session-attendees-list';
import { ExchangeVisitList } from './pages/members/exchange visits/exchange-visit-list';
import { ExchangeVisitAttendeesList } from './pages/members/exchange visit attendees/exchange-visit-attendees-list';
import { ShareTypeList } from './pages/members/share types/share-types-list';
import { MemberShareList } from './pages/members/member shares/member-shares-list';
import { SharePaymentList } from './pages/members/share payments/share-payments-list';
import { ShareTransferList } from './pages/members/share transfers/share-transfers-list';
import { DividendList } from './pages/members/dividends/dividends-list';
import { MemberWithMissingDetailsList } from './pages/members/reports/member-with-missing-details-list';
import { Dashboard } from './pages/dashboard';
import { authProvider } from './components/auth/auth-provider';
import { LoginPage } from './pages/auth/login';
import { Logo } from './components/logo';

const App = () => {
  return (
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
      loginPage={LoginPage}
      logo={Logo}
    >
      <Resource name="members" list={MemberList} />
      <Resource name="member-bank-accounts" list={MemberBankAccountList} />
      <Resource name="transport-rates" list={TransportRateList} />
      <Resource name="member-types" list={MemberTypeList} />
      <Resource name="routes" list={RouteList} />
      <Resource name="route-centers" list={RouteCenterList} />
      <Resource name="payment-modes" list={PaymentModeList} />
      <Resource name="trainings" list={TrainingList} />
      <Resource name="training-sessions" list={TrainingSessionList} />
      <Resource name="training-session-attendees" list={TrainingSessionAttendeesList} />
      <Resource name="exchange-visits" list={ExchangeVisitList} />
      <Resource name="exchange-visit-attendees" list={ExchangeVisitAttendeesList} />
      <Resource name="share-types" list={ShareTypeList} />
      <Resource name="member-shares" list={MemberShareList} />
      <Resource name="share-payments" list={SharePaymentList} />
      <Resource name="share-transfers" list={ShareTransferList} />
      <Resource name="dividends" list={DividendList} />
      <Resource name="member-with-missing-details" list={MemberWithMissingDetailsList} />
    </Admin>
  );

}

export default App
