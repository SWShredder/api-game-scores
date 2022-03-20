**Modifier un high score**
----
    Cette fonction permet de modifier un high score

* **URL**

  api/high-scores/:id

* **Méthode:**

  `PUT`

* **Paramètre d'URL**

  `id: number`

* **Paramètre de donnée**

  **Requis:**

  `name=[string]`

  `points=[number]`

  `player_count=[number]`

* **Réponse de succès**
    * **Code:** 200 <br/>
      * **Contenu:**
        `{
          "id": 5,
          "name": "Naruto Uzumaki",
          "points": 7555,
          "player_count": 3
          }`

    * **Réponse d'erreur:**
        * **Code:** 404 <br />
          * Aucun high score n'existe avec ce id
            `{
            "message": "There is no high score with this `id`"
            }`

        * **Code:** 400 <br />
          * Le id n'est pas présent dans l'URL
            `{
            "message": "The URL parameter `id` is required"
            }`

          * Le id n'est pas dans un format valide
            `{
            "message": "The URL parameter `id` must be an integer > 0"
            }`

          * Les champs `name`,`points` ou `player_count` ne sont pas tous présents
            `{
            "message": "The parameters `name`, `points` and `player_count` are required"
            }`

          * Les champs `points` et `player_count` sont présents mais ne sont pas tous valides
            `{
            "message": "The parameters `points` and `player_count` must be integers"
            }`

        * **Code:** 500 <br />
          `{
          "message": "Message lié à l'exception levée"
          }`

* **Exemple:**
  ```
  axios.put('/api/high-scores/5', { name: "Naruto Uzumaki", points: 7555, player_count: 3 })
    .then(reponse => console.log(reponse))
    .catch(erreurr => console.log(erreur)