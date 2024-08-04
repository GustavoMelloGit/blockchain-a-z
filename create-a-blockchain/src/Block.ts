import { Hasher } from './Hasher';

export class Block {
  constructor(
    public index: number,
    public timestamp: number,
    public previousHash: string,
    public proof: number
  ) {}

  get hash(): string {
    const properties = {
      index: this.index,
      timestamp: this.timestamp,
      previousHash: this.previousHash,
      proof: this.proof,
    };
    const propertiesString = JSON.stringify(properties);
    return Hasher.sha256(propertiesString);
  }
}
