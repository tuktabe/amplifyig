import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Routes } from "react-router-dom";
import { Backhurt, BackhurtCollection, FeedpageCollection, ModelcatCollection, NewfeedCollection, PostCollection, ProfileCollection, Profilefix, ProfileScreen, ProfileScreenCollection, Feedprofile, FeedprofileCollection } from "./ui-components";

export default function Root() {


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={FeedprofileCollection} />
          <Route exact path="/collection" component={FeedprofileCollection} />
          <Route exact path="/ProfileCollection" component={ProfileCollection} />
          <Route exact path="/ProfileScreenCollection" component={ProfileScreenCollection} />
        
          
        </Switch>
      </div>
    </Router>
  );
}

