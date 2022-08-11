const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/list', async(req,res)=>{
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    //console.log(data);
    res.send(data.results)
})
app.get('/detail/:id', async(req,res)=>{
    const pokeId = req.params.id;
    const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );
    console.log(data);
    res.send(data)
})

const PORT=8000
app.listen(PORT,()=>{
    console.log(`Running on http://localhost:${PORT}`)
})