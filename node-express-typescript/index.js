import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
app.g
app.get('/hey', (req, res) => res.send('ho!'))
app.get('/check', (req, res) => {
  res.status(200)
  .header('Content-Type', 'application/json')
  .type('application/json')
  .json({
    message: 'test messsage',
    });
})


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});