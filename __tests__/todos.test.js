import Todos from '../app/todos';
import React from 'react';
import { shallow } from 'enzyme';

test('TodoComponent calls doneChange when todo is clicked', () => {
  const wrapper = shallow(
    <Todos />
  );
  const todoList = wrapper.find('.todos-list');
  const dataObj = wrapper.state().todos;
  const DOMObj = [];

  todoList.find("Todo").forEach(function(todo) {
    DOMObj.push(todo.props().todo);
  });

  expect(DOMObj).toEqual(dataObj);
});