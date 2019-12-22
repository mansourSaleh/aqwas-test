import React, { Component } from 'react'
import GoogleMapComponent from '../components/GoogleMapComponent'
import MyNav from '../components/Nav';

export class Suggest extends Component {
    render() {
        return (
            <div>
                <MyNav />
                <GoogleMapComponent restaurant={this.props.restaurant} />
            </div>
        )
    }
}

export default Suggest
