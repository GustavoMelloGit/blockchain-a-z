import { Block } from './Block';
import { Hasher } from './Hasher';

export class Blockchain {
  readonly #chain: Block[] = [];

  constructor() {
    this.#createBlock(1, '0'); // Genesis block
  }

  get chain(): Block[] {
    return this.#chain.slice(); // Return clone of array
  }

  #addToChain(block: Block): void {
    this.#chain.push(block);
  }

  #createBlock(proof: number, previous_hash: string): Block {
    const newIndex = this.chain.length + 1;
    const timestamp = new Date().getTime();
    const block = new Block(newIndex, timestamp, previous_hash, proof);
    this.#addToChain(block);
    return block;
  }

  getLastBlock(): Block {
    const lastBlock = this.chain.at(-1);
    if (!lastBlock)
      throw new Error('A Blockchain should always have at least 1 block');
    return lastBlock;
  }

  #proofOfWork(previousProof: number): number {
    let proof = 0;
    while (!this.#isValidProof(previousProof, proof)) {
      proof++;
    }
    return proof;
  }

  #isValidProof(previousProof: number, newProof: number): boolean {
    const guess = String(newProof ** 2 - previousProof ** 2);
    const guessHash = Hasher.sha256(guess);
    return guessHash.startsWith('00');
  }

  isChainValid(): boolean {
    const onlyHasGenesisBlock = this.chain.length === 1;
    if (onlyHasGenesisBlock) return true;

    let prevBlock = this.chain[0];

    for (let block of this.chain) {
      // Ensure the chain is not broken
      if (prevBlock.hash !== block.previousHash) return false;
      // Ensure the proof of work is valid
      if (!this.#isValidProof(prevBlock.proof, block.proof)) return false;

      prevBlock = block;
    }

    return true;
  }
}

export function makeBlockchain(): Blockchain {
  return new Blockchain();
}
