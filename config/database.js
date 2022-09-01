const Sequelize=require('sequelize')

const sequelize=new Sequelize("todolist","postgres","jam$0705",{
  dialect:'postgres'
})

   
sequelize
  .authenticate()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;