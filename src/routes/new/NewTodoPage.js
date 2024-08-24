import { Modal } from '../../ui/Modal';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  return (
    <Modal>
      <TodoForm
        label='Escribe tu nuevo todo'
        submitText='Añadir'
        submitEvent={(text) => addTodo(text)}
      />
    </Modal>
  );
}
export { NewTodoPage };
