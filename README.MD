# notams

Get latest NOTAMs (Notices to Airmen) from notams.aim.faa.gov

## Installation

```
yarn add @airport-discovery/notams
```

## Usage

The module exposes a single function, which accepts an ICAO string or an array string of ICAOs

```javascript
const notams = require('@airport-discovery/notams');
const notamsResponse = await notams('LIMC'); // ICAO for Malpensa Airport (MXP)
```

Or multiple ICAO codes

```javascript
const notams = require('@airport-discovery/notams');
const notamsResponse = await notams(['LIMC', 'LTFM']);
```

## Output

The response is mainly made of the following:

- notamList: `array`
- totalNotamCount: `number`
- countsByType: `array`

### `notamList`

each `notam` has the following structure:

```json
{
  "facilityDesignator": "LIMC",
  "notamNumber": "M4645/20",
  "featureName": "Military",
  "issueDate": "09/21/2020 1104",
  "startDate": "09/21/2020 1104",
  "endDate": "PERM",
  "source": "USNS",
  "sourceType": "M",
  "icaoMessage": "M4645/20 NOTAMN\nQ) LIMM/QPIXX/I/NBO/A/000/999/4537N00843E005\nA) LIMC B) 2009211104 C) PERM\nE) REF FLIP CENTRAL AND NORTHERN ITALY\nAD LIMC 1-4 &apos;ILS OR LOC-Z RWY17L&apos;\nBOX OCA/OCH MINIMUM\nROW STRAIGHT IN APPROACH &apos;ILS CAT I&apos; CHG AS FLW:\nCAT A/B/C/D: 945 - 200 (200 - 0.8) ALS INOP (200- 1.2)\nROW STRAIGHT IN APPROACH &apos;LOC + DME&apos; CHG AS FLW:\nCAT A/B/C/D: 1300 - 555 (600 -1.8) ALS INOP (600 -2.5)\nROW CIRCLING CHG AS FLW:\nCAT A/B: 1450-682 (700 - 3.2)\nCAT C: 1650 - 882 (900- 4.0)\nCAT D: 1710 - 942 (1000 - 4.3",
  "traditionalMessage": " ",
  "plainLanguageMessage": " ",
  "traditionalMessageFrom4thWord": "REF FLIP CENTRAL AND NORTHERN ITALY\nAD LIMC 1-4 'ILS OR LOC-Z RWY17L'\nBOX OCA/OCH MINIMUM\nROW STRAIGHT IN APPROACH 'ILS CAT I' CHG AS FLW:\nCAT A/B/C/D: 945 - 200 (200 - 0.8) ALS IN...",
  "icaoId": "LIMC",
  "accountId": "2214",
  "airportName": "MALPENSA",
  "procedure": false,
  "userID": 0,
  "transactionID": 57971869,
  "cancelledOrExpired": false,
  "digitalTppLink": false,
  "status": "Active",
  "contractionsExpandedForPlainLanguage": false,
  "keyword": "MILITARY",
  "snowtam": false,
  "geometry": "POINT(5141757.64052187 5157117.03465919)",
  "digitallyTransformed": false,
  "messageDisplayed": "concise",
  "hasHistory": false,
  "moreThan300Chars": false,
  "showingFullText": false,
  "locID": 352406,
  "defaultIcao": false,
  "crossoverTransactionID": 0,
  "crossoverAccountID": "",
  "mapPointer": "POINT(8.72811100000002 45.630606)",
  "requestID": 0
}
```

### `countsByType`

```json
[
  {
    "name": "CONSTRUCTION",
    "value": 0
  },
  {
    "name": "RNAV",
    "value": 0
  },
  {
    "name": "GPS",
    "value": 0
  },
  {
    "name": "Ending this month",
    "value": 9
  },
  {
    "name": "LTA",
    "value": 0
  },
  {
    "name": "TFR",
    "value": 0
  },
  {
    "name": "CARF",
    "value": 0
  }
]
```

## License

MIT ©
