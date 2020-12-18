const express = require('express')
const app = express();
const PORT = 4000;
const naviData = require('./nav.json')
const galleryData = require('./gallery.json')
const fs = require('fs')
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

console.log(naviData);

// app.post('/add', (req, res) => {
//     console.log(object);
// })


// normalmente hecho así:
// app.get('/about', (req, res) => {
//     res.render('about', {title: "About"})
// })

//dinámico lo haremos con forEach:
naviData.forEach(element => {
    app.get(`${element.url}`, (req, res) => {
        res.render(`${element.url.substr(1)}`, {title: `${element.name}`, naviData})
        console.log(element);
    })
});
console.log(galleryData);
galleryData.forEach(element => {
    app.get('/gallery'), (req, res) => {
        res.render('gallery',`${element.download_url}`, galleryData)
    }
})
// app.get('/gallery', (req, res) => {    
//     res.render('gallery', { title: 'Gallery', data: galleryData, img: download_url})
// })

app.use((req, res) => {
    res.status(404).send('sorry cant find that!');})

app.listen(PORT, () => `server running on http://localhost:${PORT}`)



