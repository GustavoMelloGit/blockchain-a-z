package blockchain

import (
	"create-a-blockchain-go/internal/block"
	"create-a-blockchain-go/internal/hasher"
	"time"
)

type Blockchain struct {
	chain  []*block.Block
	hasher hasher.Hasher
}

func NewBlockchain(hasher hasher.Hasher) *Blockchain {
	genesisBlock := block.NewBlock(0, time.Time{}, "000", 0)
	return &Blockchain{
		chain:  []*block.Block{genesisBlock},
		hasher: hasher,
	}
}
