const env = {
    database: 'prontomed',
    username: 'root',
    password: 'your_database_password',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;