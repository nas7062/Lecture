import Header from "../components/Header";
import { useDispatch,useSelector } from "react-redux";
import { addCart } from "../reducer/cartSlice";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { LectContext } from "../App";
const Detail = () =>{
    const lectures = useContext(LectContext);
    const dispatch = useDispatch();
    const id =useParams();
    
    const filterLect=  lectures.filter((item)=>Number(item.id) ===Number(id.id));
    console.log(filterLect);
    return(
        <div>
            <Header/>
            {filterLect.map((item)=><div key={item.id}>
                    <div>{item.id}</div>
                    <button onClick={()=>dispatch(addCart(item))}>
                        ADD TO CART
                    </button>
            </div>)}
            
        </div>
    );
}

export default Detail;