import React from 'react';
import './Dashboard.css';

import Section from '../section/Section'

class Dashbaord extends React.Component {
    render() {
        return <div className="Dashboard">
                    Dashboard Div
                    <Section className="Section"></Section>
                </div>;
    }
}

export default Dashbaord;