import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {dateDiffToday} from '../../common/helpers';
import PersonalTraitComponent from './PersonalTraits.react';

class UserComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { person, interests} = this.props.user;
        const { personalTrait } = this.props;
        const imageStyle = {
            backgroundImage: 'url(' + person.picture +')'
        }
        return (
            <div className="p-2 m-2">
                <div className="row p-2 bg-light border border-1 rounded">
                    <div className="col">
                        <div  className="row cover-page  justify-content-center position-relative"  >
                            <div className="col-auto">
                                <img className="lazy rounded-circle" src={person.pictureThumbnail} alt={person.name} title={person.name} ></img>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-white">
                    <div className="col">
                       <span>
                           <h4 className="user-name">{person.name}</h4>
                           <span>({person.location.name})</span>
                           </span>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <span className="user-summary-bio">{person.professionalHeadline}</span>
                    </div>
                </div>
                <div className="row border-top rounded">
                    <div className="col pt-2">
                         {person.summaryOfBio}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                               <strong> Interested in </strong>
                            </div>
                        </div>
                        <div className="row">
                            {
                                interests.map((interest) => {
                                    return <div className="col p-2 m-1 bg-light">{interest.name}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                            <strong>Personal Traits </strong>
                            </div>
                        </div>
                        <div className="row">
                            <PersonalTraitComponent personalTrait={personalTrait} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserComponent;