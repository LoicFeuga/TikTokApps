const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000
const token = "123456";
const password = "password";
const car = [{
  id: 1,
  idUser: '1',
  brand: 'Tesla'
}]
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login/:password', (req, res) => {
  if (req.params.password === password) {
    res.send(token);
  } else {
    res.send(null);
  }
})

app.get('/user/:token', (req, res) => {
  if (req.params.token === token) {
    res.send({
      name: "User",
      id: 1,
    })
  } else {
    res.send(null);
  }
})

app.get('/car/:idUser', (req, res) => {
  res.send(car.filter(c => c.idUser === req.params.idUser))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
