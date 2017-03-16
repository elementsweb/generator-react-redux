import React from 'react';

import '../base.scss';

export default function App({ children }) {
  return (
    <div>
      {children}
      Hello, world!
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};
