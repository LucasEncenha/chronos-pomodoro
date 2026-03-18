import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import type { TaskActionModel } from './taskActions';

// Define um tipo que especifica a estrutura do contexto. O contexto tem um estado (state) do tipo TaskStateModel e uma função (setState) para atualizar o estado, utilizando a tipagem do React.
type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

//Este objeto serve como valor inicial do contexto, contendo o estado inicial e uma função setState que, neste ponto, é apenas um placeholder (uma função vazia).
const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

//O createContext é usado para criar o contexto utilizando o valor inicial definido anteriormente. O tipo TaskContextProps é passado para garantir que qualquer uso do contexto siga a estrutura que você definiu.
export const TaskContext = createContext<TaskContextProps>(initialContextValue);