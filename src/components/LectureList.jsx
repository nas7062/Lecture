import React from 'react';
import { useContext } from 'react';
import { LectContext } from '../App';
import Lecture from './Lecture';
const LectureList = () => {
    const lectures = useContext(LectContext);
    console.log(lectures);
  return (
    <div>
      {lectures.map(lecture =>  <Lecture key ={lecture.id}{...lecture}/>)}
    </div>
  );
};

export default LectureList;