import { 
  Admin,
  Resource 
} from 'react-admin'

import { dataProvider } from "./dataProvider"
import Layout from './Layout';
import { MemberList } from './pages/members/member-list';
import { Dashboard } from './pages/dashboard';

const App = () => { 
  return (
    <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}> 
      <Resource name="members" list={MemberList} />
    </Admin>
  );

}

export default App
