package blockchain

import (
	"strconv"
	"strings"
)

func (b *Blockchain) isProofValid(previousProof, newProof int) bool {
	guess := strconv.Itoa(newProof ^ 2 - previousProof ^ 2)
	guessHash := b.hasher.SHA256(guess)
	return strings.HasPrefix(guessHash, "000")
}
