// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '257660851303926', // your App ID
        'clientSecret'    : '74c21ed7bdcbbb95293b1ad1b0fe30bb', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'enableProof': true,
         'profileFields': ['emails']
    }



};
