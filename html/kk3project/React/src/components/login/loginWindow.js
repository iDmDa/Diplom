import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '../Input/Input';
import { useAuth } from '../sharedVars';
import { LoginForm } from './loginForm';
import { RegForm } from './regForm';
import { ErrRegForm } from './errRegForm';
import { ErrLoginForm } from './errLoginForm';

export const LoginWindow = () => {
    const {
        login, setLogin,
        pass, setPass,
        reg, setReg,
        fam, setFam,
        name, setName,
        midname, setMidname,
        otd, setOtd,
        email, setEmail } = useAuth();


        
    return (
        <> {
            reg === 'login' ? (<LoginForm />)
                : reg === 'newReg' ? (<RegForm />)
                    : reg === '-1' ? (<ErrRegForm />)
                        : reg === '-2' ? (<ErrLoginForm />)
                            : null
        }
        </>

    );
}