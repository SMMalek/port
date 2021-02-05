import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import STab from './STab';
import profile_photo from '../images/BBB.png'
import CSSTransition from "react-transition-group/CSSTransition";
import SwitchTransition from "react-transition-group/SwitchTransition";


class STabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({activeTab: tab});
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs">
                <div className="tab-list-wrapper">
                    <ol className="tab-list">
                        {children.map((child) => {
                            const {label} = child.props;

                            return (
                                <STab
                                    activeTab={activeTab}
                                    key={true}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            );
                        })}
                    </ol>
                </div>
                <div className="middle" key="transition-group-content">
                    <div className="profile_photo_hover"></div>
                    <div className="background_image_frame"/>
                    <CSSTransition in={true} appear={true} timeout={41} classNames="fade">
                        <img className="profile_photo" src={profile_photo}/>
                    </CSSTransition>
                    <div className="middle_text">
                        <h5>Shika</h5>
                        <h5>25 sana</h5>
                    </div>
                </div>
                <>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return (
                            <SwitchTransition mode={"out-in"}
                            key={true}>
                                <CSSTransition
                                    key={true}
                                    addEndListener={(node, done) => {
                                        node.addEventListener("transitionend", done, false);
                                    }}
                                    timeout={500}
                                    classNames="fade">
                                    <div className="tab-content">
                                        {child.props.children}
                                        {console.log("XXXX")}
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        )
                    })}
                </>
            </div>
        );
    }
}

export default STabs;