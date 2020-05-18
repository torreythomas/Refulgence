import React, {Component } from 'react';
import Navbar from '../Nav/Navbar'
import CardList from './Card/Cardlist'
import SearchBox from './Searchbox'
import { data } from './data'
import ScrollBar from '../Scroll'
import HeroMessage from './HeroMessage'
import Footer from '../Footer/Footer'
import FeaturedWork from './FeaturedWork/FeaturedWork'
import "./Resources.css"

class Resources extends Component {
    constructor() {
        super() 
        this.state = {
            data: data,
            searchfield: ''
        }
    }

    onSearchChange = (event)  => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
    }

    

    render() {
        const { data, searchfield } = this.state;
        const filteredData = data.filter(data => {
            return data.name.toLowerCase().includes(searchfield.toLowerCase()) 
        })
    
        return(
            <div className="tc">
            <div className="resources-background-container">
            <Navbar />
            <HeroMessage/>
            </div>
            <div
            className="ma0 pa0"
            style={{backgroundColor:"#1a1a1a"}}>
            <SearchBox searchChange={this.onSearchChange}/>
            <ScrollBar>
            <CardList  data={filteredData}/>
            </ScrollBar>
            </div>
            <FeaturedWork/>
            <Footer />
        </div>
        
        )
    }
}


export default Resources;

