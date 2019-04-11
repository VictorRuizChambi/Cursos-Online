
var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

var facebookConnection = function(server){
    passport.use(new FacebookStrategy({
        clientID : '597640520706112',
        clientSecret : 'f59e963c26e8377a47908749b4136a71',
        callbackURL : 'http://localhost:8000/auth/facebook/callback'  
    },function(accessToken, refreshToken, profile, done){
        done(null, profile);
    }));

    server.get('/auth/facebook', passport.authenticate('facebook'));

    server.get('/auth/facebook/callback', passport.authenticate('facebook',{successRedirect : '/',
                                                                            failureRedirect : '/error'}));
};

module.exports = facebookConnection;