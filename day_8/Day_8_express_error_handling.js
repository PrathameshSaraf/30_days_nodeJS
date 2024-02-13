const express=require('express');

const app=express();
const port=3000;


/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res,next) {
   const number  = parseInt(req.query.number,10);
   if(number > 0) {
     res.send(`Number is positive: ${number}`);
   }else{
    const error=new Error("The Provided number is not positive");
    error.status=400;
    next(error);
   }
  }


  app.get('/positiveInteger', positiveIntegerHandler);

  app.use((err,req,res,next)=>{
    if(err.status===400){
        res.status(400).send(err.message);
    }else{
        next(err);
    }
}); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 