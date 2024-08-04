import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Block } from './Block';
import { Blockchain } from './Blockchain';

describe('Blockchain', () => {
  let blockchain: Blockchain;
  beforeEach(() => {
    vi.clearAllMocks();
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

  it('chain should be valid if only the genesis block is present in chain', () => {
    const isValid = blockchain.isChainValid();
    expect(isValid).toBe(true);
  });

  it('chain should be valid after mining a valid block', () => {
    blockchain.mine();
    expect(blockchain.isChainValid()).toBe(true);
  });
});
