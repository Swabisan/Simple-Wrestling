const express = require('express');
const router = express.Router();
const db = require('../db')
// Tournament Name
// Date
// Level
// Style
// Location
// Tournament Flier
// Tournament Logos
// Number of Gyms
// Number of Mats
/*
router.get('/getHostPage', function (req, res) {
  let body ={
    TournamentName:'joe',
    Location:'SFSU wrestling club',
    WrestlingStyle:'San Francisco State University',
    DateStart:'04/04/19',
    DateEnd: '04/05/19',
    TournamentFlier: '',
    NumberOfWrestlers: 10,
    Notes:'this is a note'
  }
  res.json(body);
})

router.post('/postHostPage', function (req,res){
  let body ={
    TournamentName:'joe ',
    DateStart:'04/04/19',
    Level:' ',
    WrestlingStyle:'San Francisco State University',
    Location:'SFSU wrestling club',
    TournamentFlier: '',
    TournamentLogos: '',
    NumberOfGyms:10,
    NumberOfMats:10
  }
  res.json(body);
})
*/

/*
tournamentname: '',
date: '',
level: '',
style: '',
location: '',
tournamentflier: '',
tournamentlogos: '',
numberofgyms: '',
numberofmats: '',
*/

/*
CREATE TABLE "tournaments"
(
  "id" SERIAL UNIQUE,
  "tournament_name" varchar,
  "location" varchar,
  "admin_id" int
);
*/






router.get('/getHostPage', (req, res) => {
  res.send({ express: 'testing Host a Tournament' });

});

router.post('/postHostPage', (req, res) => {
  console.log(req.body);
  const admin_id = req.body.admin_id;
  const tournament_name = req.body.tournament_name;
  const date = req.body.date;
  const level = req.body.level;
  const style = req.body.style;
  const location = req.body.location;
  const tournamentflier = req.body.tournamentflier;
  const tournamentlogos = req.body.tournamentlogos;
  const numberofgyms = req.body.numberofgyms;
  const numberofmats = req.body.numberofmats;

  const values = { tournament_name: tournament_name, location: location, admin_id: admin_id };
  db.createHostTournaments(values)
    .then(query => {
      console.log('sending response: ', '\n')
    })
    .catch(err => {
      console.log(err.stack, '\n')
    });
  
  res.send('Database saved');
});


module.exports = router;
