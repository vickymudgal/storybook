import React from "react";
import  ToDo  from "./Todo";

export default {
    title: 'Todos',
    status: true,
  };

const Template = (args) => <ToDo {...args} />;

export const ToDoSingleDone = Template.bind({});
ToDoSingleDone.args = {
    title: 'neque voluptates ratione text',
    status: true,
};

export const ToDoSingleNotDone = Template.bind({});
ToDoSingleNotDone.args = {
    title: 'debitis accusantium ut quo facilis nihil quis sapiente necessitatibus',
    status: false,
};
