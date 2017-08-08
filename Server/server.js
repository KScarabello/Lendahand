const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const Auth0Strategy = require('passport-auth0');
const keys = require('./keys');
const userController = require('./controllers/user');

require('dotenv').config();

const PORT = process.env.PORT;
// console.log(process.env.CONNECTION_STRING);

const app = module.exports = express();
app.use(session({
    secret: " uef;akr,ktjf"
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+'/../build'))


passport.use(new Auth0Strategy({
  domain: keys.domain,
  clientID: keys.clientID,
  clientSecret: keys.clientSecret,
  callbackURL: 'http://localhost:3001/auth/callback'

}, function(accessToken, refreshToken, extraParams, profile, done){
    console.log(profile)
    return done(null, profile);
}))

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3001/'
}

) )

passport.serializeUser(function(profileToSession, done) {

  return done(null, profileToSession);///puts second argument on session
});

passport.deserializeUser(function(profileFromSession, done) {
    console.log('jhj')
 return  done(null, profileFromSession);//obj is value from session
});

app.get('/api/user', (req, res) => {
    console.log(req.user)
})


app.post('/api/newevent', (req, res) => {
    const dbInstance = req.app.get('db')
    const { title, blurb, venue, address, city, state, zip, startTime, endTime, date, numOfVols, hoursAnticipated, skills, perks, itemsRequested} = req.body;

    dbInstance.post_new_event([title, blurb, venue, address, city, state, zip, startTime, endTime, date, numOfVols, hoursAnticipated, skills, perks, itemsRequested])
         .then((response) => res.status(200).send(response))
         .catch((err) => res.status(500).send(err));
})

app.get('/api/event/:id'), (req, res) => {
    const dbInstance = req.app.get('db');
    const {params} = req;

    dbInstance.get_individual_event([params.id])
        .then((response) => res.status(200).send(response) )
        .catch((err) => res.status(500).send(err))

}

app.get('/api/events/:category'), (req, res) => { //category or id?
    const dbInstance = req.app.get('db');
    const{params} = req;

    dbInstance.get_events_by_category([params.category]) //category or id?
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(500).send(err))
}
//Create a user? Necessary with auth0?

app.get('/api/user/:id', (req, res) =>{
    const dbInstance = req.app.get('db');
    const {params} = req;

    dbInstance.get_individual_user([params.id])
       .then((response) => res.status(200).send(response))
       .catch((err) => res.status(500).send(err));
} )

app.get('/api/users', (req, res) => {
    console.log( 'here')
    console.log(req.user);
    res.send(req.user);
})

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(3001, () => {console.log(`Server listening on port ${3001}.`);});
});


