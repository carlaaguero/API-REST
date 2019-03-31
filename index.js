const express = require('express');
const app = express();


app.get('/test', (req,res) => {
    res.json ({
        primeraprueba: 'EL SERVIDOR ESTÁ FUNCIONANDO'
    });
    console.log('Han llamado a /test')
});



app.listen (3000, () => {
    console.log("Servidor escuchando");
})