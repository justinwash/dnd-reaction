import React, {Component} from 'react';
import DBController from '../../DBController.js';
import '../../../Stylesheets/Pages/SRDLegal.css';

const db = new DBController();
var sectionObject = null;

class SRDLegal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
        this.GetSection = this.GetSection.bind(this);
        this.RenderSection = this.RenderSection.bind(this);
    }

    componentDidMount() {
        this.GetSection('legal info');
    }

    async GetSection(section) {
        sectionObject = await db.retrieveSRDSection(section);
        this.setState({content: this.RenderSection(sectionObject, section)});
    }

    RenderSection(object, section) {
        var contentKey = object[section].content;
        var sectionItems = Object(contentKey).map((content) =>
            <div>
                {content.replace(/(&quot;)/g, "\"")
                    .replace(/(&#39;)/g, "'")
                    .replace(/(&amp;)/g, "&")}
                <p/>
            </div>


        );
        console.log(sectionItems.valueOf());
        return (
            <div>
                {sectionItems}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div id="Title">
                    Legal Information
                </div>
                <div id="PageBody">
                    {this.state.content}
                </div>
            </div>
        )
    }

}

export default SRDLegal;