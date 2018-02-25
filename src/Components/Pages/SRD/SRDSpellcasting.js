import React, {Component} from 'react';
import DBController from '../../DBController.js';
import '../../../Stylesheets/Pages/SRDSpellcasting.css';

const db = new DBController();
var sectionObject = null;

class SRDSpellcasting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: null,
            content: null
        };
        this.GetSection = this.GetSection.bind(this);
        this.RenderSection = this.RenderSection.bind(this);
    }

    componentDidMount() {
        this.GetSection('spellcasting');
    }

    async GetSection(section) {
        sectionObject = await db.retrieveSRDSection(section);
        this.setState({intro: this.RenderSection(sectionObject, section)});
    }

    RenderSection(object, section) {
        console.log(object.valueOf());
        var sectionItems = Object(db.getSRDSectionKeys(object[section])).map((key) =>
            <div>
                {key.replace(/(&quot\;)/g, "\"")
                    .replace(/(&#39\;)/g, "\'")
                    .replace(/(&amp\;)/g, "\&")}
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
                <div id="SpellPageTitle">
                    Spellcasting
                </div>
                <div id="SpellPageIntro">
                    {this.state.intro}
                </div>
                <div id="SpellPageBody">
                    {this.state.content}
                </div>
            </div>
        )
    }

}

export default SRDSpellcasting;