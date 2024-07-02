import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
const Login = ({ onClose }) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const LoginHandler = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                onClose(); // 로그인 성공 시 모달 닫기
            })
            .catch((e) => alert(e.message));
        setemail("");
        setpassword("");
    }
    const RegisterHandler = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                alert("회원가입이 되었습니다.")

            })
            .catch((e) => alert(e.message));
        setemail("");
        setpassword("");
    }


    return (
        <div >
            <h2>로그인</h2>
            <form>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="이메일"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="비밀번호"
                />
                <button onClick={LoginHandler}>로그인</button>
                <p>아이디가 없으신가요?</p>
                <button onClick={RegisterHandler}>회원가입</button>
            </form>
        </div>
    );
}

export default Login;