import React, { Component } from "react"
import StoreList from './components/store/StoreList'
import CandyList from './components/candy/CandyList'
import EmployeeList from './components/employee/EmployeeList'

export default class KandyKorner extends Component {

storeLocationsAPI = [
    { id: 1, name: "Texas" },
    { id: 2, name: "Floria" },
    { id: 3, name: "North Carolina" },
    { id: 4, name: "Georgia" }
]

employeeNamesAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]

candyTypesAPI = [
    { id: 1, name: "Chocolate" },
    { id: 2, name: "Chewy" },
    { id: 3, name: "Vegetable" },
    { id: 4, name: "Sugar Free" }
]

individualCandiesAPI = [
    { id: 1, name: "KitKat" },
    { id: 2, name: "Jolly Rancher" },
    { id: 3, name: "Skittles" },
    { id: 4, name: "Sour Patch" }
]

state = {
    storeloc: this.storeLocationsAPI,
    employees: this.employeeNamesAPI,
    candyTypes: this.candyTypesAPI,
    candies: this.individualCandiesAPI
}

    render() {
        return (
            <article className="KandyKorner">
                <StoreList stores={this.state.storeloc}/>
                <CandyList candyTypes={this.state.candyTypes}/>
                <EmployeeList employees={this.state.employees}/>
            </article>
        );
    }
}

