import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import {Meteor} from 'meteor/meteor';
export const Links = new Mongo.Collection('links');

if(Meteor.isServer) {
  Meteor.publish('links', function(){
    return Links.find({userId: this.userId});
  });
}

// Method
//resource.action <-- just naming convention.
Meteor.methods({
  'links.insert'(url) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized')
    }


      new SimpleSchema({
        url: {
          type: String,
          label: 'Your link',
          regEx: SimpleSchema.RegEx.Url
        }
      }).validate({ url });

      Links.insert({
        url,
        userId: this.userId
      });


  }
});
