/**
 * Contient les méthodes servant à communiquer avec la base de données
 * @author Yanik Sweeney 2022/03/17
 */
const query = require('./mariadb')

/**
 * Ajoute un high score dans la BD
 * @param {string} name Une string représentant le nom du joueur
 * @param {number} points Une valeur entière représentant le pointage
 * @returns {Promise<{affectedRows}|*>} Le résultat de la requête
 */
exports.storeHighScore = async ({name, points}) => {
    const resQuery = await query(`
        INSERT INTO highScores (name, points)
        value (?, ?)
    `, [name, points])
    if (!resQuery.affectedRows) throw Error
    return resQuery
}

