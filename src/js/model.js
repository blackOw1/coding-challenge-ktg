import { fetchData } from "./helpers";

export const state = {};

export const loadUsers = async function() {
    try {
        const data = await fetchData('/users');
        // console.log(data);

        state.users = data;
    } catch(error) {
        throw error;
    }
};

export const loadPosts = async function() {
    try {
        const data = await fetchData('/posts');

        state.posts = data;
    } catch(error) {
        throw error;
    }
};

export const loadUserPosts = function(userId) {
    return state.posts.filter(userPost => userPost.userId === +userId);
};