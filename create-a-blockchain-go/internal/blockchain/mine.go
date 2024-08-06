package blockchain

import "create-a-blockchain-go/internal/block"

func (b *Blockchain) Mine() *block.Block {
	lastBlock := b.getLastBlock()
	lastProof := lastBlock.Proof
	previousHash := lastBlock.Hash()
	newProof := b.proofOfWork(lastProof)
	return b.createBlock(newProof, previousHash)
}
