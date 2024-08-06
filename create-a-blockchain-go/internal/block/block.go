package block

import (
	"create-a-blockchain-go/internal/hasher"
	"encoding/json"
	"time"
)

type Block struct {
	Index        int       `json:"index"`
	Timestamp    time.Time `json:"timestamp"`
	PreviousHash string    `json:"previousHash"`
	Proof        int       `json:"proof"`
}

func (b *Block) Hash() string {
	properties := map[string]interface{}{
		"index":        b.Index,
		"timestamp":    b.Timestamp,
		"previousHash": b.PreviousHash,
		"proof":        b.Proof,
	}
	propertiesBytes, _ := json.Marshal(properties)
	return hasher.SHA256(string(propertiesBytes))
}

func NewBlock(index int, timestamp time.Time, previousHash string, proof int) *Block {
	return &Block{
		Index:        index,
		Timestamp:    timestamp,
		PreviousHash: previousHash,
		Proof:        proof,
	}
}
