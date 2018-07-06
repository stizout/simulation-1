require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
});

app.get('/api/puppies', (req, res) => {
    const db = req.app.get('db')
    db.get_puppies().then(puppies => {
        res.json(puppies);

    }).catch(err => {
        console.log('error', err);
    });
});

app.post('/api/puppies', (req, res) => {
    const puppy = req.body;
    const db = req.app.get('db');
    db.create_puppy({
        product: puppy.productName,
        price: puppy.price,
        image: puppy.image
    }).then((newPuppy) => {
        res.json(newPuppy[0]);
    }).catch(err => {
        console.log('post error', err)
    });
});

app.delete(`/api/puppies/:id`, (req, res) => {
    const { id } = req.params
    req.app.get('db').delete_puppy(id)
    res.end();
})







app.listen(4500, () => console.log('Server Started Simulation 1'));