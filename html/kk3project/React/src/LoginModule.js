import React, { useState } from 'react';
import { LoginWindow } from './components/login/loginWindow';
import { SharedProvider } from './components/sharedVars';

function LoginModule() {

  return (
    <SharedProvider>
      <LoginWindow />
    </SharedProvider>

  );
}

export default LoginModule;
