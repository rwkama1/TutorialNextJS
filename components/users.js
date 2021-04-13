import { Component } from "react";
import  Router  from "next/router";
//El componente router nos permite redireccionar a un componente dinamico
//En este caso a user/[id] tomando en cuenta el id podemos obtener
//el usuario seleccionado de la lista y en [id].js obtenerlo y mostrarlo

export default class Users extends Component
{
    onClickli=(id)=>
    {
        Router.push("/user/[id]","/user/"+id)
        //redirecciono a mi ruta dinamica en este caso [id].js
    }
    render()
    {
        return (
            <ul className="list-group">
            {this.props.users.map
            (
              user=>
              (
                  <li className="list-group-item list-group-item-action 
                  d-flex justify-content-between align-items-center"
                   key={user.id}
                   onClick={()=>this.onClickli(user.id)}>
                      <div>
                      <h5>
                          {user.first_name} {user.last_name}
                      </h5>
                      <p>
                          Email: {user.email}
                      </p>
                      </div>
                      <img src={user.avatar} alt="Avatar"
                      style={{borderRadius:"50%"}}/>
                   
                  </li>
              )
            )
            }
            </ul>
       )
        }
    
}