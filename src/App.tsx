import {
  Admin,
  ListGuesser,
  Resource,
} from 'react-admin';

import { dataProvider } from "./dataProvider"
import Layout from './Layout';
import { authProvider } from './components/auth/auth-provider';
import { LoginPage } from './pages/auth/login';
import { Dashboard } from './pages/dashboard';
import { suppliersResources } from './modules/suppliers.resources';
import { customersResources } from './modules/customers.resources';
import { humanResourceResources } from './modules/hr.resources';
import { membersResources } from './modules/members.resources';
import { transportersResources } from './modules/transporters.resources';
import { produceResources } from './modules/produce.resources';
import { storesResources } from './modules/stores.resources';
import { loansResources } from './modules/loans.resources';
import { adminResources } from './modules/admin.resources';
import { smsResources } from './modules/sms.resources';
import { livestockResources } from './modules/livestock.resources';


const Logo = () => (
  <svg width="100" height="30" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="20" fontFamily="Verdana" fontSize="15" fill="blue">eDairy</text>
  </svg>
);

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
      {membersResources}
      {transportersResources}
      {produceResources}
      {storesResources}
      {suppliersResources}
      {customersResources}
      {loansResources}
      {adminResources}
      {humanResourceResources}
      {smsResources}
      {livestockResources}
    </Admin>

  );

}

export default App
