import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import type React from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../context/TaskContext/taskActions';

export function MainForm() {
    const {state, dispatch} = useTaskContext();

    const taskNameInput = useRef<HTMLInputElement>(null);

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function hanbleCreateNewTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        if(taskNameInput.current === null) return;

        const TaskName = taskNameInput.current.value.trim();

        if(!TaskName) {
            console.log("Digite o nome da tarefa!");
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            nome: TaskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        };

        dispatch({type: TaskActionTypes.START_TASK, payload: newTask});

    }

    function hanbleInterruptTask() {
        dispatch({type: TaskActionTypes.INTERRUPT_TASK});
    }

    return (
        <form onSubmit={hanbleCreateNewTask} action="" className='form'>
            <div className="formRow">
                <DefaultInput 
                    labelText='dfdd' 
                    type='text' 
                    id='input' 
                    placeholder='Digite aqui...'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {state.currentCycle > 0 &&  (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask && (
                    <DefaultButton 
                        aria-label='Iniciar nova tarefa' 
                        title='Iniciar nova tarefa' 
                        type='submit' 
                        icon={<PlayCircleIcon />}
                        key='Botão submit'
                    />
                )}  
                {!!state.activeTask && (
                    <DefaultButton 
                        aria-label='Interromper tarefa' 
                        title='Interromper tarefa' 
                        type='button'
                        color='red'
                        icon={<StopCircleIcon />}
                        onClick={hanbleInterruptTask}
                        key='Botão button'
                    />
                )}
            </div>
        </form>
    );
}