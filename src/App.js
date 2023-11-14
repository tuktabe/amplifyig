//import logo from './logo.svg';
import './App.css';
import { PostCollection } from "./ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ signOut, user }) {
  return (
  //<div className="App">
    //<PostCollection />
  //</div>

  <div className="App">
    {user.attributes.email}
    <button onClick={signOut}>Sign out</button>
  </div>  

  );
}
      

export default withAuthenticator(App)
