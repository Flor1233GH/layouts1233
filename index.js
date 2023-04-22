const express = require('express')
const app = express()

const expressLayots = require('express-ejs-layouts')

const PORT = process.env.PORT || 3000; 


app.set('view engine','ejs')
app.use(express.static('public'))

app.use(expressLayots)

app.get('/',(req,res)=>{
    res.render('inicio')
})

app.get('/contacto',(req,res)=>{
    res.render('contacto')
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});