// utils/db.js

import { Sequelize } from 'sequelize';

let sequelize = null;

export async function connectToDatabase() {
  if (sequelize) {
    return sequelize;
  }

  const dbConfig = {
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
  };

  sequelize = new Sequelize(dbConfig);

  try {
    await sequelize.authenticate();
    console.log('Connection to MySQL database successful');
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    throw error;
  }

  return sequelize;
}
