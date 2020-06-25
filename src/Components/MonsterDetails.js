import React from 'react'


const MonsterDetails = (props) => {
    console.log('monster details created')
    return(
    <div>This pokemon is {props.monster.name}</div>)
}


export default MonsterDetails 