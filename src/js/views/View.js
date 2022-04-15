export default class View {
    _appElement = document.getElementById('app');

    _clear(selector) {
        if (selector === 'table-container') {
            this.container.innerHTML = '';
            return;
        }

        this._parentElement.querySelector(`.${selector}`).innerHTML = '';
    }
    
    update() {}

    renderError(errorMessage) {
        // Clear contents
        this._clear(this.container.className);

        // Render message
        this.container.insertAdjacentHTML('afterbegin', `<p>${errorMessage}</p>`);
    }

    // renderMessage() {}
}