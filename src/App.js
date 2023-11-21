import logo from './logo.svg';
import './App.css';
import { FeedpageCollection, ModelcatCollection, NewfeedCollection, PostCollection, ProfileCollection } from "./ui-components";
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Main from './Main';

function App({ signOut }) {
return (
<div className="App">

<ModelcatCollection />  
<Button onClick={signOut}>Sign Out</Button>
</div> 
);
}




export default withAuthenticator(App)


