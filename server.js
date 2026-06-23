const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ 
      message: "Hello World depuis l'API NodeJS sur AWS !", 
      etudiant: "Juba CHABANE" 
  });
});

app.listen(port, () => {
  console.log(`API démarrée sur le port ${port}`);
});
