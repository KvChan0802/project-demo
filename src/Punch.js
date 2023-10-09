import React from 'react'
import {Link} from 'react-router-dom'

export default function Punch() {
  return (
    <div className="appbody">
        <Link to="/">
          <div className="fs-3 mx-3 my-5">＜ 返回主頁</div>
        </Link>
        <div className=" d-flex flex-column align-items-center">
        <p className="w-50 m-3 fs-5">員工：KvChan</p>
        <p className="w-50 m-3 fs-5">地點：皇朝站</p>
        <p className="w-50 m-3 fs-5">時間：2023-12-12 10:30</p>
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
        <div className="w-75 m-3 fs-1 text-center">上班</div>
        <div className="w-75 m-3 fs-1 text-center">下班</div>
        </div>
    </div>
  )
}
