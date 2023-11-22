import logo from './logo.svg';
import './App.css';
import { Backhurt, BackhurtCollection, FeedpageCollection, ModelcatCollection, NewfeedCollection, PostCollection, ProfileCollection } from "./ui-components";
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Root from './MyRouter';



//function App({ signOut }) {
//return (
//<div className="App">
//<BackhurtCollection />  
//<Button onClick={signOut}>Sign Out</Button>
//</div> 
//);
//}

function App({ signOut }) {
  return(
    <div className="App">
  <Root />
  <Button onClick={signOut}>Sign Out</Button>
  </div>);
}



export default withAuthenticator(App);


