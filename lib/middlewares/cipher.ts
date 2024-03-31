import * as bcrypt from "bcrypt";

const saltRounds = 10;

export async function encryptingPassword(password: string): Promise<string> {
    const hashResponse = await bcrypt.hash(password, saltRounds);
    return hashResponse
}

export async function comparePasswords(original: string, hashed: string): Promise<boolean>{
   const results = await bcrypt.compare(original, hashed);
   
   return results;
}