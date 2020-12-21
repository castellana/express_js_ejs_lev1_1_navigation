const express = require('express')
const router = express.Router()

const nav = require('./nav.json')
const gallery = require('./gallery.json')
const news = require('./news.json')
// console.log(nav);

router.get('/', (req, res) => {
    res.render('index', { nav })
})
router.get('/about', (req, res) => {
    res.render('about', { nav })
    // ó así: res.render('about', { nav: nav })
})
router.get('/contact', (req, res) => {
    res.render('contact', { nav: nav })
})
router.get('/gallery', (req, res) => {
    res.render('gallery', { nav: nav, gallery: gallery })
})
router.get('/team', (req, res) => {
    res.render('team', { nav: nav, news })
})


module.exports = router