import React from 'react';
import './App.css';
import firebase from './firebase';
import UserInput from './UserInput';

function App() {
  const [users, setUsers] = React.useState([]);
  const [newUserEmail, setnewUserEmail] = React.useState();
  const db = firebase.firestore();


   
    const fetchData = async() =>
    {
      const data = await db.collection("test").get();
      setUsers(data.docs.map(doc => ({ ...doc.data(), id:doc.id})));
    }
    
    React.useEffect(() =>
    {
      fetchData();
      
      db.collection("test")
      .onSnapshot(function(querySnapshot) 
      {
        querySnapshot.forEach(function(doc) 
        {
          fetchData();
        });
      });
    }, [])

    const onCreate = () =>
    {
      const db = firebase.firestore();
      db.collection("test").add({email: newUserEmail})
      .then(res=>
        {
          fetchData();
        });
    }

    //console.log(users);

    return(
      <ul>
        <input value={newUserEmail} onChange={(e) => setnewUserEmail(e.target.value)}/>
        <button onClick={onCreate}>Add</button>
        {users.map(user => (
          <li key={user.email+Math.random()}>
            <UserInput user={user} fetchData = {fetchData}/>
          </li>
        ))}
      </ul>
    );
}

export default App;
