package blockchain

import "create-a-blockchain-go/internal/block"

func (b *Blockchain) getLastBlock() *block.Block {
	return b.chain[len(b.chain)-1]
}
