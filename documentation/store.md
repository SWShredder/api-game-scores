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

* **Réponse de succès**
    * **Code:** 200 <br/>
      * **Contenu:**
        `{
          "id": 5,
          "name": "Goku",
          "points": 9999
          }`

    * **Réponse d'erreur:**
        * **Code:** 400 <br />
          * Les champs `name` et `points` ne sont pas tous les deux présents
            `{
            "message": "The parameters `name` and `points` are required"
            }`

          * Le champ `points` est présent mais a un format invalide
            `{
            "message": "The parameter `points` must be an integer"
            }`

        * **Code:** 500 <br />
          `{
          "message": "Message lié à l'exception levée"
          }`

* **Exemple:**
  ```
  axios.post('/api/high-scores', { name: "Goku", points: 9999 })
    .then(reponse => console.log(reponse))
    .catch(erreurr => console.log(erreur)