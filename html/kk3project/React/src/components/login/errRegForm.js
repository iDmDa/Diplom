import { useAuth } from "../sharedVars";
import Input from '../Input/Input';


export const ErrRegForm = () => {
    const {
        login, setLogin,
        pass, setPass,
        reg, setReg,
        fam, setFam,
        name, setName,
        midname, setMidname,
        otd, setOtd,
        email, setEmail} = useAuth();

    return (
        <>
            <form id="loginForm" method='POST'>
                <div className="name">Ошибка</div>
                <p>Пользователь с таким логином уже существует</p>
                <div>
                    <button id="newUser" onClick={
                        (e) => {
                            e.preventDefault();
                            setReg('newReg');
                        }}>Ok</button>
                </div>
            </form>
        </>
)}