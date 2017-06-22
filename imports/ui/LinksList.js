import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';

import {Links} from './../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        links: []
      };
    }
    componentDidMount() {
      console.log('componentDidMount LinksList');
      this.linksTracker = Tracker.autorun(() => {
        Meteor.subscribe('links');
        var links = Links.find({
          visible: Session.get('showVisible')
        }).fetch();
        this.setState({ links })
      });
    }

    componentWillUnmount() {
      console.log('componentWillUnmount LinksList');
      this.linksTracker.stop();
    }

    renderLinksListItems() {
      var {links} = this.state

          if(links.length == 0) {
            return (
              <div className = "item">
                <p className = "item__status-message">No Links Found</p>
              </div>
          )
          } else{

            return links.map((link) => {
              const shortUrl = Meteor.absoluteUrl(link._id);
              return <LinksListItem key = {link._id} shortUrl = {shortUrl} {...link}/>;
                  // return <p key = {link._id}>{link.url}</p>
              });

        }
    }
    render () {
      return (
        <div>
          <p>Links List</p>
          <div>
            {this.renderLinksListItems()}
          </div>
        </div>

      );
    }
};
