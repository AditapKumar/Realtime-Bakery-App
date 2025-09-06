const Menu = require('../../models/menu')

function homeController(){
    return {
        async index(req, res) {
            try {
                const cakes = await Menu.find();
                return res.render('home', { cakes : cakes }); // pass cakes to EJS
            } catch (err) {
                console.error(err);
                return res.status(500).send("Error loading cakes");
            }
        }
    }
}

module.exports = homeController; 