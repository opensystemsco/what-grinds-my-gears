import React from 'react'
//import { createAvatar } from '@dicebear/avatars';
//import * as style from '@dicebear/micah';

export default function Avatar({seed}) {

    // let svg = createAvatar(style, { seed: seed });

    return (
        <img alt='avatar' src={'https://avatars.dicebear.com/api/micah/'+seed+'.svg'} width='30' height='30' />
    )
}