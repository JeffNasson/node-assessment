const ctrl = require('./usersCtrl.js')
const data = require('./userData.json')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use( bodyParser.json() )


app.get( '/api/user', ctrl.getUser)
app.get( '/api/user/:id', ctrl.getUserById)
app.get( '/api/admin', ctrl.getAdmin)
app.get( '/api/nonadmin', ctrl.getNonAdmin)
app.get( '/api/type/:type', ctrl.getByType)
app.put( '/api/user/:id', ctrl.updateUser )
app.post( '/api/user', ctrl.addUser )
app.delete( '/api/user/:id', ctrl.deleteUser )




let port = 3000
app.listen(port,()=>{
    console.log(`Listening on port ${3000}`)
})