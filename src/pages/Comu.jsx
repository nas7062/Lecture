import Header from "../components/Header";
import PostList from "../components/PostList";

const Comu = () =>{
    return(
        <div>
            <Header/>
            <div>
                <div>
                    <h2>자유게시판</h2>
                    <input type="input" />
                    <button>글쓰기</button>
                </div>
               <div>
                <PostList/>
               </div>

            </div>
        </div>

    );
}

export default Comu;