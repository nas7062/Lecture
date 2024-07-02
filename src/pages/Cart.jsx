import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import { removeCart } from "../reducer/cartSlice";
import styled from "styled-components";
import Footer from "../components/Footer";

const CartSection = styled.div`
    position:absolute;
    top:30%;
    left:10%;
    display:flex;
    flex-direction:column;
    width:1500px;
`
const CartList = styled.div`
    margin-top:50px;
    display:flex;
    position:relative;
    left:0px;
    width:1500px;
    & img{
    width:300px;
    flex:0.1;
    }
    & p {
    display:flex;
    flex-direction:column;
    position:relative;
    left:150px;
    margin-left:10px;
    flex:0.08;
    }
    &  span {
         position:relative;
         left:420px;
         font-weight:600;
         color:green;
         cursor:pointer;
    }
    & button {
    position:relative;
    left:680px;
    height:50px;
    width:50px;
    border:0px;
    background-color:white;
    color:red;
    font-size:1.5rem;
    cursor:pointer;
    flex:0.15;
    }
`
const Cart = () => {
    const Carts = useSelector((state) => state.carts);
    const cart = [].concat(...Carts);
    const dispatch = useDispatch();
    console.log(cart);

    return (
        <div>
            <Header />
            <CartSection>
                <table>
                    <th>강의</th>
                    <th>강의 정보</th>
                    <th>구매하기</th>
                    <th>취소</th>
                </table>
                {cart.map((item) => <CartList key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <span>구매하기</span>
                    <button onClick={() => dispatch(removeCart(item.id))}>X</button>
                </CartList>)}

            </CartSection>
            
        </div>
    );
}
export default Cart;