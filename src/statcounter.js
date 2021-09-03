/**
 * Copyright (c) jsPlumb Pty Ltd
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({location}) {
      _statcounter.record_pageview()
    },
  };
})();
