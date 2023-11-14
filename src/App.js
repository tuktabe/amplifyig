//import logo from './logo.svg';
import './App.css';
import { PostCollection } from "./ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
  <div className="App">
    <PostCollection />
  </div>
  );
}
      

export default withAuthenticator(App)
