import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import LoginModule from './LoginModule';
import AccountMenu from './components/AccountMenu';

window.globalState = {
    data: {info: 'info',},
    subscribers: [],
  
    setUpdate: function (value) {
      this.data = {...this.data, ...value};
      
      // Уведомляем всех подписчиков об изменении
      this.subscribers.forEach((callback) => callback(this.data));
    },
  
    subscribe: function (callback) {
      this.subscribers.push(callback);
      // Возвращаем функцию для отписки
      return () => {
        this.subscribers = this.subscribers.filter((cb) => cb !== callback);
      };
    },
  };
  
  window.renderReactComponent = function (id) {
      let component;
      switch (id) {
          case 'loginLayer':
              component = <LoginModule />;
              break;
          case 'menu_box':
              component = <AccountMenu />;
              break;
          default:
              return;
      }
  
    const container = document.getElementById(id);
    if (container) {
      const root = createRoot(container); // Создание корня
      root.render(component); // Рендер компонента
    }
  };