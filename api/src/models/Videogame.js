const { DataTypes } = require('sequelize');
// Exportamos aqui una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    id: {
      //creo la ID que sea de tipo UUID para generar un numero randown con letras y numeros
      // para que no se pisen o sobreescriba 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false,

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
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
  },
  local: {
      type: DataTypes.BOOLEAN,
      allowNull: true
  }
  });

};
