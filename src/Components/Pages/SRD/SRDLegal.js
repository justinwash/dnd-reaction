import React, {Component} from 'react';
import DBController from '../../DBController.js';

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
        this.GetSection('legal');
    }

    async GetSection(section) {
        sectionObject = await db.retrieveSRDSection(section);
        this.setState({content: this.RenderSection(sectionObject, section)});
    }

    RenderSection(object, section) {
        var contentKey = object[section].content;
        var sectionItems = Object(contentKey).map((key) =>
            <p>
                <div>
                    {key.replace(/(&quot\;)/g, "\"")
                        .replace(/(&#39\;)/g, "\'")
                        .replace(/(&amp\;)/g, "\&")}
                </div>
            </p>
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
                LEGAL MUMBO JUMBO
                <p>
                    {this.state.content}
                </p>
            </div>
        )
    }

}

export default SRDLegal;