import { toggleDone, deleteTodo } from '../app/state-functions';

test('tooggleDone completes an incomplete todo', () => {
  const startState = {
    todos: [{ id: 1, done: false, text: 'Buy Milk' }]
  };

  const finState = toggleDone(startState, 1);

  expect(finState.todos).toEqual([
    { id: 1, done: true, text: 'Buy Milk' }
  ]);
});

test('deleteTodo deletes a complete todo', function() {
  const startState = {
    todos: [
      { id: 1, done: false, text: 'Buy Milk' },
      { id: 2, done: true, text: 'Walk the dog' }
    ]
  };

  const finalState = deleteTodo(startState, 2);

  expect(finalState.todos).toEqual([
    { id: 1, done: false, text: 'Buy Milk' }
  ]);
});