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

* **Réponse de succès**
    * **Code:** 200 <br/>
      * **Contenu:**
        `{
          "id": 5,
          "name": "Naruto Uzumaki",
          "points": 7555
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
  axios.put('/api/high-scores/5', { name: "Naruto Uzumaki", points: 7555 })
    .then(reponse => console.log(reponse))
    .catch(erreurr => console.log(erreur)