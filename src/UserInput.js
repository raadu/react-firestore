import React from 'react';
import firebase from './firebase';

const UserInput = ({user, fetchData}) =>
{
    const [email, setEmail] = React.useState(user.email);

    const onUpdate = () =>
    {
        const db = firebase.firestore();
        db.collection("test").doc(user.id).set({...user, email})
        .then(res=>
        {
            fetchData();
        });
    }

    const onDelete = () => 
    {
        const db = firebase.firestore();
        db.collection("test").doc(user.id).delete();
    }

    return (
        <div>
            <input value={email} onChange={e => {setEmail(e.target.value);}}/>
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default UserInput;
