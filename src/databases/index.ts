import { Sequelize } from 'sequelize'

const db = 'research'
const username = 'briancapah'
const password = 'briancapah'

export const sequelize = new Sequelize(db, username, password, {
    port: 5432,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 15,
        min: 5,
        idle: 20000,
        evict: 15000,
        acquire: 30000
    },
});

sequelize.authenticate()