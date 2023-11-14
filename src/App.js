//import logo from './logo.svg';
import './App.css';
import { PostCollection } from "./ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function App() {
  return (
  <div className="App">
    <PostCollection />
  </div>
  );
}

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}
      

export default withAuthenticator(App)
