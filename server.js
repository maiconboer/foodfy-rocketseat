const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const database = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})


server.get('/', (req, res) => {
    const slogan = {
        title: "As melhores receitas",
        description: "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
        image: "/assets/imgs/chef.png",
        imageAlt: "Imagem chef de cozinha"
    }
    return res.render('index', { slogan, database })
})

server.get('/about', (req, res) => {
    res.render('about', { database })
})

server.get('/recipes', (req, res) => {
    res.render('recipes', { database })
})

server.get('/dish', (req, res) => {
    const id = req.query.id
    const dish = database.find(dish => dish.id === id)

    if(!dish) {
        return res.send('Dish not found!')
    }

    return res.render('dish', { dish })

    res.send(id)
})

server.use((req, res) => {
    res.status(404).render("404");
  });

server.listen(5000, () => console.log('Server is running'));

