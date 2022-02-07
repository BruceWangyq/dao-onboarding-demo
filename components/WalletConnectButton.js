import React from 'react'
import { useWeb3 } from '@3rdweb/hooks'

const WalletConnectButton = () => {
  const { address, connectWallet } = useWeb3()
  const formatAddress = (address) => {
    const len = address.length
    return address.substr(0, 5) + '...' + address.substring(len - 4, len)
  }

  return (
    <div className="">
      {!address ? (
        <div>
          <button
            onClick={() => connectWallet('injected')}
            className="rounded-2xl bg-white px-8 py-2 font-semibold text-black hover:bg-slate-800 hover:text-white"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="text-white">Your Address: {formatAddress(address)}</div>
      )}
    </div>
  )
}

export default WalletConnectButton
