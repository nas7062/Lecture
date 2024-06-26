import React from 'react';
import { useContext } from 'react';
import { LectContext } from '../App';
import Lecture from './Lecture';
import { useParams } from 'react-router-dom';

const LectureList = () => {
    const lectures = useContext(LectContext);
     const id = useParams();
  return (
    <div>
      {lectures.map(lecture =>  <Lecture key ={lecture.id} id={id}{...lecture}/>)}
    </div>
  );
};

export default LectureList;