import React from 'react';
import './TopHomePage.css';
import history from '../../history';

class TopHomePage extends React.Component {

    navigateHome=()=>{
        history.push({
            pathname:`/`,
            forceRefresh: true
          });
          history.go(0);
    }

    render() {
        return (
            <div className='head-bar-copy'>
                <div className='SPECTRUM'>SPECTR<span className= "text-style-1">U</span>M</div>
                <div className="Shape-46"> </div>
                <div class='HOME' onClick={this.navigateHome}>Home</div>
            </div>
        )
    }
}

export default TopHomePage;