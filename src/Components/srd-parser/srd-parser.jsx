import React, {Component} from 'react';
import propTypes from 'prop-types';
import debounce from 'debounce';
import Leaf from './lib/leaf';
import SearchBar from './lib/search-bar';
import filterer from './lib/filterer';
import isEmpty from './lib/is-empty';
import lens from './lib/lens';
import noop from './lib/noop';

var h = React.createElement;

class SrdParser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.query || ''
        }
    }
    static propTypes = {
        data: PropTypes.any.isRequired,
        search: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.bool
        ]),
        searchOptions: PropTypes.shape({
            debounceTime: PropTypes.number
        }),
        onClick: PropTypes.func,
        validateQuery: PropTypes.func,
        isExpanded: PropTypes.func,
        filterOptions: PropTypes.shape({
            cacheResults: PropTypes.bool,
            ignoreCase: PropTypes.bool
        }),
        query: PropTypes.string,
        verboseShowOriginal: PropTypes.bool
    };

    static defaultProps = {
        data: null,
        search: SearchBar,
        searchOptions: {
            debounceTime: 0
        },
        className: '',
        id: 'json-' + Date.now(),
        onClick: noop,
        filterOptions: {
            cacheResults: true,
            ignoreCase: false
        },
        validateQuery: function (query) {
            return query.length >= 2;
        },
        isExpanded: function (keypath, value) {
            return false;
        },
        verboseShowOriginal: false
    };

    componentWillMount() {
        this.createFilterer(this.props.data, this.props.filterOptions);
    }

    componentWillReceiveProps(p){
        this.createFilterer(p.data, p.filterOptions);

        var isReceivingNewQuery = (
            typeof p.query === 'string' &&
            p.query !== this.state.query
        );

        if (isReceivingNewQuery) {
            this.setState({ query: p.query });
        }
    }

    shouldComponentUpdate(p, s) {
        return (
            p.query !== this.props.query ||
            s.query !== this.state.query ||
            p.data !== this.props.data ||
            p.onClick !== this.props.onClick
        );
    }

    createFilterer(data, options) {
        this.setState({ filterer: filterer(data, options) });
    }

    getOriginal(path) {
        return lens(this.props.data, path);
    }

    search(query) {
        this.setState({ query: query });
    }

    renderToolbar() {
        var search = this.props.search;

        if (search) {
            return h('div', {className: 'srd-parser-toolbar'},
                h(search, {
                    onChange: debounce(this.search, this.props.searchOptions.debounceTime),
                    data: this.props.data,
                    query: this.state.query
                })
            );
        }
    }

    render() {
        var p = this.props;
        var s = this.state;

        var isQueryValid = (
            s.query !== '' &&
            p.validateQuery(s.query)
        );

        var data = (
            isQueryValid ?
                s.filterer(s.query) :
                p.data
        );

        var isNotFound = (
            isQueryValid &&
            isEmpty(data)
        );

        return h('div', {className: 'srd-parser ' + p.className},
            this.renderToolbar(),
            (   isNotFound ?
                    h('div', {className: 'srd-parser-404'}, 'Nothing found') :
                    h(Leaf, {
                        data: data,
                        onClick: p.onClick,
                        id: p.id,
                        getOriginal: this.getOriginal,
                        query: (
                            isQueryValid ?
                                new RegExp(
                                    s.query,
                                    (p.filterOptions.ignoreCase ? 'i' : '')
                                ) :
                                null
                        ),
                        label: '',
                        root: true,
                        isExpanded: p.isExpanded,
                        interactiveLabel: p.interactiveLabel,
                        verboseShowOriginal: p.verboseShowOriginal
                    })
            )
        );
    }
}

export default SrdParser;