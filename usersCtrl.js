const data = require('./userData.json')
// console.log(data)

module.exports={
    getUser: async (req,res,next)=>{
        let result = []
        if(req.query.age){
            for(let i=0;i<data.length;i++){ //loops over the age data we receive
                if(data[i].age<req.query.age){ //if data at the specific index is less than req.query.age then push the result to the result array 
                    console.log(data[i])
                    result.push(data[i])
                }
            }
        }
        else if(req.query.lastname){
            for(let i=0; i<data.length;i++){
                if(data[i].last_name===req.query.lastname){
                    result.push(data[i])
                }
            }
        }
        else if(req.query.email){
            for(let i=0;i<data.length;i++){ //loops over the data we receive from req.query.email
                console.log(data[i])
                if(req.query.email===data[i].email){ //if req.query.email is equal to data at index[i] while grabbing .email from the object then push the result to the result array
                    result.push(data[i])
                }
            }
        }
        else if(req.query.favorites){
            for(let i=0;i<data.length;i++){ //loop over the data we receive from req.query.favorites
                for(let x=0;x<data[i].favorites.length;x++){ //now we loop through the data at index[i] because favorites is placed inside of an array  
                    if(req.query.favorites===data[i].favorites[x]){ //if req.query.favorites is === to data at index[i] which also contains favorite at index[x]
                        result.push(data[i]) 
                    }
                }
            }
        } 
        else{
            result=data
        }
        res.status(200).send(result)
    },
    getUserById: async (req,res,next)=>{
        let result = ''

        for( let i = 0; i < data.length; i++ ) {
            if( data[i].id == req.params.id ) {
                result = {}
                result = data[i]
                res.status(200).send( result )
            }
        }
        if( !result )
            res.status(404).json(null)
    },
    getAdmin: async (req,res,next)=>{
        let result=[]
            for(i=0;i<data.length;i++){
                if(data[i].type==='admin'){
                    result.push(data[i])
                }
            }
        res.status(200).send(result)
    },
    getNonAdmin: async (req,res,next)=>{
        let result=[]
        for(i=0;i<data.length;i++){
            if(data[i].type!=='admin'){
                result.push(data[i])
            }
        }
        res.status(200).send(result)
    },
    getByType: async (req,res,next)=>{
        let result=[]
        for(let i=0;i<data.length;i++){
            if(data[i].type === req.params.type){
                result.push(data[i])
            }
        }
        res.status(200).send(result)
    },
    updateUser: async (req,res,next)=>{
        let result = {} //req.body is an object
        for(let i=0;i<data.length;i++){ //loop through the entirety of data
            if(data[i].id == req.params.id){ //if data.id at index[i] is equal to the param string then set data[i] to req.body object
                console.log(result,data,req.body)
                data[i]=req.body
        }
    }
        res.status(200).send(data)

    },
    addUser: async (req,res,next)=>{
        let lastId = data[data.length-1] //gives us the last index in the array
        let newId = lastId.id+1 //adds the newId to the end of the array
        req.body.id=newId; //setting the req.body.id object to equal newId
        data.push(req.body) //pushes req.body onto the data object
        newId+=1 //increments newId by one

        res.status(200).send(data)
    },
    deleteUser: async (req,res,next)=>{
        for(let i=0;i<data.length;i++){
            if(data[i].id==req.params.id){ //if the id of the specified object is equal to the id on params
                data.splice(i,1) //remove the item at index i, removes one spot from the array
            }
        }
        res.status(200).send(data)
    },

}