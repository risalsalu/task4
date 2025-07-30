import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'
import { useEffect } from 'react';

function App() {
 const dispatch =useDispatch();
 const { users, loading, error} = useSelector((state)=> state.users)

useEffect(()=>{
  dispatch(fetchUser())
},[dispatch])

  return (
    <>
    <h1>Users</h1>
{loading}
{error}
<ul>
  {users.map((user)=>(
    <li key={user.id}>{user.firstName} {user.lastName}</li>
  ))}
</ul>
    </>
  )
}

export default App
