import React, { Component } from 'react';
import ExpForm from './add_edit_form/ExpForm';
import {connect} from 'react-redux';
import ExpItem from './PrintForm/ExpItem';
import { getexp, EditExp } from '../../actions'

class Exp extends Component {
  

componentDidMount() {
  this.props.getexp()
}
    render(
    ) { 
    const {toexps} = this.props

        return ( 
            <div>
              <ExpForm  />
              { 
                    toexps.map(toexp => <ExpItem  key={toexp._id} toexp={toexp}/>)
                }
            </div>
         );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Show:state.Show,
    toexps: state.toexps,

  }
}

 
export default connect(mapStateToProps, { getexp, EditExp })(Exp)
