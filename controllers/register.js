const fs = require( 'fs' );
const id = require( 'uniqid' );
const validator = require( 'validator' );

module.exports = ( req, res ) => {
    const dataString = fs.readFileSync( './db.json', 'UTF-8');
    const data = JSON.parse( dataString);
    const { username, email, password } = req.body;

    // Filters
    const isValidBody = username != undefined && password != undefined && email != undefined;
    const isvalidPassword = password.length > 5;
    const isValidEmail = validator.isEmail (email);
    const usernameExists = data.users.find( user => user.username === username);
    const emailExists = data.users.find( user => user.email === email);

    if (!isValidBody) {
        res.status( 400 ).json( { message: 'necesitamos un body con las propiedades username, email y password' } )
        return; 
    } else if (!isvalidPassword) {
        res.status( 400 ).json( { message: 'El password debe contener al menos 5 caracteres' } )
        return;
    } else if (!isValidEmail) {
        res.status( 400 ).json( { message: 'El email no es un email. Escríbalo correctamente' } )
        return;
    } else if(usernameExists) {
        res.status( 400 ).json( { message: 'Ya existe un usuario con ese nombre. Puede logearse' } )
        return;
    } else if(emailExists) {
        res.status( 400 ).json( { message: 'Ya existe un usuario con ese email. Puede logearse' } )
        return;
    } else {
        const newUser = {
            id: id(),
            username,
            email,
            password
        }
    
        data.users.push( newUser);
        const outputString = JSON.stringify ( data );
        fs.writeFileSync ( './db.json', outputString )
        res.status ( 201 ).json ( {data: 'created!'});
    }
}
