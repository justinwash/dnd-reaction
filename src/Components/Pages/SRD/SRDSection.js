import React, {Component} from 'react';
import DBController from '../../DBController.js';
import '../../../Stylesheets/Pages/SRDSection.css';

const db = new DBController();

class SRDSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
        this.getSection = this.getSection.bind(this);
        this.renderSection = this.renderSection.bind(this);
    }

    componentDidMount() {
        this.getSection(this.props.section);
    }

    async getSection(section) {
        var sectionObject = await db.retrieveSRDSection(section);
        this.setState({content: this.renderSection(sectionObject, section)});
    }

    renderSection(object, section) {
        return (
            <div>
                {db.getAllSectionContent(object[section])}
            </div>
        );
    }

    render() {
        return (
            <div id="SRDPageBody">
                {this.state.content}
            </div>
        )
    }

}

export default SRDSection;