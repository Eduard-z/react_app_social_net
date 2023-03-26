import React from "react";
import styles from "./Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://ru.fishki.net/picsw/082013/26/post/silchel/024.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://mebellka.ru/wp-content/uploads/f/1/a/f1a2ffdb93dcb6c0e006d4f72cdab6e7.jpeg",
                followed: true,
                fullName: "Sasha",
                status: "boss",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://mebellka.ru/wp-content/uploads/f/4/b/f4b60ca3c06316acc2b0c72399bbe52f.jpeg",
                followed: false,
                fullName: "Andrew",
                status: "boss",
                location: {city: "Kiev", country: "Ukraine"}
            },
        ]);
    }

    return (<div>
        {props.users.map(user => <div key={user.id}>
            <span>
            <div>
                <img src={user.photoUrl} className={styles.userPhoto} alt="profile user"/>
            </div>
            <div>
                {user.followed
                    ? <button onClick={() => {
                        props.unfollow(user.id)
                    }}>Follow</button>
                    : <button onClick={() => {
                        props.follow(user.id)
                    }}>Unfollow</button>
                }
            </div>
            </span>
            <span>
            <span><div>{user.fullName}</div><div>{user.status}</div></span>
            <span><div>{user.location.country}</div><div>{user.location.city}</div></span>
            </span>
        </div>)}
    </div>);
};

export default Users;