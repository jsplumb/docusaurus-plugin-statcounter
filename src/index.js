/**
 * Copyright (c) jsPlumb Pty Ltd
 */

const path = require('path');

module.exports = function (context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {statCounter} = themeConfig || {};

  if (!statCounter) {
    throw new Error(
      `You need to provide a "statCounter" object in the "themeConfig" to use @jsplumb/docusaurus-plugin-statcounter.`
    );
  }

  const {projectId, securityCode} = statCounter;

  if (!projectId) {
    throw new Error(`The statcounter plugin requires a "projectId" to be set`)
  }

  if (!securityCode) {
    throw new Error(`The statcounter plugin requires a "securityCode" to be set`)
  }

  return {
    name: 'docusaurus-plugin-statcounter',

    getClientModules() {
      return [path.resolve(__dirname, './statcounter')]
    },

    injectHtmlTags() {

      return {
        headTags:[
          {
              tagName:'script',
              innerHTML: `
                var sc_project="${projectId}"; 
                var sc_invisible=1; 
                var sc_security="${securityCode}";
              `
          },
          {
            tagName:'script',
            attributes:{
              src:"https://www.statcounter.com/counter/counter.js"
            }
          }
        ]
      }
    }
  };
};
