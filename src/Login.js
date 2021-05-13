import React from 'react';
import Header from './Header';
const Login =(props)=>{
    const{
        email,
        setEmail,
        password,
        setPassword,
        handlelogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError} = props;
        return (
            <section className="login">
              <div className="loginContainer">
                <label>Нэвтрэх нэр</label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Нууц үг</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                  {hasAccount ? (
                    <>
                      <button onClick={handlelogin}>Нэвтрэх</button>
                      <p>
                        Шинэ хэрэглэгч үү ?
                        <span onClick={() => setHasAccount(!hasAccount)}>
                          Бүртгүүлэх
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <button onClick={handleSignup}>Бүртгүүлэх</button>
                      <p>
                        
                        <span onClick={() => setHasAccount(!hasAccount)}>
                          Нэвтрэх
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </section>
          );
}
export default Login;