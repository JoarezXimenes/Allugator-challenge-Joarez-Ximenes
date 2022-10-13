import { Signatures } from "../../database/models/Signatures";
import { Signature } from "../../entities/Signature";
import { ISignaturesRepository } from "../ISignaturesRepository";

export class SignaturesRepository implements ISignaturesRepository {
  constructor(
    private signaturesModel = Signatures
  ) {}

  async createSignature(signature: Signature): Promise<void> {
    const {id, userId, productId, active} = signature
    await this.signaturesModel.create({id, userId, productId, active});
  }
  async activateSignature(id: string): Promise<void> {
    await this.signaturesModel.update({active: true}, {
      where: {
        id
      }
    })
  }
  async getActiveSignatures(userId: string): Promise<Signature[]> {
    const signatures = await this.signaturesModel.findAll({
      where: {
        userId,
        active: true,
      }
    });

    if (!signatures) return [];
    
    return signatures as unknown as Signature[];
  }

}