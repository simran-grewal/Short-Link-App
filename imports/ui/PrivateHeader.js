import React from 'react';
import PropTypes from 'prop-types';

import {Accounts} from 'meteor/accounts-base';


const PrivateHeader = (props) => {

  const onLogout = () => {
    Accounts.logout();
  }

  const renderTitle = () => {
    return (
      <h1 className = "header__title">{props.title}</h1>
    );
  }

  return (
    <div className = "header">
      <div className = "header__content">
        {renderTitle()}
        <button className = "button button--link-text" onClick = {onLogout.bind(this)}>Logout</button>
     </div>
  </div>
  );

}

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
