import React from 'react'
import {Link} from 'react-router-dom'


export default function Main() {
  return (
    <div className="appbody w-100 d-flex flex-column justify-content-center align-items-center">
        <Link to="/scan">
            <div className="indexbtn fs-1 fw-bold py-2 px-5 rounded-3 text-center mb-5">打卡</div>
        </Link>
        <Link to="/record">
            <div className="indexbtn fs-1 fw-bold py-2 px-5 rounded-3 text-center mt-5">查閱資料</div>
        </Link>
    </div>

  )
}
