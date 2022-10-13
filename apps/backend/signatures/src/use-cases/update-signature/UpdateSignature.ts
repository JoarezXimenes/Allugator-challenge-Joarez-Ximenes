import { SignaturesRepository } from "../../repositories/implementations/SignaturesRepository";

export class UpdateSignature {
  constructor(
    private signaturesRepository: SignaturesRepository,
  ){}

  async updateSignature(signatureId: string) {

    await this.signaturesRepository.activateSignature(signatureId);

    return;
  }
}