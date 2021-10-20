import React from 'react';

import Button from '../Button/Button';

export default {
    title: 'Component/Controls/Options',
    component: 'Button',  
    argTypes: {        
        variant: {
            options: ['primary', 'secondary', 'success', 'danger'],
            control: { type: 'radio' },
        },
    }
};

const Template = args => <Button{...args} />
export const button = Template.bind({})
button.args = {
    // variant:'primary',
    children: 'Options on Button',

}

