import React,{useEffect,useState} from 'react'
import {axiosWithAuth} from '../../../util/axiosWithAuth'

const UsersList =() =>{
    let [users,setUsers]=useState();
    useEffect(() =>{
        axiosWithAuth()
        .get('/users/users')
        .then(res =>setUsers(res.data))
        .catch(err =>console.log(err))
    },[])
    return(
        <div>
           {users && users.map(user =>{
             return  <UserCard key={user.userid} user={user}/>
           })}
        </div>
    )
}
export default UsersList;

export const UserCard = (props) =>{
    let {user} = props
    return(
        Object.keys(user).map((userProp,i) =>{
            return <p key={i}>{`${userProp}: ${user[userProp]}`}</p>
       })
    )
}