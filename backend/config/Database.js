import {Sequelize} from "sequelize";

const db = new Sequelize('upload_db','admin','admin',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;