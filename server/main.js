import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';

import './../imports/api/users';
import {Links} from  './../imports/api/links';
import './../imports/startup/simple-schema-configuration';


Meteor.startup(() => {
  // WebApp.connectHandlers.use((req, res, next) => {
  //
  //   console.log('This is from my custome middleware');
  //   console.log(req.url, req.method, req.headers, req.query);
  //
  //   // // Set HTTP status code
  //   // res.statusCode = 400;
  //   // // Set HTTP headers
  //   // res.setHeader('my-custom-header', 'Simran was here');
  //   // // Set HTTP Body
  //   // res.write('<h1>This is my middleware at work</h1>');
  //   // //End HTTP request
  //   // res.end();
  //   next();
  // });

  let now = new Date();
  // console.log(now);
  //
  // let momentNow = moment(now);
  // console.log(momentNow.fromNow());
  //

  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1); // remove the /(splash)
    const link = Links.findOne({ _id });

    if(link) {
      res.statusCode = 302;
      //console.log(link.url);
      res.setHeader('Location', link.url);
      res.end();
      // To Track the last visit
      Meteor.call('links.trackVisit',_id);
    } else {
      next();
    }


  })

});
