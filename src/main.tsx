import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const html = Array.from(document.getElementsByTagName('html')!)[0];

html.style.overflowY = 'scroll';
html.style.marginBottom = '30px';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
