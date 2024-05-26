const express = require('express');
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log('Node Server is up and running on PORT - ' + PORT);
});

// get
app.get('/', (req, res) => {
    res.send({ status: "success", response: "end point is working !" });
});