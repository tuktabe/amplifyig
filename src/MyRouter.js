import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Routes } from "react-router-dom";
import { Backhurt, BackhurtCollection, FeedpageCollection, ModelcatCollection, NewfeedCollection, PostCollection, ProfileCollection, Profilefix } from "./ui-components";

export default function Root() {


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={BackhurtCollection} />
          <Route exact path="/collection" component={BackhurtCollection} />
          <Route exact path="/ProfileCollection" component={ProfileCollection} />
          
        </Switch>
      </div>
    </Router>
  );
}

