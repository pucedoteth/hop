import React, { useEffect, useState } from 'react'
import { providers } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { useWeb3Context } from 'src/contexts/Web3Context'
import { getVotes } from './claims'
import { commafy } from 'src/utils/commafy'
import Address from 'src/models/Address'
import shuffle from 'lodash/shuffle'
import { getEnsAddress, getEnsAvatar } from 'src/utils/ens'
import { delegatesJsonUrl, claimChainId } from './config'
import { networkIdToSlug } from 'src/utils/networks'

const votesCache :any = {}
const addressCache:any = {}
const avatarCache:any = {}
let cached : any[] = []

export function useDelegates() {
  const [delegates, setDelegates] = useState<any[]>(cached || [])
  const { provider, address, connectedNetworkId } = useWeb3Context()
  const [claimProvider] = useState(() => {
    return providers.getDefaultProvider(networkIdToSlug(claimChainId))
  })

  useEffect(() => {
    async function update() {
      if (delegates.length > 0) {
        return
      }
      const res = await fetch(delegatesJsonUrl)
      const json = await res.json()
      const _delegates :any[] = []
      for (const _delegate of json) {
        const delegate : any = {}
        delegate.ensName = _delegate.ensName
        delegate.votesFormatted = delegate.votesFormatted || '...'
        delegate.address = null
        delegate.infoUrl = _delegate.infoUrl
        if (_delegate.address) {
          delegate.address = new Address(_delegate.address)
        }
        _delegates.push(delegate)
      }
      setDelegates(shuffle([..._delegates]))
    }

    update().catch(console.error)
  }, [])

  useEffect(() => {
    async function update() {
      if (Object.keys(votesCache).length > 0) {
        return
      }
      const _delegates = await Promise.all((delegates).map(async (delegate: any) => {
        try {
          if (!delegate.address) {
            if (!addressCache[delegate.ensName]) {
              const address = await getEnsAddress(delegate.ensName)
              addressCache[delegate.ensName] = address
            }
            if (addressCache[delegate.ensName]) {
              delegate.address = new Address(addressCache[delegate.ensName])
            }
          }
          if (!delegate.avatar) {
            if (!avatarCache[delegate.ensName]) {
              const avatar = await getEnsAvatar(delegate.ensName)
              avatarCache[delegate.ensName] = avatar
            }
            if (avatarCache[delegate.ensName]) {
              delegate.avatar = avatarCache[delegate.ensName]
            }
          }
          const delegateAddress = delegate.address?.address
          if (!delegateAddress) {
            return delegate
          }
          if (!votesCache[delegateAddress]) {
            const votes = await getVotes(claimProvider, delegateAddress)
            votesCache[delegateAddress] = votes
          }

          delegate.votes = votesCache[delegateAddress]
          const votesFormatted = delegate!.votes!.gt(0) ? `${commafy(Number(formatUnits(delegate!.votes!.toString(), 18)), 4)} votes` : '0 votes'
          delegate.votesFormatted = votesFormatted
        } catch (err) {
          console.error(err)
        }
        return delegate
      }))
      cached = [..._delegates]
      setDelegates(cached)
    }

    update().catch(console.error)
  }, [delegates])

  return {
    delegates
  }
}
