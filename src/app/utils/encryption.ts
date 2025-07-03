import CryptoJS from "crypto-js";

const secretKey = "fronted-master";

export const encryptId = (id: number | string): string => {
  return CryptoJS.AES.encrypt(id.toString(), secretKey).toString();
};

export const decryptId = (encryptedId: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
