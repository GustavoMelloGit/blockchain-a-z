import { beforeEach, describe, expect, it } from 'vitest';
import { Block } from './Block';
import { Blockchain } from './Blockchain';

describe('Blockchain', () => {
  let blockchain: Blockchain;
  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it('should have a genesis block', () => {
    expect(blockchain.chain.length).toBe(1);
    const genesisBlock = blockchain.chain[0];
    expect(genesisBlock.proof).toBe(1);
    expect(genesisBlock.previousHash).toBe('0');
  });

  it('should not be able to add a block without mining', () => {
    blockchain.chain.push(new Block(2, 1, '', 1));
    expect(blockchain.chain.length).toBe(1);
  });

  it('should be valid if only the genesis block is present', () => {
    const isValid = blockchain.isChainValid();
    expect(isValid).toBe(true);
  });
});
