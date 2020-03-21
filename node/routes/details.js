const express=require('express');
const router=express.Router();
const detailsService= require('../services/details');
router.post('/insert',async(req,res)=>{
    try{
        let id=req.body.id;
        let firstname=req.body.firstname;
        let lastname=req.body.lastname;
        let email=req.body.email;
        let city=req.body.city;
        let state=req.body.state;
        data={
            id:id,
            firstname:firstname,
            lastname:lastname,
            email:email,
            city:city,
            state:state
        }
        console.log(data);
        let callServices=new detailsService();
        let result= await callServices.postMethod(data);
        if(result===1){
            res.send({
                message: "record inserted"
            })

        }
    }catch (error){
        console.log(error);
        res.send({
            message: error.message
        })

    }

    
})

router.get('/getdetails',async(req,res)=>{
    try{
        let callServices=new detailsService();
        let result=await callServices.getAllDetails();
        res.send(result);
       }
    catch (error){
        console.log({
            message: error.message
        })
    }
})

router.put('/putdetails',async(req,res)=>{
    try{
        let id=req.body.id;
        let firstname=req.body.firstname;
        let lastname=req.body.lastname;
        let email=req.body.email;
        let city=req.body.city;
        let state=req.body.state;
        data={
            id:id,
            firstname:firstname,
            lastname:lastname,
            email:email,
            city:city,
            state:state
        }
        let callServices=new detailsService();
        let result=await callServices.updateDetails(data);
        if(result){
            res.send({
                message: 'updated successfully'
            })
        }
        else{
            res.send({
            message: 'not updated successfully'
              })
         }
        }catch(error)
        {
         console.log(error);
         res.send({
             message: error.message
         })
        } 
        
    
})
module.exports=router;