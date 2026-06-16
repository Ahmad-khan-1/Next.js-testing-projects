import TodoItem from "@/components/TodoItem";
import AnotherTodo from "@/components/AnotherTodo";
import React, { Suspense } from "react";

const Todo = () => {
  return (
    <div>
      <Suspense>
        <TodoItem />
      </Suspense>
      <Suspense>
        <AnotherTodo />
      </Suspense>
      Hello
    </div>
  );
};

export default Todo;
