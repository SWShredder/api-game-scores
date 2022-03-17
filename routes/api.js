/**
 * Router pour les routes de l'API
 * @author Yanik Sweeney 2022/03/17
 */
const express = require('express')
const router = express.Router()

const highScoreController = require('../controllers/highScoreController')

router.route('/high-score')
    .get(highScoreController.get)
    .post(highScoreController.store)

router.route('/high-score/:id')
    .delete(highScoreController.delete)
    .put(highScoreController.update)

module.exports = router