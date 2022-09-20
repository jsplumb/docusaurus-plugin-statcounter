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
      if (typeof _statcounter !== "undefined") {
        _statcounter.record_pageview()
      }
    },
  };
})();
