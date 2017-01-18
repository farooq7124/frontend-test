import 'isomorphic-fetch';

export function getPizzas() {
    return global.fetch('./../pizza.json')
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            return response;
        });
}
