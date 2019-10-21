const db = require(dbConfig)
module.exports={
    findAll,
    findById,
    findByUserName,
    addUser
}
const table='users'
function findAll(){
    return db(table)
}
function findById(id){
    id = Array.isArray(id) ? [id] : id
    return db(table)
    .select('id','username','email')
    .where({id})
    .first()
}
function findByUserName(user){
    if(user.username){
    const username = user.username
    return db(table)
    .where({username})
    .first()
    
    }
}


function addUser(obj){
    return db(table)
    .insert(obj)
    .then(([id]) =>findById(id))
    
    // .then(id=>{
    //     findById(id)
    // })
}
