import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {dateDiffToday} from '../../common/helpers';

class JobComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }

    showUserPerfil(id){
      return (e) => {
          this.props.showUserPerfil(id);
      }
    }

    render(){
        
        const compesationIsVisible = this.props.jobData.compensation.visible;
        const deadlineIsDate = (this.props.jobData.deadline != null) ? true:false;
        const locationHasData = (this.props.jobData.locations.length > 0) ? true : false;
        return (<div className="job-component border border-1 rounded bg-light p-2 m-2">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-auto">
                        <img className="lazy job-organization-picture rounded-circle border border-success" src={this.props.jobData.organizations[0].picture} alt={this.props.jobData.organizations[0].name} title={this.props.jobData.organizations[0].name}></img>
                        </div>
                    <div className="col">
                        <div className="job-headline-status">
                            <span className="job-status p-1 rounded">{this.props.jobData.status}</span>
                             {deadlineIsDate &&  <span className="job-deadline"><strong> ending at </strong>{dateDiffToday(this.props.jobData.deadline).day} day(s) </span> }
                             
                             </div>  
                        <h5 className="job-headline-title mt-1 mb-1">{this.props.jobData.objective}</h5>
                        <div className="job-headline-subtitle mt-1 mb-1 row justify-content-start">
                            <div className="col-auto">
                                <span>{this.props.jobData.type}</span>
                            </div>
                            <div className="col-auto">
                             {locationHasData &&  <span><strong>in </strong> {this.props.jobData.locations[0]}</span> }
                            </div>
                            <div className="col-auto">
                            <h6 className="mt-1 mb-1"> (<i className="bi bi-building"></i> {this.props.jobData.organizations[0].name})</h6>
                                </div>
                        </div>
                        
                        {compesationIsVisible &&
                            <h5><span>{this.props.jobData.compensation.data.currency}</span> <span>{this.props.jobData.compensation.data.maxAmount}</span> <span>{this.props.jobData.compensation.data.periodicity}</span></h5>    
                        }
                        <div className="row">
                            <div className="col job-skill">
                            {
                                this.props.jobData.skills.map((skill,index) => {
                                    return (<span key={index} className="p-1 m-1 bg-dark text-white rounded"> {skill.name} </span>);
                                })
                            }
                            </div>
                        </div>
                        <div className="row mt-1 mb-1">
                            <div className="col job-team-title">
                                Team members
                            </div>
                        </div>
                        <div className="row mt-1 mb-1">
                            
                            {
                                this.props.jobData.members.map((member, index) => {
                                    if(member.picture != null){
                                        return (<div className="col-auto p-1m-1" onClick={this.showUserPerfil(member.username)}>
                                            <span  key={index} >
                                            <img className="lazy job-member-picture rounded-circle border border-success" src={member.picture} srcset={member.picture} alt={member.name} title={member.name}></img> 
                                            <span className="ml-1" >{member.name}</span>
                                         </span> </div>);
                                    }
                                })
                            }
                            
                            </div>
                    </div>
                </div>
            </div>
        </div>);
    }
};

export default JobComponent;