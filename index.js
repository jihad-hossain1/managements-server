const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// Midleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'saban', email: 'sabana@gmail.com' },
    { id: 2, name: 'rubina', email: 'rubinaa@gmail.com' },
    { id: 3, name: 'rubia', email: 'rubiaa@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('User Management server is running')
});


app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
})