import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava.jpeg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersQuantity / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount / 1000; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(page => {
                return (<span className={props.currentPage === page && styles.selectedPage}
                              onClick={(e) => props.onPageChanged(page)}>
                        {page}</span>);
            })}
        </div>
        {props.users.map(user => <div key={user.id}>
        <span>
        <div>
            <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.large != null ? user.photos.large : userPhoto}
                 className={styles.userPhoto} alt="profile user"/>
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button onClick={() => {
                    props.clickUnfollow(user.id);
                }}>Unfollow</button>
                : <button onClick={() => {
                    props.clickFollow(user.id);
                }}>Follow</button>
            }
        </div>
        </span>
            <span>
        <span><div>{user.name}</div><div>{user.status}</div></span>
        <span><div>{"user.location.country"}</div><div>{"user.location.city"}</div></span>
        </span>
        </div>)}
    </div>);

};

export default Users;