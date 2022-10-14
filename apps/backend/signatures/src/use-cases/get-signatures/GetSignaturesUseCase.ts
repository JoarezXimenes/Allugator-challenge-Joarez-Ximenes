import { SignaturesRepository } from "../../repositories/implementations/SignaturesRepository";

export class GetSignaturesUseCase{
  constructor(
    private signaturesRepository: SignaturesRepository
  ) {}

  async execute(userId: string) {
    const signatures = await this.signaturesRepository.getActiveSignatures(userId);

    return signatures;
  }
}