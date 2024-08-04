import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';

export const Hasher = {
  sha256(data: string): string {
    const hashed = sha256(data);
    return hashed.toString(CryptoJS.enc.Hex);
  },
};
