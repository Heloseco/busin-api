const express = require('express');
const router = express.Router();
const BusController = require('./../controller/BusController')

router.post('/setseat',BusController.SetSeat)

router.get('/getseat/:id',BusController.getSeat)

router.put('/bookseat/:id',BusController.BookSeat);

module.exports = router;