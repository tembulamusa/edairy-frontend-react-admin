import {
  Admin
} from 'react-admin'

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




const App = () => {

  return (
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
      loginPage={LoginPage}
      title="EDAIRY ERP System"
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


    </Admin >
  );

}

export default App
