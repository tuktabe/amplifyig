import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Routes } from "react-router-dom";
import { CreateUser, Discover16Collection, ProfileScreenCollection, GalleryCollection } from "./ui-components";
import mypageupload from './mypageupload';

export default function Root() {
  document.body.style.background = 'none';
  document.body.style.backgroundColor = "beige";

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Discover16Collection} />
          <Route exact path="/GalleryCollection" component={GalleryCollection} />
          <Route exact path="/ProfileScreenCollection" component={ProfileScreenCollection} />
          <Route exact path="/Myuploadpage" component={CreateUser} />
          <Route exact path="/mypageupload" component={mypageupload} />
        </Switch>
      </div>                                                                                                                                                                                
    </Router>
  );
}



