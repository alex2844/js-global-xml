# js-global-xml

[![Version](https://img.shields.io/npm/v/js-global-xml.svg)](https://www.npmjs.org/package/js-global-xml 'npm')

## Universal XML API for Nodejs, Browsers and Google Apps Script

#### Install
###### nodejs
``` bash
npm install js-global-xml
```
###### cdn
``` html
<script src="https://alex2844.github.io/js-global-xml/dist/globalXml.js"></script>
```

#### Usage
``` javascript
const XML = require('js-global-xml');
const xmlStr = `<?xml version="1.0" encoding="utf-8"?>
<recipe name="хлеб" preptime="5min" cooktime="180min">
   <title>Простой хлеб</title>
   <composition>
      <ingredient amount="3" unit="стакан">Мука</ingredient>
      <ingredient amount="0.25" unit="грамм">Дрожжи</ingredient>
      <ingredient amount="1.5" unit="стакан">Тёплая вода</ingredient>
   </composition>
   <instructions>
     <step>Смешать все ингредиенты и тщательно замесить.</step>
     <step>Закрыть тканью и оставить на один час в тёплом помещении.</step>
     <step>Замесить ещё раз, положить на противень и поставить в духовку.</step>
   </instructions>
</recipe>`;
console.log(XML.parse(xmlStr));
```
