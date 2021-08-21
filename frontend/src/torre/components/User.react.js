import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {dateDiffToday} from '../../common/helpers';

class UserComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={this.props.pictureThumbnail} alt={this.props.name} title={this.props.name} ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.location.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.summaryOfBio}
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