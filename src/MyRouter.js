import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Routes } from "react-router-dom";
import { Backhurt, BackhurtCollection, FeedpageCollection, ModelcatCollection, NewfeedCollection, PostCollection, ProfileCollection, Profilefix, ProfileScreen, ProfileScreenCollection, Feedprofile, FeedprofileCollection, Myuploadpage } from "./ui-components";

export default function Root() {
  document.body.style.background = 'none';
  document.body.style.backgroundColor = "beige";

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={FeedprofileCollection} />
          <Route exact path="/" component={FeedprofileCollection} />
          <Route exact path="/GalleryCollection" component={GalleryCollection} />
          <Route exact path="/ProfileScreenCollection" component={ProfileScreenCollection} />
          <Route exact path="/Myuploadpage" component={Myuploadpage} />
       
         


        </Switch>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </Router>
  );
}


//document.body.style.background = 'none';
//document.body.style.backgroundColor = "beige";

//document.body.style.background = 'none';
//document.body.style.backgroundColor = "#46a5db";
