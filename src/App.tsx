import { 
  Admin,
  Resource 
} from 'react-admin'

import { dataProvider } from "./dataProvider"
import Layout from './Layout';
import { MemberList } from './pages/members/member-list';
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
    </Admin>
  );

}

export default App
