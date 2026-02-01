const exp =  require('express');
const app = exp()
require('dotenv').config()
const mongoClient = require('mongodb').MongoClient;

const path=require('path')

app.use(exp.static(path.join(__dirname,'../client/build')))

app.use(exp.json())

mongoClient.connect(process.env.DB_URL)
.then(client=>{
    const blogdb = client.db('blogdb')
    const userscollection = blogdb.collection('userscollection')
    const articlescollection=blogdb.collection('articlescollection')
    const authorscollection=blogdb.collection('authorscollection')

    app.set('userscollection',userscollection)
    app.set('articlescollection',articlescollection)
    app.set('authorscollection',authorscollection)
    console.log("DB Connection Success");
})
.catch(err=>console.log("Err in DB connection",err))


const userApp = require('./APIs/user-api')
const authorApp = require('./APIs/author-api')
const adminApp = require('./APIs/admin-api')

app.use('/user-api',userApp)
app.use('/author-api',authorApp)
app.use('/admin-api',adminApp)

//deals with page refresh
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})

const port = process.env.PORT || 5000 ;
app.listen(port,()=>console.log(`Server on port ${port}`))