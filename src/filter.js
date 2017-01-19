import React, {Component} from 'react';

import {getPizzas} from './services/pizzaService';

function getPizzaList() {
    return getPizzas()
        .then(function (response) {
            self.setState({pizzaList: response.pizzas,masterPizzaList: response.pizzas, pageLoading: !(response.pizzas.length)});
        });
}

function filterListData(pizzaList, event) {
    return pizzaList.filter(function (element) {
       return element.indexOf(event.target.value) > -1;
    });
}

function sortAndReverse(list,order) {
    list.sort();
    !order ? list.reverse() : list;
    return list;
}

export class Filter extends Component {

    constructor() {
        super();
        this.state = {
            pizzaList: [],
            masterPizzaList : [],
            ascDefault: true,
            pageLoading: true
        };
    }

    componentDidMount() {
        self = this;
        getPizzaList();
    }

    filterData(event) {
        this.state.pizzaList = this.state.masterPizzaList;
        const updatedFilteredList = filterListData(this.state.pizzaList, event);
        this.setState({pizzaList: updatedFilteredList});
    }

    sortData() {
        this.setState({pizzaList: sortAndReverse(this.state.pizzaList,this.state.ascDefault)});
        this.state.ascDefault = !this.state.ascDefault;
    }


    render() {

        const pageLoading = this.state.pageLoading;
        const bodyHeight = {height: '500px'};
        return (
            <div className="pizza-container">
            {
                pageLoading ?
                        <h3>Loading</h3> :
                        <div>
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
            }
            </div>

        );
    }
}
