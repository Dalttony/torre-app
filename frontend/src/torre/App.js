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
      const {items, jobsEntities, userView, user, isFetching, userPersonalTrait} = this.props;

      return (
        <div className="container-fluid">

          {isFetching && (
              <div className="row p-4 justify-content-center">
                <div className="col-auto">
                  <div className="progress-app">
                  </div>
                  <h4>Cargando..</h4>
                </div>
              </div>
            ) }
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
            {userView && <div className="col-4 border-start">
              <UserComponent user={user} personalTrait={userPersonalTrait} />
              </div>}
          </div>
         
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
  const { jobsEntities, items } = state.jobReducer;
  const { userView } = state.uiReducer;
  const { user, userPersonalTrait } = state.userReducer;
  const { isFetching, success, error, errorMessage, successMessage } = state.networkReducer;
  return {
    jobsEntities, 
    items, 
    userView, 
    user, 
    isFetching, 
    success, 
    error, 
    errorMessage, 
    successMessage,
    userPersonalTrait
  }
}

AppComponent.contextTypes = {
	store: PropTypes.object
};

AppComponent = connect(mapStateToProps)(AppComponent);


export default AppComponent;
