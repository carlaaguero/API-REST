const fs = require( 'fs' );
const id = require( 'uniqid' );



module.exports = ( req, res ) => {

    const dataString = fs.readFileSync( './db.json', 'UTF-8');
    const data = JSON.parse( dataString);
    const { username, email, password } = req.body;
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