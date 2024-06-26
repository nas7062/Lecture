import { useSelector ,useDispatch} from "react-redux";
import Header from "../components/Header";
import { removeCart } from "../reducer/cartSlice";

const Cart =()=>{
    const Carts = useSelector((state)=>state.carts);
    const cart = [].concat(...Carts);
    const dispatch = useDispatch();
    console.log(cart);
    
    return(
        <div>
            <Header/>
            <div>
                {cart.map((item)=> <div key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <button onClick={()=>dispatch(removeCart(item.id))}>Delete</button>
                </div>)}
                
            </div>
        </div>
    );
}
export default Cart;