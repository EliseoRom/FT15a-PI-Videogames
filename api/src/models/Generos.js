const { DataTypes } = require('sequelize');
// Exportamos aqui una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  
  sequelize.define('generos', {
    // nombre de los tipos de generenos de games 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    } 
  
  });
  
};
