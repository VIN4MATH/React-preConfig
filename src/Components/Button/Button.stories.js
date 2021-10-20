
import React from 'react';
import Center from '../Center/Center';

import Button from './Button';

export default {
    title:'Component/Button',
    component:Button
}


export const Primary = () => <Button variant ="primary">Primary</Button>
export const Secondary= () => <Button variant ="secondary">Secondary</Button>
export const Success = () => <Button variant ="success">success</Button>
export const Danger = () => <Button variant ="danger">Danger</Button>





// Another way to write Stories is by using the Args

const Template = args => <Button {...args}/>

export const PrimaryArg = Template.bind({})
PrimaryArg.args = {
    variant:'primary',
    children :'Primary Arg Button',
    
}

export const SecondaryArg = Template.bind({})
SecondaryArg.args = {
    variant:'secondary',
    children:'Secondary Arg Button',
}


export const SuccessArg = Template.bind({})
SuccessArg.args = {
    variant:'success',
    children:'Success Arg Button',
}
export const FailureArg = Template.bind({})
FailureArg.args = {
    variant:'danger',
    children:'Failure Arg Button',
}




// Applying Decorations to the Stories 

const centerTemplate = args => <Center> <Button {...args}/></Center>

export const PrimaryDecorationArg = centerTemplate.bind({})
PrimaryDecorationArg.args = {
    variant:'primary',
    children :'Primary D Button',
    
}

export const SecondaryDecorationArg = centerTemplate.bind({})
SecondaryDecorationArg.args = {
    variant:'secondary',
    children:'Secondary D Button',
}


export const SuccessDecorationArg = centerTemplate.bind({})
SuccessDecorationArg.args = {
    variant:'success',
    children:'Success D Button',
}
export const FailureDecoartionArg = centerTemplate.bind({})
FailureDecoartionArg.args = {
    variant:'danger',
    children:'Failure D Button',
}

