const express = require('express');
const router = express.Router();
const db = require('../models/index');
const { user,wallet,cryptocurrency } = db;

router.get('/', async (req, res) => {
    const { id } = req.query
    if (!id) return res.status(400).json({ success: false, message: 'bad request' });
    const walletData = await wallet.findAll({
        where: {
            userId : id
        },
        include: [
            {
                model: user,
                attributes: ['name', 'username','email']
            },
            {
                model: cryptocurrency,
                attributes: ['symbol', 'name', 'type']
            }
        ],
    })
    res.json({ success: true, data: walletData })
})

module.exports = router;