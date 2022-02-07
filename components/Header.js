import React from 'react'
import WalletConnectButton from './WalletConnectButton'

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-around">
      <a href="/" className="text-lg font-semibold text-white">
        DAOFront Demo
      </a>
      <WalletConnectButton />
    </div>
  )
}

export default Header
