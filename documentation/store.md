**Ajouter un high score**
----
    Cette fonction permet d'ajouter un high score

* **URL**

  api/high-scores

* **Méthode:**

  `POST`

* **Paramètre d'URL**

  `aucun`

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
          "name": "Goku",
          "points": 9999,
          "player_count": 4
          }`

    * **Réponse d'erreur:**
        * **Code:** 400 <br />
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
  axios.post('/api/high-scores', { name: "Goku", points: 9999, player_count: 4 })
    .then(reponse => console.log(reponse))
    .catch(erreurr => console.log(erreur)