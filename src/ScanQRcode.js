import React from 'react'
import {Link} from 'react-router-dom'

export default function ScanQRcode() {
  return (
    <div className="appbody">
        <Link to="/">
            <div className="fs-3 mx-3 my-5">＜ 返回主頁</div>
        </Link>
        <div className="fs-4 mt-5 mb-4 text-center">地點 QR code 掃瞄</div>
        <div className="h-50 d-flex">
        
            <p className="w-100 m-5 text-center rounded-3 fs-5 fw-bolder"><Link to="/punch">(QR)</Link></p>
        
        
        </div>
    </div>
  )
}
