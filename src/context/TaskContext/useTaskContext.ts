import { useContext } from "react";
import { TaskContext } from "./TaskContext";

//Hook personalizado (useTaskContext): Facilita o uso do contexto em outros componentes, permitindo que qualquer componente que precise acessar o contexto utilize este hook
export function useTaskContext() {
    return useContext(TaskContext);
}