const router = require('express').Router()
const orderCtrl = require('../controllers/orderCtrl')
const auth = require('../middleware/auth')


router.route('/order')
    .get(auth, orderCtrl.getOrders)
    .post(auth, orderCtrl.createOrder)

module.exports = router