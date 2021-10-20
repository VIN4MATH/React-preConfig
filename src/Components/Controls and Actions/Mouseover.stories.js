import React from 'react';

import Button from '../Button/Button';

export default {
    title: 'Component/Controls/MouseOver',
    component: 'Button',
    parameters: {
        actions: {
            handles: ['mouseover', 'click .btn'],
        },
    },

};

const Template = args => <Button{...args} />

export const button = Template.bind({})
button.args = {
    // variant:'primary',
    children: 'MousOver Button',

}

