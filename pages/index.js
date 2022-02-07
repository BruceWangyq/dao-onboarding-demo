import Head from 'next/head'
import Header from '../components/Header'
import ProfileList from '../components/ProfileList'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import WalletConnectButton from '../components/WalletConnectButton'

export default function Home() {
  const { address, connectWallet } = useWeb3()

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        discordId: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      console.log('welcome', { address })
    })()
  }, [address])

  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!address ? (
        <div className="flex h-screen w-screen flex-col items-center pt-[500px]">
          <WalletConnectButton />
          <div className="my-4 text-lg text-white">
            please connect with your metamask wallet with ethreum or rinkeby
            network.
          </div>
        </div>
      ) : (
        <div className="mx-auto h-3/4 w-3/4 flex-col items-center justify-center rounded-lg bg-gray-700">
          <div className=" m-4 text-center text-3xl text-white">
            Welcome aboard!
          </div>
          <ProfileList />
        </div>
      )}
    </div>
  )
}
