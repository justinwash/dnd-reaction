import React, {Component} from 'react';
import SearchBar from './lib/search-bar';
import noop from './lib/noop';

class SrdParser extends Component {
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
}