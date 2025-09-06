// app/http/controllers/homeController.js

const fs = require('fs');
const path = require('path');

// Path to your menus.json file
const menuPath = path.join(__dirname, '../../../menus.json');

function homeController() {
    return {
        index(req, res) {
            // Read the JSON file
            fs.readFile(menuPath, 'utf8', (err, data) => {
                if (err) {
                    console.error("Could not read menus.json file:", err);
                    return res.render('home', { cakes: [] }); // Render with empty array on error
                }
                const cakes = JSON.parse(data);
                // Pass the 'cakes' data to the home view
                res.render('home', { cakes: cakes });
            });
        }
    }
}

module.exports = homeController;