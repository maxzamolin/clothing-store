import '../password-reset/password-reset.css';
import { useState } from 'react';

const PasswordReset = () => {
    const [step, setStep] = useState('email');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(['', '', '', '', '']);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const handleCodeChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, '');
        if (!value) return;

        const next = [...code];
        next[index] = value[value.length - 1];
        setCode(next);

        if (index < code.length - 1) {
            document.getElementById(`code-${index + 1}`)?.focus();
        }
    };

    const handleCodeKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
        document.getElementById(`code-${index - 1}`)?.focus();
    }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
        setError('Введите e-mail');
        return;
        }
        setError('');
        setStep('code');
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        const codeStr = code.join('');
        if (codeStr.length !== 5) {
        setError('Введите код полностью');
        return;
        }
        setError('');
        setStep('newPassword');
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
        setError('Пароль должен быть не короче 6 символов');
        return;
        }
        if (password !== passwordConfirm) {
        setError('Пароли не совпадают');
        return;
        }
        setError('');
        setStep('done');
    };

    return(
        <main class="auth-page">
            <div class="container-min">
                {step === 'email' && (
                    <>
                        <section class="auth-header">
                            <div class="title">Восстановление пароля</div>
                            <div class="subtitle">
                                Пожалуйста, введите адрес электронной почты, связанный с вашей учетной записью
                            </div>
                        </section>
                        <form class="login-form" onSubmit={handleEmailSubmit}>
                            <div class="form-group">
                                <input type="email" placeholder="Введите E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            {error && <div className="form-error">{error}</div>}
                            <button class="btn-primary w-100">Восстановить</button>
                            <a class="form-link text-center w-100">Войти</a>
                        </form>
                    </>
                )}
                {step === 'code' && (
                <>
                    <section className="auth-header">
                    <div className="title">Код отправлен на почту</div>
                    <div className="subtitle">
                        Введите код подтверждения, который был отправлен на вашу почту. Проверьте папку «спам»
                    </div>
                    </section>
                    <form className="login-form" onSubmit={handleCodeSubmit}>
                    <div className="code-input form-group">
                        {code.map((digit, i) => (
                        <input
                            key={i}
                            id={`code-${i}`}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="code-box"
                            value={digit}
                            onChange={(e) => handleCodeChange(e, i)}
                            onKeyDown={(e) => handleCodeKeyDown(e, i)}
                        />
                        ))}
                    </div>
                    {error && <div className="form-error">{error}</div>}
                    <button className="btn-primary w-100" type="submit">Далее</button>
                    </form>
                </>
                )}
                {step === 'newPassword' && (
                <>
                    <section className="auth-header">
                        <div className="title">Введите новый пароль</div>
                    </section>
                    <form className="login-form" onSubmit={handlePasswordSubmit}>
                        <div className="form-group">
                            <div className="input-password">
                            <input
                                type="password"
                                placeholder="Введите пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* кнопка toggle — см. ниже */}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-password">
                            <input
                                type="password"
                                placeholder="Подтвердите пароль"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                            </div>
                        </div>
                        {error && <div className="form-error">{error}</div>}
                        <button className="btn-primary w-100" type="submit">Восстановить</button>
                    </form>
                </>
                )}
                {step === 'done' && (
                    <section className="auth-header">
                        <div className="title">Пароль изменён</div>
                        <div className="subtitle">Теперь вы можете войти с новым паролем</div>
                        <a className="form-link text-center w-100" href="/login">Войти</a>
                    </section>
                )}
            </div>
        </main>
    )
}

export default PasswordReset;