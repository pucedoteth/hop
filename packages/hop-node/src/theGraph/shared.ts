import getTokenDecimals from 'src/utils/getTokenDecimals'
import { ChainSlug } from '@hop-protocol/core/config'
import { DateTime } from 'luxon'
import { NetworkSlug, networks } from '@hop-protocol/core/networks'
import { formatUnits } from 'ethers/lib/utils'

export type Filters = {
  startDate: string
  endDate: string
  orderDesc: boolean
  destinationChainId?: number
}

const chainIdToSlug: Record<string, string> = {}

for (const network in networks) {
  for (const chain in networks[network as NetworkSlug]) {
    const networkId = networks[network as NetworkSlug]?.[chain as ChainSlug]?.networkId
    if (!networkId) {
      continue
    }
    chainIdToSlug[networkId] = network
  }
}

export { chainIdToSlug }

export function normalizeEntity (x: any) {
  if (!x) {
    return x
  }

  if (x.index !== undefined) {
    x.index = Number(x.index)
  }
  if (x.originChainId) {
    x.originChainId = Number(x.originChainId)
  }
  if (x.sourceChainId) {
    x.sourceChainId = Number(x.sourceChainId)
    x.sourceChain = chainIdToSlug[x.sourceChainId]
  }
  if (x.destinationChainId) {
    x.destinationChainId = Number(x.destinationChainId)
    x.destinationChain = chainIdToSlug[x.destinationChainId]
  }

  const decimals = getTokenDecimals(x.token)

  // TODO: use correct decimal places for future assets
  if (x.amount) {
    x.formattedAmount = formatUnits(x.amount, decimals)
  }
  if (x.bonderFee) {
    x.formattedBonderFee = formatUnits(x.bonderFee, decimals)
  }

  x.blockNumber = Number(x.blockNumber)
  x.timestamp = Number(x.timestamp)
  x.timestampRelative = DateTime.fromSeconds(x.timestamp).toRelative()

  return x
}
