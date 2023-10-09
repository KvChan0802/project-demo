import React from 'react'
import {Link} from 'react-router-dom'

export default function Record() {
  return (
    <div className="appbody">
      <Link to="/">
          <div className="fs-3 mx-3 my-5">＜ 返回主頁</div>
      </Link>
      <p className="fs-1 text-center m-4">（打卡記錄）</p>
    </div>
  )
}
