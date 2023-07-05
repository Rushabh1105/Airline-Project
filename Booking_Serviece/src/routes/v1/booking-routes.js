const express = require('express');
const router = express.Router();

const { BookingController } = require('../../controller/index');

//const { createChannel } = require('../../utils/message-queue');

//const channel = await createChannel();
const bookingController = new BookingController()

router.post('/bookings', bookingController.create);
router.post('/publish', bookingController.sendMessageToQueues);

module.exports = router;