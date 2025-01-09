import { useAuth } from "../sharedVars";
import Input from '../Input/Input';


export const RegForm = () => {
    const {
        login, setLogin,
        pass, setPass,
        reg, setReg,
        fam, setFam,
        name, setName,
        midname, setMidname,
        otd, setOtd,
        email, setEmail } = useAuth();

    const createUser = () => {
        fetch('index.php', {  // Отправка запроса на index.php в той же директории
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                pass: window.md5(pass),
                fam: fam,
                name: name,
                midname: midname,
                otd: otd,
                email: email,
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
                if (data === "-1") setReg("-1");
                //setReg(false);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });

    }

    return (
        <>
            <form id="regForm" method='POST' onSubmit={(e) => {
                e.preventDefault();
                createUser();
                setReg('login');
            }}>
                <div className="name">Регистрация</div>
                <Input label='Логин'
                    id="log"
                    value={login}
                    action={(e) => setLogin(e.target.value)}
                    required />
                <Input label='Пароль' type="password"
                    id="pass"
                    value={pass}
                    action={(e) => setPass(e.target.value)}
                    required />
                <Input label='Фамилия'
                    id="fam"
                    value={fam}
                    action={(e) => setFam(e.target.value)}
                    required />
                <Input label='Имя'
                    id="name"
                    value={name}
                    action={(e) => setName(e.target.value)}
                    required />
                <Input label='Отчество'
                    id="midname"
                    value={midname}
                    action={(e) => setMidname(e.target.value)}
                    required />
                <Input label='Отдел'
                    id="otd"
                    value={otd}
                    action={(e) => setOtd(e.target.value)}
                    required />
                <Input label='Почта'
                    id="email"
                    value={email}
                    type='email'
                    action={(e) => setEmail(e.target.value)}
                    required />
                <div>
                    <button id="returnButton" onClick={() => setReg('login')}>Назад</button>
                    <button id="enterButton">Регистрация</button>
                </div>
            </form>
        </>
    )
};