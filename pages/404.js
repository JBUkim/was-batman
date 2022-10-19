import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
  return (
    <div>
      <h1>PageNotFound</h1>
      <h3> 페이지가 없습니다. 확인해보세요.</h3>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  )
}
