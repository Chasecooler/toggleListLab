// import React from 'react'
// import Component from 'react'
import React, {Component } from 'react'
//import cats from cats.js

const List = (props) =>{
    return (<div>
        <ul>
        {props.animal.map(el => <li>
            <img src = {el.image}
            ></img>
            {el.name}
            </li>)}
        </ul>
            </div>
        }
    }

// class App extends React {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//     }
//     render() {
//         return (<div>
//             <ul>
//                 [props]
//             </ul>
//         </div>

//         )
//     }
// }

export default List 