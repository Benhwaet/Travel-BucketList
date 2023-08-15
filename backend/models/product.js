const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../connection');

class productData extends Model { }

productData.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Please add a product Name',
                },
            },
            maxLength: 32,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Please add a product Description',
                },
            },
            maxLength: 2000,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Product must have a price',
                },
            },
            maxLength: 32,
        },
        imagePublicId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { sequelize, modelName: 'productData', timestamps: true }
);

module.exports = productData;
