import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { WebApp } from '@twa-dev/sdk';

// Инициализация Telegram WebApp
WebApp.ready();

// Рендер приложения
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
