import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview, deleteReview } from "../reducer/reviewSlice";
import styled from "styled-components";
import { auth } from "../firebase/firebase";
const ReviewListSec = styled.div`
    h2{
        position:relative;
        left:280px;
    }
 li {
    list-style:none;
    text-align:center;
 }
    @media screen and (max-width: 700px) {
        
        position:relative;
        left:-80px;
        width:300px;
    }
`
const ListSec = styled.div`
    border:1px solid black;
    width:600px;
    margin-top:20px;
    @media screen and (max-width: 700px) {
        
        position:relative;
        left:150px;
        width:300px;
    }
`   
const ReviewList = ({ id }) => {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews.reviews[id] || []);
    const currentUser = auth.currentUser;
    const userId = currentUser ? auth.currentUser.providerData[0].uid : null;
    const [editingId, setEditingId] = useState(null);
    const [editingContent, setEditingContent] = useState("");
    const [editingScore, setEditingScore] = useState(1);

    const handleUpdateReview = () => {
        dispatch(updateReview({ id, reviewId: editingId, newContent: editingContent, newScore: editingScore, userId }));
        setEditingId(null);
        setEditingContent("");
        setEditingScore(1);
    };
    const handleDeleteReview = (reviewId) => {
        dispatch(deleteReview({ id, reviewId, userId }));
    };
    return (
        <ReviewListSec>
            <h2>수강평 목록</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        {editingId === review.id ? (
                            <ListSec>
                                <select
                                    value={editingScore}
                                    onChange={(e) => setEditingScore(Number(e.target.value))}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <input
                                    type="text"
                                    value={editingContent}
                                    onChange={(e) => setEditingContent(e.target.value)}
                                />
                                <button onClick={handleUpdateReview}>저장</button>
                                <button onClick={() => setEditingId(null)}>취소</button>
                            </ListSec>
                        ) : (
                            <ListSec>
                                <p>(평점: {review.score}) - {review.date}</p>
                                <p>{review.content}</p>
                                <p>{review.userId.slice(0, 7 )+"..."}</p>
                                {review.userId === userId && (<>
                                    <button
                                        onClick={() => {
                                            setEditingId(review.id);
                                            setEditingContent(review.content);
                                            setEditingScore(review.score);
                                        }}
                                    >수정</button>
                                    <button onClick={() => handleDeleteReview(review.id)}>삭제</button>
                                </>)}
                            </ListSec>
                        )}
                    </li>
                ))}
            </ul>
        </ReviewListSec>
    );
};

export default ReviewList;
