import React from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../types/Todo';
import { Errors } from '../types/Errors';

type Props = {
  filteredTodos: Todo[];
  onDeleteTodo: (todoId: number) => void;
  onUpdateTodos: (newTodo: Todo) => void;
  tempTodo: Todo | null;
  loadingTodoIds: number[];
  onError: (error: Errors) => void;
};

export const TodoList: React.FC<Props> = ({
  filteredTodos,
  onDeleteTodo,
  onUpdateTodos,
  loadingTodoIds,
  tempTodo,
  onError,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          loadingTodoIds={loadingTodoIds}
          onUpdateTodos={onUpdateTodos}
          onError={onError}
        />
      ))}

      {tempTodo && <TodoItem todo={tempTodo} />}
    </section>
  );
};
