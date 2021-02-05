import React from "react";
import STabs from "./Components/STabs";
import CSSTransition from "react-transition-group/CSSTransition";
import listlogo from './images/templogo.png'


function App() {

    const sectionStylebot = {
        backgroundImage: "url(" + require('./images/wave-bot.png') + ")"
    };
    const sectionStylemid = {
        backgroundImage: "url(" + require('./images/wave-mid.png') + ")"
    };
    const sectionStyletop = {
        backgroundImage: "url(" + require('./images/wave-top.png') + ")"
    };
    const about_text ="University of Debrecen Computer Science Engineering graduate "
    return (
        <>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={sectionStyletop}/>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={sectionStylemid}/>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={sectionStylebot}/>
                </div>
            </div>
            <STabs>
                <div label="Overview">
                        <div className="first_tab_wrapper">
                            <div className="content_about">
                                <div className="content_about_title">
                                    About Me
                                </div>
                                <div className="content_about_paragraph">
                                    {about_text}
                                </div>
                            </div>
                            <div className="content_about_skills">
                                <div className="content_about_skills_title">
                                    Skills
                                </div>
                                <div className="content_about_skills_list">
                                    <div className="content_about_skills_list_item">
                                        <img className="content_about_skills_list_item_logo" src={listlogo}/>
                                        <div className="content_about_skills_list_item_head">
                                            CEO
                                        </div>
                                        <div className="content_about_skills_list_item_text">
                                            Working as a ceo of a company, with no restrictions
                                        </div>
                                    </div>
                                    <div className="content_about_skills_list_item">
                                        <img className="content_about_skills_list_item_logo" src={listlogo}/>
                                        <div className="content_about_skills_list_item_head">
                                            CEO
                                        </div>
                                        <div className="content_about_skills_list_item_text">
                                            Working as a ceo of a company, with no restrictions
                                        </div>
                                    </div>
                                    <div className="content_about_skills_list_item">
                                        <img className="content_about_skills_list_item_logo" src={listlogo}/>
                                        <div className="content_about_skills_list_item_head">
                                            CEO
                                        </div>
                                        <div className="content_about_skills_list_item_text">
                                            Working as a ceo of a company, with no restrictions
                                        </div>
                                    </div>
                                    <div className="content_about_skills_list_item">
                                        <img className="content_about_skills_list_item_logo" src={listlogo}/>

                                        <div className="content_about_skills_list_item_head">
                                            CEO
                                        </div>
                                        <div className="content_about_skills_list_item_text">
                                            Working as a ceo of a company, with no restrictions
                                        </div>
                                    </div>
                                    <div className="content_about_skills_list_item">
                                        <img className="content_about_skills_list_item_logo" src={listlogo}/>

                                        <div className="content_about_skills_list_item_head">
                                            CEO
                                        </div>
                                        <div className="content_about_skills_list_item_text">
                                            Working as a ceo of a company, with no restrictions
                                        </div>
                                    </div>
                                    <div className="content_about_skills_list_item">
                                        <img className="content_about_skills_list_item_logo" src={listlogo}/>

                                        <div className="content_about_skills_list_item_head">
                                            CEO
                                        </div>
                                        <div className="content_about_skills_list_item_text">
                                            Working as a ceo of a company, with no restrictions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div label="Education">
                    <CSSTransition in={true} appear={true} timeout={600} classNames="fade">
                        <h2>
                            See ya lateraaa, <em>Alligator</em>!
                        </h2>
                    </CSSTransition>
                </div>
                <div label="Work">
                    <CSSTransition in={true} appear={true} timeout={600} classNames="fade">
                        <h2>
                            SSSSee ya lateraaa, <em>Alligator</em>!
                        </h2>
                    </CSSTransition>
                </div>
            </STabs>
        </>

    )
}

export default App

/*
            <STabs>
                <div label="Gator">
                    <CSSTransition in={true} appear={true} timeout={300} classNames={"fade"}>
                        <h2>
                            See ya later, <em>Alligator</em>!
                        </h2>
                    </CSSTransition>
                </div>
                <div label="Croc">
                    <CSSTransition in={true} appear={true} timeout={300} classNames={"fade"}>
                        <div>
                            After 'while, <em>Crocodile</em>!
                        </div>
                    </CSSTransition>
                </div>
                <div label="Sarcosuchus">
                    <CSSTransition in={true} appear={true} timeout={300} classNames={"fade"}>
                        <h1>Nothing to see here, this tab is <em>extinct</em>!
                        </h1>
                    </CSSTransition>
                </div>
            </STabs>


-----------------------------------------
<Tabs>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div className="wave waveTop" style={sectionStyletop}/>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div className="wave waveMiddle" style={sectionStylemid}/>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div className="wave waveBottom" style={sectionStylebot}/>
                </div>
            </div>

            <TabList>

                <Tab>Overview</Tab>
                <Tab>Education</Tab>
                <Tab>Passion</Tab>
            </TabList>
            <div className="middle" key="transition-group-content">
                <img className="background_image_frame" src={background_image_frame} alt="logo"/>
                <img className="profile_photo" src={profile_photo} alt="logo"/>
                <div className="shadow" ></div>
                <div className="middle_text">
                    <h5>Shika</h5>
                    <h5>25 sana</h5>
                </div>
            </div>



            <TabPanel>
                <div className="shadow-panel" ></div>
                <h1>Sherif Mohey</h1>
                <h2>Junior Software developer and web developer</h2>
                <h3>I live in budapest near the tram</h3>
                <h4>I have four eggs for breakfast</h4>
                <h4>I have four eggs for breakfast</h4>
                <h4>I have four eggs for breakfast</h4>
                <h4>I have four eggs for breakfast</h4>
            </TabPanel>
                <TabPanel>
                <div className="shadow-panel" ></div>
                <h2>University Of Debrecen grade</h2>
                <h3>High Performance Computing Was my thesis</h3>
            </TabPanel>
            <TabPanel>
                <div className="shadow-panel" ></div>

                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>

-------------
 const [ordered, setOrdered] = useState(false);

    function displayConfirmation() {
        setOrdered(true);

        setTimeout(() => {
            setOrdered(false);
        }, 6000)
    }

    return (
        <Container>
            {ordered && <Confirmation toggle={setOrdered}/>}
            <Row>
                {pizzas.map(data => (
                    <Col xs={3} className="mb-5" key={'${data.id'}>
                        <PizzaCard data={data} setOrdered={displayConfirmation}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
* */