import React from 'react';

import AddLink from './AddLink';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';

export default (props) => {

    var title = "Your Links";
    return (
      <div>
        <PrivateHeader title = {title}/>
        <div className = "page-content">
          <LinksListFilters/>
          <AddLink/>
          <LinksList/>
        </div>
      </div>
    );
}
