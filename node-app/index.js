const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const discoveryService = require('./discovery-service');

app.listen(PORT, () => {
  console.log(`Service A running on port ${PORT}`);
})

app.get('/api', (req, res) => {
  console.log("==================",req)
 res.json("This is service A")
})

discoveryService.registerWithEureka('nodeapp', PORT);