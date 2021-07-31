const { DataTypes } = require('sequelize');
// Exportamos aqui una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    id: {
      //creo la ID que sea de tipo UUID para generar un numero randown y no se pisen 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: true

    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
