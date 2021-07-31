const { DataTypes } = require('sequelize');
// Exportamos aqui una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('plataformas', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    }
  });
  
};
