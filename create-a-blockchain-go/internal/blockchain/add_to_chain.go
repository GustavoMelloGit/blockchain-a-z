package blockchain

import "create-a-blockchain-go/internal/block"

func (b *Blockchain) addToChain(block *block.Block) {
	b.chain = append(b.chain, block)
}
