package hasher

import (
	"crypto/sha256"
	"encoding/hex"
)

type Hasher interface {
	SHA256(data string) string
}

func SHA256(data string) string {
	hashed := sha256.Sum256([]byte(data))
	return hex.EncodeToString(hashed[:])
}
