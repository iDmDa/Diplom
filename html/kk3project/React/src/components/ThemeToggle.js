import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state) => state.isDarkTheme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div style={{ backgroundColor: isDarkTheme ? '#333' : '#FFF', color: isDarkTheme ? '#FFF' : '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={handleToggle}>
                Переключить на {isDarkTheme ? 'светлую' : 'темную'} тему
            </button>
        </div>
    );
};

export default ThemeToggle;