//creo la ID que sea de tipo UUID para generar un numero randown con letras y numeros
// para que no se pisen o sobreescriba 
//allowNull (es para que si o si tenga el id que le indico) 
// si lo seteo en false sig que NO permito que este vacio -- si lo seteo en null (si te permito que este vacio)
const { DataTypes } = require('sequelize');
//const { values } = require('sequelize/types/lib/operators');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // agregar esta columna para el filtro origin
    db: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      // defaultValue: true
  },
  background_image: {
    type: DataTypes.STRING,

  }
  });
};
