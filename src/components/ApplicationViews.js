import { Route } from "react-router-dom";
import React, { Component } from "react";
import StoreList from "./store/StoreList";
import CandyList from "./candy/CandyList";
import EmployeeList from "./employee/EmployeeList";

export default class ApplicationViews extends Component {

  state = {
    storeloc: [],
    employees: [],
    candyTypes: [],
    candies:[]
  };

  componentDidMount() {
    const newState = {}

    fetch(" http://localhost:5003/storeLocationsAPI")
        .then(r => r.json())
        .then(storeloc => newState.storeloc = storeloc)
        .then(() => fetch("http://localhost:5003/employeeNamesAPI")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5003/candyTypesAPI")
        .then(r => r.json()))
        .then(candyTypes => newState.candyTypes = candyTypes)
        .then(() => fetch("http://localhost:5003/individualCandiesAPI")
        .then(r => r.json()))
        .then(candies => newState.candies = candies)
        .then(() => this.setState(newState))
}



  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
            return <StoreList stores={this.state.storeloc} />;
          }}/>
        <Route path="/candies" render={props => {
            return <CandyList candies={this.state.candies} candyTypes={this.state.candyTypes}/>;
          }}/>
        <Route path="/employees" render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}/>
      </React.Fragment>
    );
  }
}


//{
  /* <article className="KandyKorner">
                <StoreList stores={this.state.storeloc}/>
                <CandyList candyTypes={this.state.candyTypes}/>
                <EmployeeList employees={this.state.employees}/> */
//}
