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
        var items = [];
        var keys = Object.values(db.getSRDSectionKeys(object[section]));

        for (var key in keys) {
            var piece = keys[key];
            var whatAmI = object[section][piece];
            if (whatAmI == undefined) {
                console.log('undefined');
            } else {
                items.push(object[section][piece]);
                console.log(items.toString());
            }
        }

        var intro = (
            <div>
                {items[0].toString()}
                <p/>
            </div>
        );

        var content = items.map((key) =>
            <div>
                {key.content}
                <p/>
            </div>);

        return (
            <div>
                <div>
                    {intro}
                </div>
                <div>
                    {content}
                </div>
            </div>
        );
    }

    //.replace(/(&quot;)/g, "\"").replace(/(&#39;)/g, "'").replace(/(&amp;)/g, "&")

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