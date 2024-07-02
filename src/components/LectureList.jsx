import React from 'react';
import { useContext } from 'react';
import { LectContext } from '../App';
import Lecture from './Lecture';
import { useParams } from 'react-router-dom';

const LectureList = ({ search }) => {
  const lectures = useContext(LectContext);
  const id = useParams();
  const filteredKLectures = lectures.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      {filteredKLectures.map(lecture => <Lecture key={lecture.id} id={id}{...lecture} />)}
    </div>
  );
};

export default LectureList;