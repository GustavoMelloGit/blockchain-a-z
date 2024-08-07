package blockchain

import (
	"strings"
)

func (b *Blockchain) isProofValid(previousProof, newProof int) bool {
	return strings.HasPrefix(b.proofPuzzle(previousProof, newProof), "000")
}
