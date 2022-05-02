const express = require('express');
const cors = require('cors')
const { connectDB, config } = require('./config');
const UserRoutes = require('./routes/UserRoutes')
const app = express()

connectDB()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

UserRoutes.routes(app);


const PORT = config.server.port || 4002;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})