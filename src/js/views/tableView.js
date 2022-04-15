import View from "./View";

class TableView extends View {
    _parentElement = this._appElement.querySelector('.table');
    container = this._parentElement.parentElement;
    tableBody = this._parentElement.querySelector('tbody');
    tableRows = this.tableBody.querySelectorAll('tr');

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }

    addHandlerClick(handler) {
        this.tableBody.addEventListener('click', function(e) {
            const user = e.target.closest('tr');
            const isUser = user?.dataset.userId;
            if (!isUser) return;

            // console.log(user);
            handler(user);
        });
    }

    render(data) {
        this._data = data;
        const markup = this._generateMarkup(this._data);
        
        this.tableBody.insertAdjacentHTML('beforeend', markup);
    }

    _generateMarkup(data) {
        return data.map(userObject => {
            return `
                <tr class="table-row" data-user-id="${userObject.id}">
                    <td class="table-data">${userObject.name}</td>
                    <td class="table-data">${userObject.username}</td>
                    <td class="table-data">${userObject.email}</td>
                    <td class="table-data">${[userObject.address.street, userObject.address.suite, userObject.address.city, userObject.address.zipcode].join(', ')}</td>
                    <td class="table-data">${userObject.phone}</td>
                    <td class="table-data">${userObject.website}</td>
                    <td class="table-data">${userObject.company.name}</td>
                </tr>
            `;
        }).join('');
    }
}

export default new TableView();