//import logo from './logo.svg';
import React from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux'
import JobComponent from './components/Job.react';
import UserComponent from './components/User.react';
import UserComponentSM from './components/UserSM.react';
import {loadJobs, getUser} from './actions';
import 'bootstrap/dist/js/bootstrap.min.js';

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
      const {items, error, jobsEntities, userView, user, isFetching, userPersonalTrait} = this.props;

      return (
        <div className="container-fluid">
          {isFetching && (
              <div className="row p-4 justify-content-center">
                <div className="col-auto">
                  <div className="progress-app"><div></div><div></div>
                  </div>
                  <h4>Loading..</h4>
                </div>
              </div>
            ) }
          {error && (<div className="row p-4 justify-content-center" >
              <div className="col-auto">
              <div className="toast show" style={{autohide: "false"}} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <strong className="me-auto">Torre app error</strong>
                  <small>Status</small>
                  <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                  No response, you should try later.
                </div>
              </div>
                 </div>
            </div>)
            }
          <div className="row">

            <div className={userView ? "col-md-8 col-sm-12": "col-12"}>
                <div className="row">
                  {
                    items.map((x, index) => {
                      return (<div className={"col-12 job-data"} key={x}>
                        <JobComponent jobData={jobsEntities[x]} key={"job-"+x} showUserPerfil={this.showUserPerfil.bind(this)} />
                      </div>);
                    })
                  }
              </div>
            </div>
            {userView && (
                
                
                <div className="col-md-4  border-start">
                    <div className="d-sm-flex d-md-none">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col modal fade show" tabIndex="-1"  style={{display: "block"}} aria-hidden="true" >
                        <div className="modal-dialog">
                          <div className="modal-content">
                        
                            <div className="modal-body">
                            <UserComponentSM user={user} personalTrait={userPersonalTrait} />
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
                     <div className="d-none d-md-flex">
                     <UserComponent user={user} personalTrait={userPersonalTrait} />
                      </div>  
                    
                </div>
              
              )
              }
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
