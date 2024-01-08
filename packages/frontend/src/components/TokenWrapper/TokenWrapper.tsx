import Expandable from 'src/components/TokenWrapper/Expandable'
import Network from 'src/models/Network'
import React, { FC, useEffect } from 'react'
import { Alert } from 'src/components/Alert'
import { AmountSelectorCard } from 'src/components/AmountSelectorCard'
import { Button } from 'src/components/Button'
import { Div, Flex } from 'src/components/ui'
import { constants } from 'ethers'
import { makeStyles } from '@material-ui/core/styles'
import { useTokenWrapper } from './TokenWrapperContext'

const useStyles = makeStyles(theme => ({
  button: {
    margin: `0 ${theme.padding.light}`,
    minWidth: '11rem',
    transition: 'all 0.15s ease-out, box-shadow 0.15s ease-out',
  },
  warning: {
    marginBottom: theme.padding.default,
  },
}))

export type Props = {
  network: Network | undefined
}

const TokenWrapper: FC<Props> = (props: Props) => {
  const styles = useStyles()
  const {
    selectedNetwork,
    setSelectedNetwork,
    canonicalToken,
    wrappedToken,
    amount,
    setAmount,
    wrap,
    unwrap,
    canonicalTokenBalance,
    wrappedTokenBalance,
    isWrapping,
    isUnwrapping,
    error,
    setError,
    isNativeToken,
  } = useTokenWrapper()

  useEffect(() => {
    if (props.network) {
      setSelectedNetwork(props.network)
    }
  }, [props.network])

  const handleWrapClick = (event: any) => {
    event.preventDefault()
    wrap()
  }

  const handleUnwrapClick = (event: any) => {
    event.preventDefault()
    unwrap()
  }

  const isWrappedTokenValid = wrappedToken?.address !== constants.AddressZero
  const hasWrappedToken = wrappedTokenBalance?.gt(0)
  const hasNativeToken = canonicalTokenBalance?.gt(0)
  const loadingBalance = !(canonicalTokenBalance && wrappedTokenBalance)
  const tokenSymbol = canonicalToken?.symbol

  if (!isNativeToken || !isWrappedTokenValid) {
    return null
  }

  return (
    <Expandable title={`Click here to Wrap or Unwrap ${tokenSymbol}`}>
      <Flex alignCenter my={1} justifyAround fullWidth>
        <Flex column alignCenter fullWidth>
          <AmountSelectorCard
            secondaryToken={canonicalToken}
            secondaryBalance={canonicalTokenBalance}
            loadingSecondaryBalance={loadingBalance}
            secondaryBalanceLabel={`${canonicalToken?.symbol}:`}
            value={amount}
            token={wrappedToken}
            onChange={setAmount}
            titleIconUrl={canonicalToken?.image}
            title={'Amount'}
            balance={wrappedTokenBalance}
            balanceLabel={`${wrappedToken?.symbol}:`}
            loadingBalance={loadingBalance}
            hideSymbol
            decimalPlaces={4}
            methodName="wrapToken"
            selectedNetwork={selectedNetwork}
            maxButtonLeaveSmallAmount={true}
          />

          <Flex my={3} fullWidth justifyAround alignCenter $wrap>
            <Div mb={[3]}>
              <Button
                className={styles.button}
                highlighted={hasNativeToken}
                disabled={isWrapping || !hasNativeToken}
                onClick={handleWrapClick}
                loading={isWrapping}
              >
                Wrap
              </Button>
            </Div>
            <Div mb={[3]}>
              <Button
                className={styles.button}
                highlighted={hasWrappedToken}
                disabled={isUnwrapping || !hasWrappedToken}
                onClick={handleUnwrapClick}
                loading={isUnwrapping}
              >
                Unwrap
              </Button>
            </Div>
          </Flex>

          <Flex alignCenter fullWidth>
            <Alert severity="error" onClose={() => setError(null)} text={error} />
          </Flex>
        </Flex>
      </Flex>
    </Expandable>
  )
}

export default TokenWrapper
