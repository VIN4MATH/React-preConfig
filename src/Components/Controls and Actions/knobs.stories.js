import React from 'react';

import Button from '../Button/Button';
import {withKnobs,text,boolean,} from '@storybook/addon-knobs';

export default {
    title: 'Component/Controls/Knobs',
    component: 'Button',
    decorators:[withKnobs],
  
  
};




export const Knobs = () => (
    <Button  disabled={boolean('Disabled',false)}>
        {text('Label', 'Hello')}
    </Button>

);


    

