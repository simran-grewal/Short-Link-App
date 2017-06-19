import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {onAuthChange, routes} from './../imports/routes/routes';
import {Links} from './../imports/api/links';

//Keep Track of Authenticated
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// Tracker.autorun(() => {
//   var links = Links.find({}).fetch();
//   console.log('New Links',links);
//
// });

Meteor.startup(() => {
  ReactDom.render(routes, document.getElementById('app'));
});
