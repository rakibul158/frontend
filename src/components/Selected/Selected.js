import React, { Component } from 'react';
import './Selected.scss'

class Selected extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: '',
            selectedCounty: '',
            selectedCity: '',
            countries: {
                France: ["Paris", "Marseille", "Lille", "Lyon"],
                Usa: ["New York", "San Francisco", "Austin", "Dallas"],
                Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"]
              }
        }
    }

    handleCountrySelect= (e) => {
        const { countries } = this.state;
        const countrySel = e.target.value;
        const citiesSel = countrySel !== "" ? countries[countrySel] : "";
        this.setState({
            selectedCounty: countrySel,
            cities: citiesSel,
            selectedCity: ''
        })
    }


    handleCitySelect = (e) => {
        const citiesSel = e.target.value;
        this.setState({
            selectedCity: citiesSel
        })
    }

    render() {
        const { countries,cities } = this.state;

        const countryList = Object.keys(countries).map(key => ({
            name: key
        }));

        return (
            <div className='SelectFilter'>
                <select onChange={this.handleCountrySelect} className='Country'>
                    <option>Select Country</option>
                    {
                        countryList.map((country,key) => (
                            <option key={key} value={country.name}>
                                {country.name}
                            </option>
                        ))
                    }
                </select>
                <select onChange={this.handleCitySelect} className='City'>
                    <option>Select City</option>
                    {
                        Object.values(cities).map((city, key) => (
                            <option key={key} value={city}>
                                {city}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }
}

export default Selected;