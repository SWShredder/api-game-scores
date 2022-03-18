const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  connectionLimit: 5
});

/**
 * Permet de faire des requêtes à la BD en prévenant l'injection SQL
 * @param {string} query La requête sql où les valeurs sont remplacés par des ?
 * @param {[*]} values Un array contenant les paramètres qui remplaceront les ? dans l'ordre
 * @returns {Promise<any>} Le résultat de la requête
 */
async function query (query, values) {
  let conn;
  try {
    conn = await pool.getConnection();
    return await conn.query(query, values);
  } catch (err) {
    throw err;
  } finally {
    if (conn) await conn.release();
  }
}

module.exports = query;