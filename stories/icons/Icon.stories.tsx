import React from "react";
import  Icon  from "./Icon";
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
    icon: 'Icon',
  };

const Template = (args) => <Icon {...args} />;

export const Close = Template.bind({});
Close.args = {
    icon: faTimes,
};

export const Add = Template.bind({});
Add.args = {
    icon: faPlus,
};
