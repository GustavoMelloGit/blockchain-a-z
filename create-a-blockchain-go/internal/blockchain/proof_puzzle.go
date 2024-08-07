package blockchain

import (
	"create-a-blockchain-go/internal/hasher"
	"strconv"
)

func (b *Blockchain) proofPuzzle(previousProof, newProof int) string {
	guess := strconv.Itoa(newProof ^ 2 - previousProof ^ 2)
	guessHash := hasher.SHA256(guess)
	return guessHash
}
