import { useRouter } from 'next/router'
import React from 'react'

export default function UserProfile() {
  const router = useRouter()
  console.log(router)
  const {username} = router.query
  console.log(router.query)

  return (
    <div>
      <h1>UserProfile</h1>
      <p> Hello {username} </p>
    </div>
  )
}
