import express from 'express'
import serverRoutes from './routes/servers.js';

const PORT = process.env.PORT ?? 4000

const app = express()

app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use(serverRoutes)

app.get('/', (req, resp) => {
  resp.send('Hello')
})

app.listen(PORT, () => {
  console.log(`${PORT} is started...`);
})