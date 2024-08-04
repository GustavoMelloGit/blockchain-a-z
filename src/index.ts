import express from 'express';
import { makeBlockchain } from './Blockchain';

const app = express();
app.use(express.json());
const port = 3333;

const blockchain = makeBlockchain();

app.get('/', (req, res) => {
  res.send(`Server health: ✅ Online`);
});

app.post('/mine', (req, res) => {
  res.status(200).send(blockchain.chain);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
