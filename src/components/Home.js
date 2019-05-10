import React, { Component } from 'react'
import About from './About';
import Skills from './Skills';
import Blog from './Blog';
import Contact from './Contact';


class Home extends Component {
   
    render() {

        return (
           <div>
            <About changeTab={this.props.changeTab1}
                //  dataExp={this.state.data && this.state.data.experience}
                //  dataEdu={this.state.data && this.state.data.education}
            />
            <Skills changeTab={this.props.changeTab2}
            // dataDesign={this.state.data && this.state.data.design}
            // dataCoding={this.state.data && this.state.data.coding}
            />
            <Blog changeTab={this.props.changeTab3}
                // dataBlog={this.state.data && this.state.data.infomation}
            />
            <Contact changeTab={this.props.changeTab4} 
                // dataContact={this.state.data && this.state.data.contact}
            />
           </div>
        )

    }
}

export default Home
