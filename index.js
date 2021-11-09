import express from 'express'
import  Mongoose  from 'mongoose';
import serverRoutes from './routes/servers.js';

const PORT = process.env.PORT ?? 4000

const app = express();
const start = async() => {
  try {
    await Mongoose.connect('mongodb+srv://babaManja:1029384756@cluster0.wp85y.mongodb.net/pokemonsDB', 
    {useNewUrlParser: true,
  })
  app.listen(PORT, () => {
    console.log(`${PORT} is started...`);
  })
  } catch (error) {
    console.log(error);
  }
};

app.use((req, res, next) => {
  res.set({
  'Access-Control-Allow-Origin': ['*'],
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Allow-Headers': " Origin, Content-Type, Authorization",
  })
  next();
});

app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use(serverRoutes)

app.get('/', (req, resp) => {
  resp.send('Hello')
})

start()