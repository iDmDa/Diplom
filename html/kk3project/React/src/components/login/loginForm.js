import { useAuth } from "../sharedVars";
import Input from '../Input/Input';


export const LoginForm = () => {
    const {
        login, setLogin,
        pass, setPass,
        reg, setReg,
        fam, setFam,
        name, setName,
        midname, setMidname,
        otd, setOtd,
        email, setEmail} = useAuth();

        const userLogin = () => {
            fetch('index.php', {  // Отправка запроса на index.php в той же директории
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    pass: window.md5(pass),
                    reg: reg,
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка сети');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Успешный ответ:', data);
                    if (data === "-2") setReg("-2");
                    if (data === "login") window.location.reload();
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                });
    
        }

    return (
        <>
            <form id="loginForm" method='POST' onSubmit={(e) => { 
                e.preventDefault();
                userLogin();
                }}>
                <div className="name">Авторизация</div>
                <Input label='Логин'
                    id="log"
                    value={login}
                    action={(e) => setLogin(e.target.value)} />
                <Input label='Пароль' type="password"
                    id="pass"
                    value={pass}
                    action={(e) => setPass(e.target.value)} />
                <div>
                    <button type="submit" id="enterButton">Войти</button>
                    <button id="newUser" onClick={
                        (e) => {
                            e.preventDefault();
                            setReg('newReg');
                        }}>Регистрация</button>
                </div>
            </form>
        </>
)}