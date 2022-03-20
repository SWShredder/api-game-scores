/**
 * Contient les méthodes servant à communiquer avec la base de données
 * @author Yanik Sweeney 2022/03/17
 */
const query = require('./mariadb')

/**
 * Ajoute un high score dans la BD
 * @param {string} name Une string représentant le nom du joueur
 * @param {number} points Une valeur entière représentant le pointage
 * @param {number} playerCount Une valeur entière représentant le nombre de joueurs
 * @returns {Promise<{affectedRows}|*>} Le résultat de la requête
 */
exports.storeHighScore = async (name, points, playerCount) => {
  const resQuery = await query(`
      INSERT INTO highScores (name, points, player_count)
          value (?, ?, ?)
  `, [name, points, playerCount])
  if (!resQuery.affectedRows) throw Error
  return resQuery
}

/**
 * Permet d'obtenir la liste des High Scores à partir de la BD
 * @returns {Promise<*>} La liste des high scores
 */
exports.getHighScores = async () => {
  const resQuery = await query(`
      SELECT *
      FROM highScores
      ORDER BY points DESC
  `)
  delete resQuery.meta
  return resQuery;
}

/**
 * Permet d'obtenir un high score dans la liste
 * @param {number} id Une valeur entière représentant l'identifiant d'un high score
 * @returns {Promise<any>} Le high score correspondant au id
 */
exports.getHighScore = async (id) => {
  const resQuery = await query(`
    SELECT *
    FROM highScores
    WHERE id = ?
  `, [id])
  return resQuery[0]
}

/**
 * Permet de modifier un high score
 * @param {number} id Une valeur entière représentant l'identifiant d'un high score
 * @param {string} name Le nom du joueur
 * @param {number} points Une valeur entière représentant le pointage
 * @param {number} playerCount Une valeur entière représentant le nombre de joueurs
 * @returns {Promise<{affectedRows}|*>} Le résultat de la requête
 */
exports.updateHighScores = async (id, name, points, playerCount) => {
  const resQuery = await query(`
      UPDATE highScores
      SET name = ?, points = ?, player_count = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
  `, [name, points, playerCount, id])
  if (!resQuery.affectedRows) throw Error
  return resQuery
}

/**
 * Permet de supprimer un high score
 * @param {number} id Une valeur entière représentant l'identifiant d'un high score
 * @returns {Promise<{affectedRows}|*>} Le résultat de la requête
 */
exports.deleteHighScore = async (id) => {
  const resQuery = await query(`
      DELETE FROM highScores
      WHERE id = ?
  `, [id])
  if (!resQuery.affectedRows) throw Error
  return resQuery
}
