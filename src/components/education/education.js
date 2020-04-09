import React from 'react';
import EducationCard from './educationCard/educationCard';
import * as styles from './education.module.css';

const education = () => {
    return (
        <div className={styles.educationCardDiv}>
            <EducationCard 
                collegeName="D. Y. Patil college of engineering"
                course="BE(IT)"
                yearOfPassing="2016"
                percentage="70.05%"
            ></EducationCard>
            <EducationCard 
                collegeName="Jawahar Navodaya Vidyalaya, Jalgaon"
                course="XII - CBSE"
                yearOfPassing="2012"
                percentage="70.80%"
            ></EducationCard>
            <EducationCard 
                collegeName="Jawahar Navodaya Vidyalaya, Jalgaon"
                course="X - CBSE"
                yearOfPassing="2010"
                percentage="83.00%"
            ></EducationCard>
        </div>
    );
}

export default education;