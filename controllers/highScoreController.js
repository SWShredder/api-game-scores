/**
 * Contrôleur pour les routes de high-scores
 * @author Yanik Sweeney 2022/03/17
 */
const dbAccessor = require('../database/dbAccessor')

const STORE_PARAM_ERROR = 'The parameters `name` and `points` are required'
const POINTS_FORMAT_ERROR = 'The parameter `points` must be an integer'
const ID_FORMAT_ERROR = 'The URL parameter `id` must be an integer > 0'
const ID_PARAM_ERROR = 'The URL parameter `id` is required'
const SCORE_NOT_FOUND = 'There is no high score with this `id`'

/**
 * Permet d'obtenir la liste des high scores
 * @param {*} req La requête http
 * @param {*} res La réponse
 * @returns {Promise<*>} La réponse
 */
exports.get = async (req, res) => {
  try {
    const result = await dbAccessor.getHighScores()
    return res.status(200).json(result)
  } catch (e) {
    return res.status(500).json({message: e.message})
  }
}

/**
 * Permet d'ajouter un high score
 * @param {*} req La requête http
 * @param {*} res La réponse
 * @returns {Promise<*>} La réponse
 */
exports.store = async (req, res) => {
  try {
    const name = req.body?.name
    const points = req.body?.points
    const pointsNumber = Number(points)

    // Vérification pour les erreurs de requête
    if (!name || !points) {
      return res.status(400).json({message: STORE_PARAM_ERROR})
    } else if (isNaN(pointsNumber)) {
      return res.status(400).json({message: POINTS_FORMAT_ERROR})
    }
    const result = await dbAccessor.storeHighScore(name, pointsNumber)
    return res.status(201).json({
      id: result.insertId,
      name: name,
      points: pointsNumber,
    })

  } catch (e) {
    return res.status(500).json({message: e.message})
  }
}

/**
 * Permet de modifier un high score dans la BD
 * @param {*} req La requête http
 * @param {*} res La réponse
 * @returns {Promise<*>} La réponse
 */
exports.update = async (req, res) => {
  try {
    const id = req.params?.id
    const name = req.body?.name
    const points = req.body?.points
    const pointsNumber = Number(points)
    const idNumber = Number(id)

    // Vérifications pour les erreurs de requête
    if (!id) {
      return res.status(400).json({message: ID_PARAM_ERROR})
    } else if (isNaN(idNumber) || idNumber <= 0) {
      return res.status(400).json({message: ID_FORMAT_ERROR})
    } else if (!name || !points) {
      return res.status(400).json({message: STORE_PARAM_ERROR})
    } else if (isNaN(pointsNumber)) {
      return res.status(400).json({message: POINTS_FORMAT_ERROR})
    }

    // Vérification pour la présence du high score à modifier
    const existingScore = await dbAccessor.getHighScore(idNumber)
    if (!existingScore?.id) {
      return res.status(404).json({message: SCORE_NOT_FOUND})
    }

    await dbAccessor.updateHighScores(id, name, points)
    return res.status(200).json({
      id: idNumber,
      name: name,
      points: pointsNumber
    })
  } catch (e) {
    return res.status(500).json({message: e.message})
  }
}