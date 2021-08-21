import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {dateDiffToday} from '../../common/helpers';

class UserComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { person } = this.props.user;
        return (
            <div className="border border-1 rounded bg-light p-2 m-2">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={person.pictureThumbnail} alt={person.name} title={person.name} ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {person.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {person.location.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {person.summaryOfBio}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                Interested in
                            </div>
                        </div>
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                               Professional Culture
                            </div>
                        </div>
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserComponent;