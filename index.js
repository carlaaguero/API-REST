const express = require('express');
const app = express();


app.get('/longin', (req,res) => {
    res.json ({primeraprueba:'EL SERVIDOR ESTÁ FUNCIONANDO'})
});

app.get('')



app.listen (3000, ()=>{
    console.log("Servidor escuchando");
})