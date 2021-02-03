# iHRIS 5.0 for mhero DRC
This instance is used for mHero DRC with the minimum customization to allow mHero operation.

## Installation
To install iHRIS 5, please refer the the official page at: [https://github.com/iHRIS/iHRIS].
Migration of data from iHRIS 4.3 to 5.0 can be done by following the instruction on : [https://github.com/iHRIS/migration].
The you can use the pullScratchpad script to copy FHIR resources from iHRIS 4 to HAPI FHIR by editing these lines in the file index.js:

```
remote: {
    fhir: {
      baseURL: 'http://localhost/ihris-rdc/index.php/FHIR/',
      username: 'admin',
      password: 'pwd',
    }
}
...
local: {
    fhir: {
      baseURL: 'http://localhost:8082/hapi/fhir',
      username: '',
      password: '',
    },
  }
  ...
  let resources = [
  'Practitioner' #add here the resource you want to transfer
];
```
After editing these configurations, run ```node index.js``` to start the transfert of resources from iHRIS 4.3 to 5.0.
