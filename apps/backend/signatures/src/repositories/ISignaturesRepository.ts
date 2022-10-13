import { Signature } from "../entities/Signature";


export interface ISignaturesRepository {
  createSignature(signature: Signature): Promise<void>;
  activateSignature(id: string): Promise<void>;
  getActiveSignatures(userid: string): Promise<Signature[]>;
}