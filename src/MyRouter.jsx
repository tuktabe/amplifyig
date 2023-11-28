import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Routes } from "react-router-dom";
import { FeedpageCollection, ModelcatCollection, NewfeedCollection, PostCollection, ProfileCollection, Profilefix, ProfileScreen, ProfileScreenCollection, Feedprofile, FeedprofileCollection, Myuploadpage, Gallery, GalleryCollection } from "./ui-components";
import mypageupload from './mypageupload';


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
          <Route exact path="/mypageupload" component={mypageupload} />
         
        </Switch>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </Router>
  );
}


//document.body.style.background = 'none';
//document.body.style.backgroundColor = "beige";

//document.body.style.background = 'none';
//document.body.style.backgroundColor = "#46a5db";
