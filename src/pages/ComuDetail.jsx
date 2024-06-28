import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ComuDetail = () =>
{   
    const posts = useSelector((state)=>state.posts);
    const id =useParams();
    const filterpost=  posts.filter((item)=>Number(item.id) ===Number(id.id));
    console.log(id.id);
    return (
        <div>
            {filterpost.map((item)=><div>{item.title}</div>)}
        </div>
    )
}
export default ComuDetail;