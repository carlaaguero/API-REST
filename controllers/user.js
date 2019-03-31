const fs = require( 'fs' );

module.exports = ( req, res ) => {
    const userId = req.params.id;
    const {email, password} = req.headers;


    const dataString = fs.readFileSync( './db.json', 'UTF-8' );
    const data = JSON.parse( dataString );

    if (!data.users.some(user => user.email === email && user.password === password)) {
        res.status(401).json({message:'No autorizado'  })
        return;
    }
    const userFound = data.users.find( user => user.id === userId );

    if ( userFound ) {
        res.status( 200 ).json( {
            ...userFound,
            password: undefined
        } )
    } else {
        res.status( 404 ).json( { message: 'Usuario no encontrado' } )
    }
}