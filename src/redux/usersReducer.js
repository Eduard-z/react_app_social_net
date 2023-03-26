const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        // {id: 1, photoUrl: "https://ru.fishki.net/picsw/082013/26/post/silchel/024.jpg", followed: false, fullName: "Dmitry", status: "boss", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, photoUrl: "https://mebellka.ru/wp-content/uploads/f/1/a/f1a2ffdb93dcb6c0e006d4f72cdab6e7.jpeg", followed: true, fullName: "Sasha", status: "boss", location: {city: "Moscow", country: "Russia"}},
        // {id: 3, photoUrl: "https://mebellka.ru/wp-content/uploads/f/4/b/f4b60ca3c06316acc2b0c72399bbe52f.jpeg", followed: false, fullName: "Andrew", status: "boss", location: {city: "Kiev", country: "Ukraine"}},
    ]
};

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};

export const followAction = (userId) => ({type: FOLLOW, userId});
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAction = (users) => ({type: SET_USERS, users});

export default usersReducer;