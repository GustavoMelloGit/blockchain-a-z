import express from 'express';
import { makeBlockchain } from './Blockchain';

const app = express();
app.use(express.json());
const port = 3333;

const blockchain = makeBlockchain();

app.get('/', (_, res) => {
  res.send(`Server health: ✅ Online`);
});

app.post('/mine', (_, res) => {
  const block = blockchain.mine();
  res.status(201).send({
    data: block,
  });
});

app.get('/chain', (_, res) => {
  res.status(200).send({
    data: blockchain.chain.map((b) => ({
      ...b,
      hash: b.hash,
    })),
  });
});

app.get('/is-chain-valid', (_, res) => {
  res.status(200).send({
    data: blockchain.isChainValid(),
  });
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
