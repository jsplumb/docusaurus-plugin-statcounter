# docusaurus-plugin-statcounter
A docusaurus plugin offering integration with StatCounter

**This plugin is for v2 of Docusaurus**

## Installation

```bash
npm i @jsplumb/docusaurus-plugin-statcounter
```

## Configuration

- Add the plugin to the `plugins` array in your `docusaurus.config.js`:

```json
plugins:[
    ...
    "@jsplumb/docusaurus-plugin-statcounter",
    ...
],
```

- Add a `statCounter` entry to the `themeConfig` section of your `docusaurus.config.js`:

```json
themeConfig: {
  statCounter:{
    projectId:"PROJECT ID",
    securityCode:"SECURITY CODE"
  },
  ...
  
}
```

`projectId` and `securityCode` are available in the Statcounter console.
