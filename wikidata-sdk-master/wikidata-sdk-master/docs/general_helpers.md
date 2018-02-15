# Helpers

## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Work with ids](#work-with-ids)
  - [isItemId](#isitemid)
  - [isPropertyId](#ispropertyid)
  - [isEntityId](#isentityid)
  - [isNumericId](#isnumericid)
  - [getNumericId](#getnumericid)
- [Sitelink helpers](#sitelink-helpers)
  - [getSitelinkUrl](#getsitelinkurl)
  - [getSitelinkData](#getsitelinkdata)
  - [isSitelinkKey](#issitelinkkey)
- [Wikidata Time converters](#wikidata-time-converters)
  - [wikidataTimeToDateObject](#wikidatatimetodateobject)
  - [wikidataTimeToEpochTime](#wikidatatimetoepochtime)
  - [wikidataTimeToISOString](#wikidatatimetoisostring)
  - [wikidataTimeToSimpleDay](#wikidatatimetosimpleday)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Work with ids

### isItemId
item ids a.k.a. `Q` ids

### isPropertyId
Property ids a.k.a. `P` ids

### isEntityId
Accepts both `P` and `Q` ids

### isNumericId

### getNumericId

## Sitelink helpers
### getSitelinkUrl
```js
// multiple arguments interface
wdk.getSitelinkUrl(site, title)

wdk.getSitelinkUrl('commons', 'Lyon')
// => 'https://commons.wikimedia.org/wiki/Lyon'

wdk.getSitelinkUrl('frwiki', 'Septembre')
// => 'https://fr.wikipedia.org/wiki/Septembre'

wdk.getSitelinkUrl('zhwikiquote', '維克多·雨果')
// => 'https://zh.wikiquote.org/wiki/%E7%B6%AD%E5%85%8B%E5%A4%9A%C2%B7%E9%9B%A8%E6%9E%9C'
```
```js
// object interface: allow you to directly pass the API sitelink object
wdk.getSitelinkUrl({ site, title })

wdk.getSitelinkUrl({ site: 'frwiki', title: 'Septembre' })
// => 'https://fr.wikipedia.org/wiki/Septembre'

wdk.getSitelinkUrl({ site: 'eswikiquote', title: 'Gilles Deleuze' })
// => 'https://es.wikiquote.org/wiki/Gilles_Deleuze'

wdk.getSitelinkUrl({ site: 'commons', title: 'Lyon' })
// => 'https://commons.wikimedia.org/wiki/Lyon'

wdk.getSitelinkUrl({ site: 'wikidata', title: 'Q1' })
// => 'https://wikidata.org/wiki/Q1'

wdk.getSitelinkUrl({ site: 'zhwikiquote', title: '維克多·雨果' })
// => 'https://zh.wikiquote.org/wiki/%E7%B6%AD%E5%85%8B%E5%A4%9A%C2%B7%E9%9B%A8%E6%9E%9C'
```

### getSitelinkData
```js
getSitelinkData('frwiki')
// => { lang: 'fr', project: 'wikipedia' }
getSitelinkData('dewikiquote')
// => { lang: 'de', project: 'wikiquote' }

// Using 'en' as placeholder lang for commons and wikidata
getSitelinkData('commons')
// => { lang: 'en', project: 'commons' }
getSitelinkData('wikidata')
// => { lang: 'en', project: 'wikidata' }
```

### isSitelinkKey
```js
isSitelinkKey('frwiki')
// => true
isSitelinkKey('dewikiquote')
// => true
isSitelinkKey('commons')
// => true
// Accepting wikidata as a valid sitelink for convenience
isSitelinkKey('wikidata')
// => true
isSitelinkKey('frwikilinpinpin')
// => false
// /!\ langs are loosly validated
isSitelinkKey('imaginarylangwiki')
// => true
```

## Wikidata Time converters
> See [Wikidata time values](https://www.mediawiki.org/wiki/Wikibase/DataModel#Dates_and_times)

### wikidataTimeToDateObject

### wikidataTimeToEpochTime

### wikidataTimeToISOString
Uses [extended years following ECMAScript standard](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15.1)
```js
var wikidataTime = '+1885-05-22T00:00:00Z'
wdk.wikidataTimeToISOString(wikidataTime)
// => '1885-05-22T00:00:00.000Z'

wikidataTime = '+0180-03-17T00:00:00Z'
wdk.wikidataTimeToISOString(wikidataTime)
// => '0180-03-17T00:00:00.000Z'

wikidataTime = '-0398-00-00T00:00:00Z'
wdk.wikidataTimeToISOString(wikidataTime)
// => '-000398-01-01T00:00:00.000Z'

```
until it can't: when the date are too far in the past or the future, it will simply return the Wikidata time
```js
wikidataTime = '-13798000000-00-00T00:00:00Z'
wdk.wikidataTimeToISOString(wikidataTime)
// => '-13798000000-00-00T00:00:00Z'

```
This is the time normalizer used by `simplify.claims` functions

### wikidataTimeToSimpleDay
Returns dates on the format 'yyyy-mm-dd', 'yyyy-mm', 'yyyy' depending on the date precision. The benefit over the iso or the epoch format is that it preserves the precision.
