import React, { createContext, useContext, useState } from 'react';

export const SharedContext = createContext();

export function SharedProvider ({ children }) {
  const [sharedValue, setSharedValue] = useState(0);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [reg, setReg] = useState('login');
  const [fam, setFam] = useState('');
  const [name, setName] = useState('');
  const [midname, setMidname] = useState('');
  const [otd, setOtd] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SharedContext.Provider value={{ 
      sharedValue, setSharedValue,
      login, setLogin,
      pass, setPass,
      reg, setReg,
      fam, setFam,
      name, setName,
      midname, setMidname,
      otd, setOtd,
      email, setEmail
     }}>
      {children}
    </SharedContext.Provider>
  );
};

export function useAuth() {
  return useContext(SharedContext);
}