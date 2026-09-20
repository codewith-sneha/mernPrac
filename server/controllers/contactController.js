
const addContact =async(req,res)=>{
    try {
        const {name , email , number} = req.body;
        if(name=='' ||name==null || name==undefined ||email=='' ||email==null ||email==undefined || number=='' || number==null || number==undefined){
            res.send({sucess: false , message :"Empty Data"});
            return;
        }
        //check if email already exist in db 
        const contactData = {
            name , email , number
        }
        console.log("contact data : ", contactData);
        //save data to db
        res.send({sucess: true , message :" data added sucessfully"});
    } catch (error) {
        console.log("addcontact : ",error);
        }
}

export {addContact};