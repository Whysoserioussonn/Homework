const Log = require('../models/logs')

// index
const findAllLogs = (req, res) => {
    Log.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', {logs: foundLog})
        }
    })
}

// new
const newLog = (req, res) => {
    // console.log('Hello')
    res.render('New')
}

// delete
const deleteLog = (req, res) => {

    Log.findByIdAndDelete(req.params.id, (err, deleteLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}

// update
const updateLog = (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/logs`)
        }
    })
}

// create
const createLog = (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    // res.send(req.body)
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else [
            res.status(200).redirect('/logs')
        ]
    })
}

// edit
const editLog = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('inside edit route')
            res.status(200).render('Edit', { log: foundLog})
        }
    })
}

// show
const showUniqueLog = (req, res) => {

    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            // console.log('unable to render show')
            res.status(400).json(err)
        } else {
            // console.log('in show route')
            res.status(200).render('Show', { log: foundLog })
        }
    })
}

module.exports = {
    findAllLogs,
    newLog,
    deleteLog,
    updateLog,
    createLog,
    editLog,
    showUniqueLog
}