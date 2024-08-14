import { blake2b } from "blakejs";

export const blake2b256 = function (data: Buffer): Buffer {
  const hash = blake2b(data, undefined, 32);
  return Buffer.from(hash);
};

// how to check conway
