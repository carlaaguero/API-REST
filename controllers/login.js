const fs = require( 'fs' );

module.exports = ( req, res ) => {
    const dataString = fs.readFileSync( './db.json', 'UTF-8' );
    const data = JSON.parse( dataString );
    const {  email, password } = req.body;
    
    const isValidBody = email && password ;

    if(!isValidBody) {
        res.status(400).json({message:'Necesito un email y un password'});
        
    } else {
        const userFound =  data.users.find( user => user.password === password && user.email === email  )
        if (!userFound ) {
            res.status(401).json({message: 'email o contraseña invalido'})

        } else {
            res.status(200).json({message: 'Bienvenido ' + userFound.username})
        }
    }
}
