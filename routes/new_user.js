const { response } = require('express');
const express=require('express');
const router = express.Router();
const {findUser, saveUsers,validateUsers,updateUsers,deleteUsers,searchUsers} = require('../service/v1/user');
const CONSTANT = require('../util/message_code.json');


router.post('/updateUsers/:id', async (req, res) => {
    try {
      const id = req.params.id;
    const body = req.body;
    const updUsr = await updateUsers(id, body);
    res.status(200).json({
      message : CONSTANT.users.update[200],
      result : updUsr,
    });
    } catch {
      res.status(500).json({
      message : CONSTANT.users.update[500],
      result : null,
      });
    } 

});


router.get('/deleteUser/:id', async(req, res) => {
  
  try {
    const id = req.params.id;
    const delusr = await deleteUsers(id);
    res.status(200).json({
      message : CONSTANT.users.delete[200],
      result : delusr,
    });
  } catch {
    res.status(500).json({
      message : CONSTANT.users.delete[500],
      result : null,
    });
  }   
});



router.post('/post-info', async(req,res)=>{
   
  try {
    
    const savusr = await saveUsers(req.body);
    res.status(200).json({
    message: CONSTANT.users.save[200],
    result: savusr,
    });
  } catch(error){
    console.error('Error', error);
    res.status(500).json({
      message : CONSTANT.users.save[500],
      result : null,
    });
  }
    
});

router.get('/', async (req, res) => {

    try{
      const findusr = await findUser();
    res.status(200).json({
      message: CONSTANT.users.find[200],
      result: findusr,
    });
    } catch (error) {
      res.status(500).json({
        message: CONSTANT.users.find[500],
        result: null,
      });
    }

  });


 router.get('/searchUser/:id', async (req, res) => {
    try{
      const id = req.params.id;
      const srchUsr = await searchUsers(id);
        res.status(200).json({
        message: CONSTANT.users.search[200],
        result : srchUsr,
      });
    } catch(error) {
      res.status(500).json({
        message: CONSTANT.users.search[500],
        result : null,
      });
    }

 });


 router.get('/check',(req,res)=>{
  for(const key in req.query){
      console.log(key," : ",req.query[key])
  }
      const id = req.query.id;
      const password=req.query.password;
      validateUsers(id,password) .then((data)=>{
          if(data.length!=0)
          {   
              res.status(200).json({
                message : CONSTANT.users.check[200],
              });
              return;
          }
          else
          {
            res.status(204).json({
            message : CONSTANT.users.check[204],
            });
            return;
          }
      }).catch((err)=>{
        res.status(500).json({
        message: CONSTANT.users.check[500],
        result : null,
        });

      });
});

//  router.get('/check', async (req,res)=>{
  
//   try {
//       for(const key in req.query){
//       console.log(key," : ",req.query[key])
//        }
//       const id = req.query.id;
//       const password=req.query.password;
//       const valUsr = await validateUsers(id,password);
//       if(data.length!=0)
//       {
//           res.status(200).json({
//             message : CONSTANT.users.check[200],
//             result : valUsr,
//           });
//       }
//       else
//       {
//           res.status(204).json({
//             message : CONSTANT.users.check[204],
//           });
//       }
      
//      } catch(error) {
//           res.status(500).json({
//           message: CONSTANT.users.check[500],
//           result : null,
//           });
//       }

//  });
 


module.exports=router;