const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/rounds', (req, res) => {
  res.sendFile(__dirname + '/public/round.html');
});
app.get('/api/v1/rounds', (req, res) => {
  try {
    let users = JSON.parse(fs.readFileSync("./data/data.json"))
    res.json({
      users: users,
      status: "success"
    })
  } catch (error) {
    res.json({
      error: error,
    })
  }

})
app.post('/api/v1/rounds', (req, res) => {
  if (!fs.existsSync('./data/data.json')) {
    fs.writeFileSync('./data/data.json', '[]');
  }

  let { name1, name2, name3, name4 } = req.body;
  let user = {
    id: Math.floor(Math.random() * 1000),
    name1: name1,
    name2: name2,
    name3: name3,
    name4: name4,
    Totalrounds: {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0
    }
  };

  try {
    let games = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    games.push(user);
    fs.writeFileSync('./data/data.json', JSON.stringify(games));
    res.json({
      message: "Create user successfully",
      status: "success",
      id: user.id
    });
  } catch (error) {
    res.json({
      error: error
    });
  }
});
app.post('/api/v1/rounds', (req, res) => {
  if (!fs.existsSync('./data/data.json')) {
    fs.writeFileSync('./data/data.json', '[]');
  }

  let user = {
    rounds: {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0
    }

  };

  try {
    let games = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    games.push(user);
    fs.writeFileSync('./data/data.json', JSON.stringify(games));
    res.json({
      message: "Create user successfully",
      status: "success",
    });
  } catch (error) {
    res.json({
      error: error
    });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
