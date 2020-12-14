const axios = require('axios');

const SEARCH_URL = 'https://notams.aim.faa.gov/notamSearch/search';

const getNotams = async icaos => {
  if (Array.isArray(icaos)) {
    icaos = icaos.join(',');
  }

  const data = `searchType=0&designatorsForLocation=${icaos}`;
  const response = await axios.post(SEARCH_URL, data);

  if (response && response.data) {
    return response.data;
  }

  return undefined;
};

module.exports = getNotams;
