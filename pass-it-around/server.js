const express = require('express');

const app =  express();
const PORT = process.env.PORT || 3000;

let beer = 99;
app.get('/', (req, res) => {
  beer = 99;
  res.send(`
  <h2>${beer} Bottles Of Beer On The Wall.</h2>
  <a href='${beer-1}'><h4>Take One Down, Pass It Around</h4></a>
  `)
})

app.get('/:n', (req, res) => {
  beer = req.params.n;
  if (beer > 0) {
  res.send(`
  <h2>${beer} Bottles Of Beer On The Wall.</h2>
  <a href='${beer-1}'><h4>Take One Down, Pass It Around</h4></a>
  `)
  }
  else {
    res.send(`
   
    <h2> You Drink All The Beer, BEER RUN!🍺🍺🍺 </h2>
    <a href='/'><h3>Click the Link to start pver</h3></a>
    </div>
    `)
  }
})

app.listen(PORT, () =>  console.log(`listening on port: ${PORT}`));
