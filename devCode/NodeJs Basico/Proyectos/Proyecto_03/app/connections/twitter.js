
var passport = require('passport'),
TwitterStrategy = require('passport-twitter').Strategy;

var twitterConnection = function(server){
passport.use(new TwitterStrategy({
    consumerKey : 'shVbawKw1RWuCb7eVAakcbPkN',
    consumerSecret : 'f5nf5VlHxvdiCYYIUyHsFrPmIQEDEXBj1Hv8Nk3biXa39Cbcq3',
    callbackURL : 'http://localhost:8000/auth/twitter/callback'  
},function(accessToken, refreshToken, profile, done){
    done(null, profile);
}));

server.get('/auth/twitter', passport.authenticate('twitter'));

server.get('/auth/twitter/callback', passport.authenticate('twitter',{successRedirect : '/',
                                                                        failureRedirect : '/error'}));
};

module.exports = twitterConnection;