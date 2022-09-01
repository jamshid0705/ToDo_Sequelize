const Sequelize=require('sequelize')
const sequelize=require('../config/database')

const listschema=sequelize.define("list",{
  list_id:{
    type:Sequelize.DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  description:{
    type:Sequelize.DataTypes.STRING,
    allowNull:false
  },
  done:{
    type:Sequelize.DataTypes.BOOLEAN,
    defaultValue:false
  }
},{
  // timestamps:false,
  // freezeTableName:true
})

// listschema.drop()
listschema.sync()

module.exports=listschema