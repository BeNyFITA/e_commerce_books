module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define(
      'Livro',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        titulo: {
          type: DataTypes.STRING,
          allowNull: false
        },
        quantidade_paginas: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        autor: {
          type: DataTypes.STRING,
          allowNull: false
        },
        ano_lancamento: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        estoque: {
          allowNull: false,
          type: DataTypes.INTEGER
        },
        updatedAt: {
          allowNull: true,
          type: DataTypes.DATE
        },
        createdAt: {
          allowNull: true,
          type: DataTypes.DATE
        }
      },
      {
        tableName: 'livros'
      }
    );
  
    return Livro;
  };
  