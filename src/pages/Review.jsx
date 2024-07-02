import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addReview } from "../reducer/reviewSlice";
import { useParams } from "react-router-dom";
import { auth } from "../firebase/firebase";
const Review = ({ onClose }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews.reviews[id] || []);

    const [Content, setContent] = useState("");
    const [score, setscore] = useState(1);
    const today = new Date();
    console.log();
    const ReviewHandler = () => {
        const newReview = {
            id: reviews.length + 1,
            date: `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`,
            content: Content,
            score: score,
            userId: auth.currentUser.providerData[0].uid,
        }
        dispatch(addReview({ id, review: newReview }));
        setContent("");

        setTimeout(function () {
            onClose();
        }, 500);
    }
    console.log(reviews);
    return (
        <div>
            <h2>수강평을 남겨주세요!</h2>
            <select value={score} onChange={(e) => setscore(Number(e.target.value))} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <textarea type="text" value={Content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={ReviewHandler}>리뷰 쓰기</button>

        </div>
    );
}
export default Review;