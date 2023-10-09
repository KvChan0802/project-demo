import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Main from './Main';
import ScanQRcode from './ScanQRcode';
import Punch from './Punch';
import Record from './Record';


function App() {
  return (
    <>
    <BrowserRouter>
      <header className="w-100">
        <div className="row m-2">
          <div className="col-3"></div>
          <div className="col-6 ">
            <p className="fs-2 text-center"><Link to="/">澳門馬拉松</Link></p>
          </div>
          <div className="col-3">
            <p className="ds-3 text-end m-2">登出</p>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/scan" element={<ScanQRcode/>}></Route>
        <Route path="/punch" element={<Punch/>}></Route>
        <Route path="/record" element={<Record/>}></Route>
        <Route path="*" element="<div className='appbody m-5'>404</div>"></Route>
      </Routes>

      <footer>
        <p className="m-4 text-center">你好, KvChan</p>
      </footer>
    </BrowserRouter>
    </>
  );
}

export default App;
