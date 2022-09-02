const List=require('../model/list')

const getAll=async(req,res)=>{
  try {
    const list=await List.findAll()

    res.status(200).json({
      
      data:list,
    })
  } catch (error) {
    console.log(error.message)
  }
}

const getOne=async(req,res)=>{
  try {
    const list=await List.findByPk(req.params.id)
     res.status(200).json({
       status: "success",
       data: list,
     });
  } catch (error) {
    console.log(error.message)
  }
}

const addlist=async(req,res)=>{
  try {
    console.log(req.body)
    const list=await List.create(req.body)
     res.status(200).json({
       status: "success",
       data: list,
     });
  } catch (error) {
    console.log(error.message)
  }
}

const update=async(req,res)=>{
  try {
    const list=await List.update(req.body,{where:{list_id:req.params.id},returning:true})
    res.status(200).json({
      status: "success",
      data: list,
    });
  } catch (error) {
    console.log(error.message)
  }
}

const deleteList = async (req, res) => {
  try {
    const list= await List.destroy({
      where: { list_id: req.params.id },
      returning: true,
    });

    res.status(200).json({
      status: "Narmanli ochdi !",
      data: list,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports={getAll,getOne,deleteList,update,addlist}