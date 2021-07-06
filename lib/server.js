import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 'peter'});
});

app.listen(config.port, () => {
  console.info(`running on port ${config.port}`);
});