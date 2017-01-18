## Introduction

In order to successfully complete this exam, you will need to have node v4 or greater installed on your machine.

* Install project dependencies: `npm i`
* To start the application: `npm start`
* To run the tests: `npm test`

These are the only commands you should have to worry about. Running `npm start` will start a local webserver and you can access the page from [http://localhost:8080](http://localhost:8080)

Once you are finished with the exam, please delete the node_modules directory, zip the folder, and email it to the exam coordinator.

## Expectations

We expect that you will complete this test in an honest fashion. You should not copy and paste code from stack overflow or blogs in order to complete it. Successful completion will include an implementation for each of the following requirements. Extra credit will be given for tests (which use mocha and enzyme), refactoring, and styles.

## Requirements

### Scenario

* Given a list of pizzas available at '/pizza.json'
* When the server returns a response
* Then the list of pizzas should be shown
* And a filter input is shown
* And a sort button is shown

### Scenario

* Given the user has loaded the page
* When the page waits for data to load
* Then the text "Loading" should be shown
* And no other elements should be shown

### Scenario

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then only the pizzas that include the filter text should be shown

### Scenario

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then the list of pizzas should be filtered in a case insensitive way

### Scenario

* Given the page is shown with a list of pizzas
* When the user clicks the sort button
* Then the list of pizzas will be sorted in reverse alphabetic order

### Scenario

* Given the user has entered text into the filter input
* When the user clicks the sort button
* The the sorted list of pizzas should also be filtered according to the input
