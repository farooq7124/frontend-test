import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {Filter} from '../src/filter';

describe('<Filter /> Component', () => {
    let renderedFilter, testProps;

    beforeEach(() => {
        testProps = {
            pizza: ["Sausage",
                "Cheese",
                "Pepperoni",
                "Hawaiian",
                "vegetable",
                "3 cheeSe",
                "macaroni",
                "Chicken",
                "Sausage and Pepperoni"],
            pageLoading: false
        };
        renderedFilter = shallow(<Filter {...testProps.pizza}/>);
    });

    it('should have panel', () => {
        expect(renderedFilter.props().className).to.equal('pizza-container');
    });

    it('should set pizza list', function () {
        renderedFilter.setState({pizzaList: testProps.pizza});
        expect(renderedFilter.state('pizzaList')).to.equal(testProps.pizza);
    });

    it('should have pizza list', function () {
        renderedFilter.setState({pizzaList: testProps.pizza,pageLoading: false});
        expect(renderedFilter.props().children.props.children[2].props.children[0].props.children).to.equal(testProps.pizza[0]);
    });


    describe('form elements',function () {

        let formElement;

        beforeEach(function () {
            renderedFilter.setState({pageLoading: false});
            formElement = renderedFilter.props().children.props.children;
        });

        describe('fiter list', function () {
            let filterElement;

            beforeEach(function () {
                filterElement = formElement[0];
            });

            it('should have textbox', function () {
                expect(filterElement.type).to.equal('input');
            });

            it('should filter list', function () {
                const filteredList  = ['Sausage and Pepperoni'];
                renderedFilter.setState({masterPizzaList: testProps.pizza});
                filterElement.props.onKeyUp({target: {value: 'and'}});
                expect(renderedFilter.state('pizzaList')).to.equal(filteredList);

            });
        });

        describe('sort list', function () {
            let sortElement;

            beforeEach(function () {
                sortElement = formElement[1];
            });

            it('should button', function () {
                expect(sortElement.type).to.equal('button');
            });

            it('should sort list', function () {
                const sortedList = ["3 cheeSe",
                    "Cheese",
                    "Chicken",
                    "Hawaiian",
                    "Pepperoni",
                    "Sausage",
                    "Sausage and Pepperoni",
                    "macaroni",
                    "vegetable"];
                renderedFilter.setState({pizzaList: testProps.pizza});
                sortElement.props.onClick();
                expect(renderedFilter.state('pizzaList')).to.equal(sortedList);
            });
        });

    });


});
