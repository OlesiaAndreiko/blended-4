import { Grid, GridItem, Todo } from 'components';
import { selectTodos } from 'components/redux/selectors';
import { deleteTodo } from 'components/redux/slice';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </GridItem>
        ))}
    </Grid>
  );
};

export default TodoList;
