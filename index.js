const express = require('express');
const app = express();
const registerController = require( './controllers/register.js' );
const loginController = require('./controllers/login.js');
const userController = require('./controllers/user.js');
app.use(express.json());


app.get('/test', (req,res) => {
    res.json ({
        primeraprueba: 'EL SERVIDOR ESTÁ FUNCIONANDO'
    });
    console.log('Han llamado a /test')
});

app.post( '/register', registerController );
app.post( '/login', loginController);
app.get('/user/:id' , userController)


app.listen (3000, () => {
    console.log("Servidor escuchando");
})