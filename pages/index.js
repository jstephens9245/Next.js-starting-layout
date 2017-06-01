import Link from 'next/link';
import React from 'react';

// @components is an alias. see babelrc for module resolutions
import Example from '@components/example';

export default () => (
  <div>
    <h1>
      Hi developer! I'm the index page! I get loaded from our
      <code> pages </code>
      directory

      <div>
        <Example /> is a example component
      </div>
    </h1>
  </div>
);
