package hasher

import (
	"crypto/sha256"
	"encoding/hex"
)

func SHA256(data string) string {
	hashed := sha256.Sum256([]byte(data))
	return hex.EncodeToString(hashed[:])
}
