const wdk = module.exports = {}

wdk.searchEntities = require('./queries/search_entities')
wdk.getEntities = require('./queries/get_entities')
wdk.getManyEntities = require('./queries/get_many_entities')
wdk.getWikidataIdsFromSitelinks = require('./queries/get_wikidata_ids_from_sitelinks')
wdk.sparqlQuery = require('./queries/sparql_query')
wdk.getReverseClaims = require('./queries/get_reverse_claims')
wdk.getRevisions = require('./queries/get_revisions')

wdk.parse = require('./helpers/parse_responses')

const claimsSimplifiers = require('./helpers/simplify_claims')
const simplifySparqlResults = require('./helpers/simplify_sparql_results')

wdk.simplify = require('../lib/helpers/simplify_text_attributes')
wdk.simplify.entity = require('../lib/helpers/simplify_entity')
wdk.simplify.claim = claimsSimplifiers.simplifyClaim
wdk.simplify.propertyClaims = claimsSimplifiers.simplifyPropertyClaims
wdk.simplify.claims = claimsSimplifiers.simplifyClaims
wdk.simplify.sitelinks = require('../lib/helpers/simplify_sitelinks')
wdk.simplify.sparqlResults = simplifySparqlResults

// Legacy
wdk.simplifySparqlResults = require('./helpers/simplify_sparql_results')
Object.assign(wdk, claimsSimplifiers)

// Aliases
wdk.getWikidataIdsFromWikipediaTitles = wdk.getWikidataIdsFromSitelinks

const helpers = require('../lib/helpers/helpers')
const sitelinksHelpers = require('../lib/helpers/sitelinks_helpers')
Object.assign(wdk, helpers, sitelinksHelpers)
