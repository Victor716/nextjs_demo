const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handler = app.getRequestHandler()
app.prepare().then(() => {
    const server = express()
    server.get('/hello', (req, res) => {
        res.send("Hello next.js")
    })
    server.get('*', (req, res) => {
        handler(req, res)
    })
    const port = 3000
    server.listen(port, () => console.log(`server starts at localhost:${port}`))
})