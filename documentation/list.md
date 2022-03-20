**Obtenir la liste de high scores**
----
    Cette fonction permet de récupérer la liste de high scores

* **URL**

  api/high-scores/

* **Méthode:**

  `GET`

* **Paramètre d'URL**

  aucun

* **Réponse de succès**
    * **Code:** 200 <br/>
      * **Contenu:**
        `[
          {
           "id": 5,
           "name": "Urianger",
           "points": 500,
           "player_count": 3
          },
          {
           "id": 1,
           "name": "Y'Shtola",
           "points": 355,
           "player_count": 4 
          }
        ]`

* **Réponse d'erreur:**
    * **Code:** 500 <br />
      `{
      "message": "Message lié à l'exception levée"
      }`

* **Exemple:**

  ```
  axios.get('/api/high-scores')
    .then(response => console.log(response))
    .catch(err => console.log(err)
