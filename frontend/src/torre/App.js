//import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux'
import JobComponent from './components/Job.react';
import UserComponent from './components/User.react';
import {loadJobs, getUser} from './actions';
import { ReactReduxContext } from 'react-redux'

class AppComponent extends React.Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      const { dispatch } = this.props;
			dispatch(loadJobs());
    }

    showUserPerfil(username){
      
      const { dispatch } = this.props;
      dispatch(getUser(username));
    }
    render(){
      const {items, jobsEntities, userView, user} = this.props;

      return (
        <div className="container-fluid">
          <div className="row">
            <div className={userView ? "col-8": "col-12"}>
            <div className="row">
              {
                items.map((x, index) => {
                  return (<div className={"col-12"} key={x}>
                    <JobComponent jobData={jobsEntities[x]} showUserPerfil={this.showUserPerfil.bind(this)} />
                  </div>);
                })
              }
          </div>
            </div>
            {userView && <div className="col-4">
              <UserComponent user={user} />
              </div>}
          </div>
         
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const { jobsEntities, items } = state.jobReducer;
  const { userView } = state.uiReducer;
  const { user } = state.userReducer;
  return {
    jobsEntities, items, userView, user
  }
}

AppComponent.contextTypes = {
	store: PropTypes.object
};

AppComponent = connect(mapStateToProps)(AppComponent);


export default AppComponent;
