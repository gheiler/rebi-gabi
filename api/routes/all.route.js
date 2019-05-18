
const express = require('express');
const app = express();
const allRoutes = express.Router();

// Defined get data(index or listing) route
allRoutes.route('/').get(function (req, res) {   
  res.json({ some: "hallo!"});
});

// Defined edit route
allRoutes.route('/edit/:id').get(function (req, res) {
  res.json({});
});

module.exports = allRoutes;