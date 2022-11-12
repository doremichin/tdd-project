import React, { Fragment } from 'react';

interface ISubPage {}

export function SubPage({}: ISubPage) {
  return <Fragment>SubPage</Fragment>;
}

export default SubPage;

class Todo {
  public list: Array<{ name: string; msg: string }>;

  constructor() {
    this.list = [];
  }

  set addTodo(input: { name: string; msg: string }) {
    this.list.push(input);
  }

  set deleteTodo(name: string) {
    const newTodos = this.list.filter((item) => {
      return item.name !== name;
    });

    this.list = [...newTodos];
  }
}
