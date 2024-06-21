import Main from './pages/Main'
import { createContext } from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes ,Route} from "react-router-dom"
import All from './pages/All';
export const LectContext = createContext(null);
function App() {
  const [lectures, setlectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get("../util/LectureData.json");
        setlectures(response.data.lectures); 
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
    <Route path ="/All" element ={<All lectures ={lectures}/>} /> 
    
    </Routes>
    </LectContext.Provider>
    </>
  )
}

export default App;
