import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9) {
        return this.setState({error: 'Password must be more than 8 character long'});
    }

    Accounts.createUser({email, password}, (err) => {
      if(err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });


  }
  render () {
    return (
        <div>
          <h1>Join Short Lnk</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

            <form onSubmit = {this.onSubmit.bind(this)} noValidate>
              <input type = "email" ref = "email" name = "email" placeholder = "Email"/>
              <input type = "password" ref = "password" name = "password" placeholder = "password"/>
              <button>Create Acount</button>
            </form>
          <Link to = "/">Already having account?</Link>
        </div>
    )
  }
}