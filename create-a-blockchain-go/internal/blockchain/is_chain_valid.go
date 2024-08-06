package blockchain

func (b *Blockchain) IsChainValid() bool {
	onlyGenesisBlock := len(b.chain) == 1
	if onlyGenesisBlock {
		return true
	}

	for i := 1; i < len(b.chain); i++ {
		currentBlock := b.chain[i]
		previousBlock := b.chain[i-1]

		isGenesisBlock := i == 0
		if isGenesisBlock {
			continue
		}

		chainIsBroken := currentBlock.PreviousHash != previousBlock.Hash()
		if chainIsBroken {
			return false
		}

		powIsValid := b.isProofValid(previousBlock.Proof, currentBlock.Proof)
		if powIsValid {
			return false
		}
	}

	return true
}
