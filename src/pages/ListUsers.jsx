import React, { useState, useEffect} from 'react'

const ListUsers = () => {
  const [listUsers, setListUsers] = useState([])

    useEffect(()=>{
        const getUsersList = async()=>{
            const resp = await fetch('https://randomuser.me/api/?results=20');
            const result = await resp.json()
            const data = result.results;
            console.log(data)
            setListUsers(data)
        }   
        getUsersList()
    }, [])


    return (
        <div className="container">
            <div className='row'>
                <div className="col">
                    <ul className="list-group">
                        {
                            listUsers.map(( user )=>{
                                return (
                                    <li key={user.email} className="list-group-item">
                                        { user.name.title }  {user.name.first}  { user.name.last }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListUsers