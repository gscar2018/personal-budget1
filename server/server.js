const express = require('express');
const { title } = require('process');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Eat Out',
            budget: 30
        }, {
            title: 'Rent',
            budget: 375
        }, {
            title: 'Grocery',
            budget: 90
        },
        {
            title: 'Utilities',
            budget: 100
        },
        {
            title: 'Internet',
            budget: 50
        },
        {
            title: 'Phone',
            budget: 50
        },
        {
            title: 'Car',
            budget: 100
        }
    ]
};


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});