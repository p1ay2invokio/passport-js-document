import passport from "passport";
import GoogleStragegy from 'passport-google-oauth20'



passport.use(new GoogleStragegy.Strategy({
    clientID: 'test',
    clientSecret: 'test_secret',
    callbackURL: 'http://localhost:3001/api/google/callback'
}, (accessToken, refreshToken, profile, cb) => {
    cb(null, profile)
}))


passport.serializeUser((user, done) => {
    done(null, user)
})


passport.deserializeUser((user, done) => {
    //@ts-ignore
    done(null, user)
})