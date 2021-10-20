import React from 'react';
import Input from './Input';


export default {
    title:"Component/Input",
    component:Input,
}

export const Small  = () => <Input size ='small' placeholder='Chota Size'/>
export const Medium  = () => <Input size ='medium' placeholder='Medium Size'/>
export const Large  = () => <Input size ='large' placeholder='Bada Size'/>


