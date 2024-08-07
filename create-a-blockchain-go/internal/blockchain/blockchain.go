package blockchain

import (
	"create-a-blockchain-go/internal/block"
	"time"
)

type Blockchain struct {
	chain []*block.Block
}

func NewBlockchain() *Blockchain {
	genesisBlock := block.NewBlock(0, time.Time{}, "000", 0)
	return &Blockchain{
		chain: []*block.Block{genesisBlock},
	}
}
