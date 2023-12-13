import { FinalityBlockTag } from 'src/chains/IChainBridge'
import { FinalityService, IFinalityService } from 'src/chains/Services/FinalityService'
import { IInclusionService } from 'src/chains/Services/InclusionService'
import { providers } from 'ethers'

export class OptimismFinalityService extends FinalityService implements IFinalityService {
  constructor (private readonly inclusionService: IInclusionService) {
    super()
  }

  async getCustomBlockNumber (blockTag: FinalityBlockTag): Promise<number | undefined> {
    if (!this.#isCustomBlockNumberSupported(blockTag)) {
      throw new Error(`getCustomBlockNumber: blockTag ${blockTag} not supported`)
    }

    if (
      !this.inclusionService?.getLatestL1InclusionTxBeforeBlockNumber ||
      !this.inclusionService?.getLatestL2TxFromL1ChannelTx
    ) {
      this.logger.error('getCustomSafeBlockNumber: includeService not available')
      return
    }

    // Get the latest checkpoint on L1
    const l1SafeBlock: providers.Block = await this.l1Wallet.provider!.getBlock('safe')
    const l1InclusionTx = await this.inclusionService.getLatestL1InclusionTxBeforeBlockNumber(l1SafeBlock.number)
    if (!l1InclusionTx) {
      this.logger.error(`getCustomSafeBlockNumber: no L1 inclusion tx found before block ${l1SafeBlock.number}`)
      return
    }

    // Derive the L2 block number from the L1 inclusion tx
    const latestSafeL2Tx = await this.inclusionService.getLatestL2TxFromL1ChannelTx(l1InclusionTx.transactionHash)
    const customSafeBlockNumber = latestSafeL2Tx?.blockNumber
    if (!customSafeBlockNumber) {
      this.logger.error(`getCustomSafeBlockNumber: no L2 tx found for L1 inclusion tx ${l1InclusionTx.transactionHash}`)
      return
    }

    return customSafeBlockNumber
  }

  #isCustomBlockNumberSupported (blockTag: FinalityBlockTag): boolean {
    return blockTag === FinalityBlockTag.Safe
  }
}
