const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('works!'));


app.get('/v1/cryptocurrency/listings/latest', (req, res) => {
  const useSandbox = true;

  let baseUrl = 'https://pro-api.coinmarketcap.com';
  let headers = {'X-CMC_PRO_API_KEY': '97b98a4a-8852-4a95-a00b-381ac2a6faaf'};
  
  if(useSandbox) {
    baseUrl = 'https://sandbox-api.coinmarketcap.com';
    headers = {'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'};
  }
  
  const options = {
    url: baseUrl+req.url,
    method: 'GET',
    headers
  };

  axios(options)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.status(error.status).send(error.message)
  })
});

app.get('/test', (req, res) => {
    res.send('test');
});
app.listen(process.env.PORT || 3000);
