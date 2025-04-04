import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './context/context.jsx'; // Corrected import

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
);