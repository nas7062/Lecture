import Main from './pages/Main'
import { createContext } from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import All from './pages/All';
import Comu from './pages/Comu';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Post from './components/Post';
import ComuDetail from './pages/ComuDetail';
import LoadDetail from './pages/LoadDetail';
import Review from './pages/Review';

export const LectContext = createContext(null);
export const LoadContext = createContext(null);
// 강의와 로드 데이터를 저장할 컨텍스트를 생성합니다.
function App() {
  const [lectures, setlectures] = useState([]);
  const [loads, setloads] = useState([]);
  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get("../util/LectureData.json");
        setlectures(response.data.lectures);
      } catch (error) {
        console.error('lecture 데이터 받아오기 실패:', error);
      }
    };

    fetchLectures();
  }, []);  // 강의 데이터를 가져오기 위한 useEffect 훅
  useEffect(() => {
    const fetchLoads = async () => {
      try {
        const response = await axios.get("../util/LectureData.json");
        setloads(response.data.loads);
      } catch (error) {
        console.error('load 데이터 받아오기 실패:', error);
      }
    }; // 로드 데이터를 가져오기 위한 useEffect 훅

    fetchLoads();
  }, []);
  return (
    <>
      <LectContext.Provider value={lectures} >
        <LoadContext.Provider value={loads} >
          <Routes >
            <Route path="/" element={<Main lectures={lectures} />} />
            <Route path="/All" element={<All lectures={lectures} />} />
            <Route path="/detail/:id" element={<Detail lectures={lectures} />} />
            <Route path="/comu/:id" element={<ComuDetail lectures={lectures} />} />
            <Route path="/load/:id" element={<LoadDetail loads={loads} />} />
            <Route path="/lect/:id" Component={Review} />
            <Route path="/comu" element={<Comu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </LoadContext.Provider>
      </LectContext.Provider>
    </>
  )
}

export default App;
