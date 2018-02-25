import React, {Component} from 'react';
import '../../../Stylesheets/Pages/SRDHomePage.css'

class SRDHomePage extends Component {
    render() {
        return (
            <div>
                <div id="HomePageTitle">SRD 5.1 Update</div>
                <div id="HomePageBody">
                    <p>In response to feedback from the D&amp;D community, we've updated the 5th edition SRD. Here's a
                        summary of the changes:</p>
                    <ul>
                        <li>
                            Various key spells used by classes, magic items, and monsters have been added to the spells
                            section. For example, the <em>eldritch blast</em> cantrip is essential for many warlock
                            abilities, and is now part of the SRD.
                        </li>
                        <li>
                            References to any archetypes (and similar choice-based class features like cleric domains)
                            that aren’t in the SRD (like wild magic for sorcerers) have been removed from the text to
                            avoid confusion.
                        </li>
                        <li>
                            References to “chapters” are gone, as the SRD isn't organized by chapters.
                        </li>
                        <li>
                            Bookmarks have been added for the most important and frequently-referenced topics.
                        </li>
                        <li>
                            A few text corrections have been made (such as a few references to "DM" instead of "GM,"
                            some typographical errors from importing the text from its original source, and
                            incorporating errata from the <em>Player's Handbook</em>, <em>Dungeon Master's Guide</em>,
                            and <em>Monster Manual</em>).
                        </li>
                        <li>
                            All appendices have been moved to the end of the document. For example, the Conditions
                            appendix from the Player's Handbook used to appear in the middle of the SRD, but now it's at
                            the end. To avoid confusion between appendices taken from the Player's Handbook and the
                            Monster Manual, the appendices now have a PH- or MM- prefix as appropriate.
                        </li>
                        <li>
                            Rules for magic item attunement, activating items, and wearing and wielding items are now in
                            the SRD.
                        </li>
                    </ul>
                </div>
                <div id="HomePageTitle">SRD 5.1 FAQ</div>
                <div id="HomePageBody">
                    <p><strong>Why does the SRD only have one background and one feat? Why do the PC races not include
                        all of the subraces? </strong>The goal of the SRD is to allow users to create new content, not
                        to replicate the text of the whole <ins cite="mailto:Mearls,%20Mike"
                                                                datetime="2016-04-21T16:47">game</ins>. We encourage
                        players, DMs, and publishers to come up with their own backgrounds and feats.
                    </p>
                    <p><strong>Why is the SRD missing some spells, magic items, and monsters?</strong> In general, the
                        criteria for what went into the SRD is if it (1) was in the 3E SRD, (2) has an equivalent in 5th
                        edition D&amp;D, and (3) is vital to how a class, magic item, or monster works. For example, the
                        3E SRD has the <em>delay poison </em>spell, but in 5th edition that's handled by the <em>protection
                            from poison</em> spell, so <em>protection from poison</em> is in the SRD.</p>
                    <p><strong>Will more content be added to the SRD?</strong> The full 5th edition game and its
                        expansions are available for use via the DMs Guild. New material will be added to the SRD if it
                        is necessary to keep this document and its contents updated to the latest D&amp;D rules.</p>
                </div>
            </div>
        )
    }
}

export default SRDHomePage;