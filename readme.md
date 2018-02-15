# WD2GB (Wikidata to Geo-Browser)


Query Wikidata with SPARQL - Reuse your data within the DARIAH-Storage and explore spatio-temporal relations with the Geo-Browser.

Related topics:
* Query-builder
* Spatio-temporal visualization
* Wikidata SDK

### Results of the doathon: https://github.com/goe-wikidata/doathon-20180214
### Doathon-Issue:https://github.com/goe-wikidata/doathon-20180214/issues/2
### Idea:
There are already different applications available that allow to visualize spatio-temporal data from Wikidata e.g. ViziData (https://github.com/arsylum/ViziData), 

https://tools.wmflabs.org/wikishootme/#lat=51.539937099999996&lng=9.936693199999999&zoom=15, 

https://tools.wmflabs.org/wikidata-todo/tempo_spatial_display.html,

https://tools.wmflabs.org/wikidata-todo/missing_images.html

The SUB has with the DARIAH-DE Geo-Browser (https://geobrowser.de.dariah.eu/, https://github.com/DARIAH-DE/PLATIN) an explorative tool for spatio-temporal data.
The Idea is to make spatio-temporal data from Wikidata available with the Geo-Browser.
This means creating  a tool that allows to predefine Wikidata queries and that converts the result sets into Geo-Browser specific data format (https://www.dropbox.com/s/httk62myn2tsi4p/M3.3.2_eConnect_KML_Specification_v1.0_UGOE.pdf) and visualize them afterwards.

One option is to start with an application that offers a graphical query-builder. The Wikidata-SDK (https://github.com/maxlath/wikidata-sdk) could be reused to generate the result sets. A conversion functionality has to be created to bring the query results into a Geo-Browser conform data format. The final data can be visualized with the Geo-Browser.



### Further possibilities:
Adding a “Add Wikidata identifier”-Button to the Datasheet Editor (https://geobrowser.de.dariah.eu/edit/index.html)
Could be realized as a mapping between Geonames and Wikidata
(see https://opendata.stackexchange.com/questions/3728/mapping-between-wikidata-and-geonames/3731)
