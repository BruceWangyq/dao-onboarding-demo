import React, { useState, useEffect } from 'react'
import { client } from '../lib/sanityClient'
import { useWeb3 } from '@3rdweb/hooks'

const ProfileList = () => {
  const { address } = useWeb3()
  const [profiles, setProfiles] = useState([])
  const formatAddress = (address) => {
    const len = address.length
    return address.substr(0, 5) + '...' + address.substring(len - 4, len)
  }

  const fetchProfileData = async (sanityClient = client) => {
    const query = `*[_type == "users" ] {
        "imageUrl": profileImage.asset->url,
        walletAddress,
        discordId,
        jobTitle,
        jobDescription
    }`

    const profileData = await sanityClient.fetch(query)

    console.log(profileData, '🔥')

    // the query returns 1 object inside of an array
    await setProfiles(profileData)
    console.log('profiles:', profiles)
    console.log('profilesNo:', profiles.length)
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <div>
      {profiles.map((user) => (
        <div className="mx-auto ml-8 flex">
          <img src={user?.imageUrl} className="m-1.5 h-6 w-6 rounded-full" />
          <div className="m-3 text-white" key={user.walletAddress}>
            {user.discordId}:
          </div>
          <div className="m-3 text-white" key={user.walletAddress}>
            {formatAddress(user.walletAddress)}
          </div>
          <div className="m-3 text-white" key={user.walletAddress}>
            {user.jobTitle}
          </div>
          <div className="m-3 text-white" key={user.walletAddress}>
            {user.jobDescription}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileList
