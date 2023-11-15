import logo from './logo.svg';
import './App.css';
import { PostCollection } from "./ui-components";
import { withAuthenticator, Button } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from "react";

function App({ signOut }) {
  return (
  <div className="App">
    <UploadpageCollection />
    <Button onClick={signOut}>Sign Out</Button>
  </div> 
  );
}


export default withAuthenticator(App)
