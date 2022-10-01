// load express
const express = require('express')

// Router object for our routes
const router = express.Router()

// bringing in the callback functions to be used inside routes
const { 
    findAllLogs, 
    newLog,
    deleteLog,
    updateLog,
    showUniqueLog,
    editLog,
    createLog, } = require('../controllers/logController')

// index route
router.get('/', findAllLogs)

// new route
router.get('/new', newLog)

// delete route
router.delete('/:id', deleteLog)

// update route
router.put('/:id', updateLog)

// create route
router.post('/', createLog)

// edit route
router.get('/:id/edit', editLog)

// shoow route
router.get('/:id', showUniqueLog)


module.exports = router