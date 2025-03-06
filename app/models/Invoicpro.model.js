module.exports = (sequelize, dataType) => {
    const Invoicpro = sequelize.define("Invoicpros", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name_lastname: {
            type: dataType.STRING,
            allowNull: false
        },
        due_date: {
            type: dataType.STRING,
            allowNull: false
        },
        total: {
            type: dataType.STRING,
            allowNull: false
        },
        status: {
            type: dataType.STRING,
            allowNull: false
        },
        number: {
            type: dataType.STRING,
            allowNull: false
        },
    });

    return Invoicpro;
};