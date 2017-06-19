import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Links} from './../api/links';

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
        var links = Links.find({}).fetch();
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
              <h2>No Url in the List</h2>
            )
          } else{

            return links.map((link) => {
                  return <p key = {link._id}>{link.url}</p>
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
