import profileReducer, {addPostCreator, deletePost} from "./profileReducer";

let initialState = {
    postsData: [
        {id: 1, message: "How are you?", likesCount: "0"},
        {id: 2, message: "It's my first post", likesCount: "23"},
        {id: 3, message: "", likesCount: ""},
    ],
    newPostText: "it-kamasutra.com",
    profile: null
};


test("new post should be added", () => {
    // 1. test data
    let action = addPostCreator("it-kamasutra.com");
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expected result
    expect(newState.postsData.length).toBe(4);
    expect(newState.postsData[3].message).toBe("it-kamasutra.com");
});

test("length of messages should be decreased after deleting", () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(initialState, action);

    // 3. expected result
    expect(newState.postsData.length).toBe(3);
});