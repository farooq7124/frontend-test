import React, {Component} from 'react';

import {getPizzas} from './services/pizzaService';

function getPizzaList() {
    return getPizzas()
        .then(function (response) {
            self.setState({pizzaList: response.pizzas,masterPizzaList: response.pizzas});
        });
}

function getFilteredData(pizzaList, ev) {
    return pizzaList.filter(function (item) {
        return item.toLowerCase().includes(ev.target.value);
    });
}

function sortAndReverse(list,order) {
    list.sort();
    !order ? list.reverse() : list;
    //self.state.ascDefault = !order;
    return list;
}

export class Filter extends Component {

    constructor() {
        super();
        this.state = {
            pizzaList: [],
            masterPizzaList : [],
            ascDefault: true
        };
    }

    componentDidMount() {
        self = this;
        global.setTimeout(
            function(){
                getPizzaList();

            },
            1000
        );
    }

    filterData(ev) {
        this.state.pizzaList = this.state.masterPizzaList;
        const updatedFilteredList = getFilteredData(this.state.pizzaList, ev);
        this.setState({pizzaList: sortAndReverse(getFilteredData(this.state.pizzaList, ev),this.state.ascDefault)});

    }

    sortData() {
        this.setState({pizzaList: sortAndReverse(this.state.pizzaList,this.state.ascDefault)});
        this.state.ascDefault = !this.state.ascDefault;
    }


    render() {

        const containerHeight = {height: '600px'};
        const bodyHeight = {height: '500px'};
        return (
            <div className="pizza-container">
                <input
                    type="text"
                    className="form-control"
                    onKeyUp={this.filterData.bind(this)}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.sortData.bind(this)}
                >
                    sort
                </button>
                <ul>
                    {
                        this.state.pizzaList.map(function(item, index) {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}
