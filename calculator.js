const express = require('express')
const ExpressError = require('./error')
const {validateQueryString, validateNums} = require('./validators')
const {getMean, getMedian, getMode} = require('./math')

const app = express()

/* Routes */
app.get('/mean', function(req, res) {
    validateQueryString(req)
    let nums = validateNums(req)
    // Get mean
    let mean = getMean(nums)
    // Return response
    return res.json({
        operation: "mean",
        val: mean
        })
    })

app.get('/median', function(req,res) {
    validateQueryString(req)
    let nums = validateNums(req)
    let median = getMedian(nums)
    return res.json({
        operation: "median",
        val: median
    })
})

app.get('/mode', function(req,res) {
    validateQueryString(req)
    let nums = validateNums(req)
    let mode = getMode(nums)
    console.log(mode)
    return res.json({
        operation: "mode",
        val: mode
    })
})

/* Error Handlers */
app.use((req,res,next) => {
    const e = new ExpressError("Page not found", 404)
    next(e)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    
    return res.json({
        error: err,
        message: err.message
    })
})

app.listen(3000, function() {
    console.log('App on port 3000')
})