import { env } from "@/config/env";
import crypto from "crypto";

export const hashId = (id: string): string => {
  const secretKey = env.secretKey;

  return crypto
    .createHash("sha256")
    .update(id + secretKey)
    .digest("hex");
};

export const verifyHash = (id: string, hash: string): boolean => {
  const secretKey = env.secretKey;

  const generatedHash = crypto
    .createHash("sha256")
    .update(id + secretKey)
    .digest("hex");

  return generatedHash === hash;
};
