const express = require("express");
const app = express();
const port = 8000

app.set('view engine', 'ejs');
app.use(require("./routes"));

app.listen (port, () => {
    console.log(`Running on port ${port}`)
});