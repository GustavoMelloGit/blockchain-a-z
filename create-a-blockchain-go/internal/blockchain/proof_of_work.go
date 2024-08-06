package blockchain

func (b *Blockchain) proofOfWork(previousProof int) int {
	proof := 0
	for !b.isProofValid(previousProof, proof) {
		proof++
	}
	return proof
}
