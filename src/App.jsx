import Main from './pages/Main'
import { createContext } from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes ,Route} from "react-router-dom"
export const LectContext = createContext(null);
function App() {
  const [lectures, setlectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        // axios.get에서 JSON 파일의 절대 경로를 정확히 지정해야 합니다.
        const response = await axios.get("../util/LectureData.json");
        
        setlectures(response.data.lectures); // lectures 배열을 상태에 저장합니다.
      } catch (error) {
        console.error('데이터 받아오기 실패:', error);
      }
    };

    fetchLectures();
  }, []);
  
  return (
    <>
    <LectContext.Provider value={lectures}>
    <Routes >
    <Route path ="/" element ={<Main lectures ={lectures}/>} /> 
    
    </Routes>
    </LectContext.Provider>
    </>
  )
}

export default App;
