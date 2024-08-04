import { Block } from './Block';
import { Hasher } from './Hasher';

export class Blockchain {
  readonly #chain: Block[] = [];

  constructor() {
    this.#createBlock(1, '0'); // Genesis block
  }

  get chain() {
    return this.#chain.slice(); // Array clone
  }

  #createBlock(proof: number, previous_hash: string): Block {
    const newIndex = this.#chain.length + 1;
    const timestamp = new Date().getTime();
    const block = new Block(newIndex, timestamp, previous_hash, proof);
    this.#chain.push(block);
    return block;
  }

  getLastBlock(): Block {
    const lastBlock = this.#chain.at(-1);
    if (!lastBlock)
      throw new Error('A Blockchain should always have at least 1 block');
    return lastBlock;
  }

  proofOfWork(previousProof: number): number {
    let proof = 0;
    while (!this.isValidProof(previousProof, proof)) {
      proof++;
    }
    return proof;
  }

  isValidProof(previousProof: number, newProof: number): boolean {
    const guess = String(newProof ** 2 - previousProof ** 2);
    const guessHash = Hasher.sha256(guess);
    return guessHash.startsWith('00');
  }

  isChainValid(): boolean {
    return this.checkChainHashes();
  }

  checkChainHashes(): boolean {
    let isValid = true;
    let prevBlock = this.#chain[0];

    for (let block of this.#chain) {
      if (prevBlock.hash !== block.previousHash) {
        isValid = false;
        break;
      }
      prevBlock = block;
    }

    return isValid;
  }
}

export function makeBlockchain(): Blockchain {
  return new Blockchain();
}
