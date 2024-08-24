import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import { Modal } from '../../ui/Modal';
function EditTodoPage() {
  const { state, stateUpdaters } = useTodos();
  const { getTodo, loading } = state;
  const { editTodo } = stateUpdaters;

  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <Modal>
      <TodoForm
        label='Edita tu todo'
        submitText='Editar'
        defaultText={todoText}
        submitEvent={(newText) => editTodo(id, newText)}
      />
    </Modal>
  );
}
export { EditTodoPage };
