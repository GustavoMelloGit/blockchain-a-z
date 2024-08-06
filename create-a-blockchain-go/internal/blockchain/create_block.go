package blockchain

import (
	"create-a-blockchain-go/internal/block"
	"time"
)

func (b *Blockchain) createBlock(proof int, previousHash string) *block.Block {
	newIndex := len(b.chain) + 1
	timestamp := time.Now()
	newBlock := block.NewBlock(newIndex, timestamp, previousHash, proof)
	b.addToChain(newBlock)
	return newBlock
}
