const express = require('express');
const router  = express.Router();

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
router.get('/getHostPage', (req, res) => {
  res.send({ express: 'testing Host a Tournament' });
});

router.post('/postHostPage', (req, res) => {
  console.log(req.body);
  const tournamentname= req.body.tournamentname;
  const date= req.body.date;
  const level= req.body.level;
  const style= req.body.style;
  const location= req.body.location;
  const tournamentflier= req.body.tournamentflier;
  const tournamentlogos= req.body.tournamentlogos;
  const numberofgyms= req.body.numberofgyms;
  const numberofmats= req.body.numberofmats;
  res.send(
    `I received your POST request. This is what you sent me: `,
  );
});

module.exports = router;
