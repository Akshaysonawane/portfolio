import React, { Component } from 'react';

import SkillsCard from './skillsCard/skillsCard';
import classes from './skills.module.css';

import reactLogo from '../../assets/images/skills_images/react_logo.png';
import htmlLogo from '../../assets/images/skills_images/html_logo.png';
import cssLogo from '../../assets/images/skills_images/css_logo.png';
import sassLogo from '../../assets/images/skills_images/sass_logo.png';
import bootstrapLogo from '../../assets/images/skills_images/bootstrap_logo.png';
import javascriptLogo from '../../assets/images/skills_images/javascript_logo.png';
import nodejsLogo from '../../assets/images/skills_images/nodejs_logo.png';
import mysqlLogo from '../../assets/images/skills_images/mysql_logo.png';
import phpLogo from '../../assets/images/skills_images/php_logo.png';
import githubLogo from '../../assets/images/skills_images/github_logo.png';
import jiraLogo from '../../assets/images/skills_images/jira_logo.png';
import pythonLogo from '../../assets/images/skills_images/python_logo.png';
import djangoLogo from '../../assets/images/skills_images/django_logo.png';
import laravelLogo from '../../assets/images/skills_images/laravel_logo.png';

class Skills extends Component {
    render() {
        return (
            <div>
                <SkillsCard 
                    title="HTML"
                    logo1={{file: htmlLogo, label: "HTML5"}}
                    logo2={{file: reactLogo, label: "JSX"}}
                ></SkillsCard>
                <SkillsCard 
                    title="CSS"
                    logo1={{file: cssLogo, label: "CSS3"}}
                    logo2={{file: sassLogo, label: "SASS"}}
                    logo3={{file: bootstrapLogo, label: "Bootstrap"}}
                ></SkillsCard>
                <SkillsCard
                    title="JavaScript"
                    logo1={{file: reactLogo, label: "React"}}
                    logo2={{file: javascriptLogo, label: "Javascript"}}
                    logo3={{file: nodejsLogo, label: "Node"}}
                ></SkillsCard>
                <SkillsCard 
                    title="Back-End"
                    logo1={{file: mysqlLogo, label: "mySQL"}}
                    logo2={{file: phpLogo, label: "PHP"}}
                    logo3={{file: laravelLogo, label: "Laravel"}}
                    logo4={{file: pythonLogo, label: "Python"}}
                    logo5={{file: djangoLogo, label: "Django"}}
                ></SkillsCard>
                <SkillsCard 
                    title="Other"
                    logo1={{file: githubLogo, label: "Github"}}
                    logo2={{file: jiraLogo, label: "Jira"}}
                ></SkillsCard>
            </div>
        );
    }
}

export default Skills;