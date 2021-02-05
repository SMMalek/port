import React, {Component} from 'react';
import * as PropTypes from 'prop-types';

class STab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const {label, onClick} = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }
        if (label === "na") {
            return <div className="middle">
            </div>
        } else {
            return (
                <li
                    className={className}
                    onClick={onClick}
                >
                    {label}
                </li>
            );
        }
    }
}

export default STab;