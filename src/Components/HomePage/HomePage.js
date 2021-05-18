import React from 'react';
import TopHomePage from '../TopHomePage/TopHomePage';
import BottomHomePage from '../BottomHomePage/BottomHomePage';
import './HomePage.css';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div><TopHomePage /></div>
                <div><BottomHomePage /></div>
            </div>
        )
    }
}

export default HomePage;