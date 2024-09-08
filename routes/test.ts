import express, { Request, Response } from 'express'
import passport from 'passport'


const router = express.Router()


router.get("/test", (req: Request, res: Response) => {
    res.status(200).send({ message: "Api is ready!" })
})

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3001/google_fail' }), (req: Request, res: Response) => {
    //@ts-ignore
    console.log(req.user)
})

module.exports = router