import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ChatScreen from './components/ChatScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chat',
    element: <ChatScreen />,
  },
]); 