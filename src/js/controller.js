import * as model from './model';
import tableView from './views/tableView';
import postsView from './views/postsView';

const contolUsers = async function() {
    try {
        // Load users
        await model.loadUsers();
    
        // Render users
        tableView.render(model.state.users);
    } catch(error) {
        // Render error
        tableView.renderError(error);
    }
};

const controlPosts = async function(user) {
    try {
        // Load posts
        await model.loadPosts(user.dataset.userId);
        const userPosts = model.loadUserPosts(user.dataset.userId);
    
        // Render user posts
        postsView.render(userPosts);
    
        // console.log(user);
    } catch(error) {
        postsView.renderError(error);
    }
};

(function() {
    console.log('** App developed by Gerardo Ortiz **');
    tableView.addHandlerRender(contolUsers);
    tableView.addHandlerClick(controlPosts);
})();