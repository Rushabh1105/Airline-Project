const express = require('express');
const router = express.Router();

const BookingController = require('../../controller/index');
const { createChannel } = require('../../utils/message-queue');

const channel = await createChannel();
const bookingController = new BookingController(channel)

router.post('/bookings', bookingController.create);

module.exports = router;