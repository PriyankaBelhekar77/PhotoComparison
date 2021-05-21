import React, { Fragment } from 'react';
import giphy from './giphy.gif'

const Spinner = () => <Fragment>
  <img src={giphy} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }}/>
</Fragment>
export default Spinner;
