import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {onAuthChange, routes} from './../imports/routes/routes';
import './../imports/startup/simple-schema-configuration.js';

//Keep Track of Authenticated
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});



Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('app'));
});
