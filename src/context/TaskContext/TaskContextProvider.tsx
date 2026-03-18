import { useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
    children: React.ReactNode;
};

//É um componente React que proporciona o contexto para os componentes filhos. Ele aceita children como prop e utiliza o TaskContext.Provider para fornecer o valor do contexto.
export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}