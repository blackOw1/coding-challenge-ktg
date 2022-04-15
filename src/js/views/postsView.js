import View from "./View";

class PostsView extends View {
    _parentElement = this._appElement.querySelector('.posts');
    container = this._parentElement.querySelector('.posts-container');

    render(data) {
        // Clears the container where the posts are hosted
        this._clear(this.container.className);

        this._data = data;

        const markup = this._generateMarkup(this._data);
        this.container.insertAdjacentHTML('beforeend', markup);
    }

    _generateMarkup(data) {
        return data.map(userPost => {
            return `
                <div class="post">
                    <h3 class="post-title">${userPost.title}</h3>
                    <p class="post-message">${userPost.body}</p>
                </div>
            `;
        }).join('');
    }
}

export default new PostsView();