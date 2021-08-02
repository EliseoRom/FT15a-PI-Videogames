const { DataTypes } = require('sequelize');
// Exportamos aqui una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    id: {
      //creo la ID que sea de tipo UUID para generar un numero randown con letras y numeros
      // para que no se pisen o sobreescriba 
      //allowNull (es para que si o si tenga el id que le indico) 
      // si lo seteo en false sig que NO permito que este vacio -- si lo seteo en null (si te permito que este vacio)
      
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dateToRelase: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rating: {
        type: DataTypes.STRING,
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
