import React, {Component} from 'react';

import classes from './skillsCard.module.css';

class SkillsCard extends Component {
    render() {
        console.log(this.props);
        let logos = <p>Yet there is nothing to show :(</p>;
        let title = null;
        logos = Object.keys(this.props).map((logo, index) => {
            if(index != 0) {
            return <div><img src={this.props[logo].file.replace(/"/g, '')}/><p style={{marginTop: "0"}}>{this.props[logo].label}</p></div>
            } else {
                title = this.props.title;
            }
        });
        return (
            <div className={classes.techCard}>
                <h2>{title}</h2>
                <hr></hr>
                <div className={classes.skillImages}>
                    {logos}
                    {/* <div><img src={htmlLogo}/><p style={{marginTop: "0"}}>HTML5</p></div>
                    <div><img src={reactLogo}/><p style={{marginTop: "0"}}>JSX</p></div>
                    <div><img src={reactLogo}/><p style={{marginTop: "0"}}>JSX</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                                          */}
                </div>
            </div>
        );
    }
}

export default SkillsCard;