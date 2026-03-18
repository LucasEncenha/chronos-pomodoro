import Home from './pages/Home';
import { TaskContextProvider } from './context/TaskContext/TaskContextProvider';

import './styles/thema.css';
import './styles/global.css';

export function App() {
    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    );
}