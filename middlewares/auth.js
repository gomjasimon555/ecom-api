const checkAPIKey = (req, res, next) => {

// const{api_key}=req.query;

//if(api_key)
    
  if (req.query.api_key) {
    if (req.query.api_key === "ABC123") {
      next();
    } else {
        res.status(401).json("Invalid API Key")
    }
  } else {
    res.status(401).json("Missing API Key")

  }
};
module.exports = checkAPIKey;
