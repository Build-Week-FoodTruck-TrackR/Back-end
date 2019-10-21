const primaryRouter = require('express').Router()

//SubRoutes of API
const locationsRouter = require('./public/locations/locations')
const users = require('./private/users')
const authPortal = require('../auth/portal')


//PUBLIC ROUTES
primaryRouter.use('/locations',locationsRouter)

//PRIVATE ROUTES
primaryRouter.use('/users',users)

//LOGIN REGISTER

primaryRouter.use('/', authPortal)

//Handle any errors coming into API

module.exports = primaryRouter

