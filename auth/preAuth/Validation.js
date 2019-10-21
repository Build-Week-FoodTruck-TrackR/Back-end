const axios = require("axios");

module.exports = (req, res, next) => {
  const { method, baseUrl, query, params, Url } = req;
  const request = {
    method,
    baseUrl,
    query,
    params,
    Url: req["_parsedUrl"].pathname
  };

  const validated ={
    errors:[],
    valid:false,

  }

  if (!query.test && request.Url) {
   // console.log(request.Url)
    return axios
      .get(`http://localhost:8000${request.Url}?test=true`)
      .then(shapeObj=> {
        validateShape(shapeObj.data)
      })
      .catch(err => console.log("error",err ))
  }
  
  function validateShape(shape){
    //console.log("Shape",shape)
    
    const shapeFinder = request.Url.split('/')
    const findShape = shapeFinder[shapeFinder.length -1]
    
    if(shape && shape[findShape]){
       console.log(shape[findShape])
       req.isValid = true
       return next()//res.status(200).json(shape[findShape])
    } else {
      
      return shape && res.status(404).json({message:`${request.Url} is not a valid route...`, mayber_try:{...shape}})
    }
  }

  next() 
  
  
  req.response = request;

};
