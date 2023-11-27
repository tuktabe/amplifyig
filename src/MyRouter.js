import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Routes } from "react-router-dom";
import { Backhurt, BackhurtCollection, FeedpageCollection, ModelcatCollection, NewfeedCollection, PostCollection, ProfileCollection, Profilefix, ProfileScreen, ProfileScreenCollection, Feedprofile, FeedprofileCollection } from "./ui-components";

export default function Root() {
  document.body.style.background = 'none';
  document.body.style.backgroundColor = "beige";

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


//document.body.style.background = 'none';
//document.body.style.backgroundColor = "beige";
