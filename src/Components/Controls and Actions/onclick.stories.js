import React from 'react';

import Button from '../Button/Button';

export default {
    title: 'Component/Controls/OnClick',
    component: 'Button',
  
    argTypes: {
        onClick:{action:'clicked'},
       

    }
};

const Template = args => <Button{...args} />

export const button = Template.bind({})
button.args = {
    // variant:'primary',
    children: 'Click ME',

}

