const express = require('express');
const app = express();
const queries = require("./mysql/queries");

app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', function(request, response) {
  response.render('index', { title: 'Airbnb Search App' });
});

app.get('/airbnb', (request, response) => {
  response.render('airbnb', { title:'AirBnb' });
});

app.get('/airbnb/find-one', (request, response) => {
  queries.findListing(
    {
      number_rooms: 3,
      amenities: ['017ec502-e84a-4a0f-92d6-d97e27bb6bdf', '12e9ccb4-03e4-4f82-ac3d-4fc7e3ebfbfe']
    }).then(result => {
      response.render("listing", { listing: result[0] });
    });
});

app.get ("/airbnb/find-many", async (request, response) => {
  response.send("Not implemented!");
});