'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Project.hasMany(models.ProjectUser, { foreignKey: 'project_id' });
      models.Project.hasMany(models.Comment, { foreignKey: 'project_id' });
    }
  }
  Project.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      teamName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      person: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      recruitDeadline: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      projectStart: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      projectEnd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      techStack: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      recommendLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Project',
      tableName: 'projects',
      underscored: true,
    }
  );
  return Project;
};
