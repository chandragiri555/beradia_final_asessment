const query=require('../database/connect');

module.exports= class  detailsServices{

    async postMethod(data){
        try{
            let result= await query('insert into project values ($1,$2,$3,$4,$5,&6)',[data.id,data.firstname,data.lastname,data.address, data.city,data.state]);
            console.log(result);
            return result.rowCount;
        } catch (error)
        {
            throw error;
        }
    }
 
     async getAllDetails(){
         try {
             let result= await query('select * from project order by id');
         return result;
        }catch (error){
         throw error;
        }
    }
async getDetailsById(){
    try{
        let result=await query('select * from project where id=$1',[id]);
          return result;
         } catch (error){
    throw error;
        }
     }

async updateDetails(){  
    try{
        if(data.id!==indefined){
            let result;
                if(data.firstname!==undefined)
                 {
                result=await query('update project set firstname=$1 where id=$2', [data.firstname,data.id]);
                 }
            if(data.lastname!==undefined){
            result= await query('update projecct set lastname=$1,where id=$2',[data.lastname,data.id]);
                 }
             if(data.address!==undefined){
                    result= await query('update project set address=$1,where id=$4',[data.address,data.id]);
                         }
            if(data.city!==undefined){
                result= await query('update project set city=$1,where id=$2',[data.city,data.id]);
                 }
            if(data.state!==undefined){
                    result= await query('update project set state=$1,where id=$2',[data.state,data.id]);
                     }
            return result;
         }
        else{
                    throw new error("please provide id to update");
            }
        } catch (error){
            console.log('error is there');
            throw error;
        }
    }
async delete(){
    try{
        if(id!==undefined){
            let result=await query('delete from project where id=$1',[id]);
            console.log(result);
        return result;      
      }else{
          throw new error("error");
            }
        }
        catch (error){

        } 
   }
}
