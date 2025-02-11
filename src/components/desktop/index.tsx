import { useState } from 'react';
import GridLayout from 'react-grid-layout';
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import Folder from './folder';
import Icon from './icon';
import './index.css';
import Window from './window';

enum ContentType {
    AboutMe,
    Contact,
    Capstone,
    Ethylbenzene,
    Stackunderflow,
    Website
}


const Desktop = () => {
    const [ currentDisplay, setCurrentDisplay ] = useState<ContentType>(ContentType.AboutMe);
    const [ projectsFolder, setProjectsFolder ] = useState<boolean>(false);

    const closeFolder = () => {
        setProjectsFolder(false);
    }

    return (
        <div className='desktop'>
            <div className='sidebar'>
                <div className='nav-icons'>
                    <Icon
                        imgSrc='src/assets/icons/about-me.png'
                        title='About'
                        onClick={() => setCurrentDisplay(ContentType.AboutMe)}
                    />
                    <Icon
                        imgSrc='src/assets/icons/projects.png'
                        title='Projects'
                        onClick={() => {
                            if(projectsFolder) {
                                setProjectsFolder(false)
                            } else {
                                setProjectsFolder(true)
                            }
                        }}
                    />
                    <Icon
                        imgSrc='src/assets/icons/contact.png'
                        title='Contact'
                        onClick={() => setCurrentDisplay(ContentType.Contact)}
                    />
                </div>
                {projectsFolder && 
                    <Folder
                        id='projects-folder'
                        title='Projects'
                        onClick={closeFolder}
                    >
                        <Icon 
                            imgSrc='src/assets/icons/capstone.png'
                            title='Capstone Project'
                            onClick={() => setCurrentDisplay(ContentType.Capstone)}
                        />
                        <Icon 
                            imgSrc='src/assets/icons/stackunderflow.png'
                            title='Software Eng.'
                            onClick={() => setCurrentDisplay(ContentType.Stackunderflow)}
                        />
                        <Icon 
                            imgSrc='src/assets/icons/Ethylbenzene.png'
                            title='Process Design'
                            onClick={() => setCurrentDisplay(ContentType.Ethylbenzene)}
                        />
                        <Icon 
                            imgSrc='src/assets/icons/firefox.png'
                            title='This Website'
                            onClick={() => setCurrentDisplay(ContentType.Website)}
                        />
                    </Folder>
                }
            </div>
            {/* <ResponsiveGridLayout
                className='layout'
                rowHeight={10}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 120, md: 110, sm: 60, xs: 40, xxs: 20 }}
                width={1100}
                compactType={null}
                allowOverlap={true}
            >
                <div key='a' data-grid={{ i: 'a', x: 0, y: 0, w: 10, h: 10 }} style={{ backgroundColor:'papayawhip' }}>Hello!</div>
                {currentDisplay === ContentType.AboutMe &&
                    <Window 
                        key='main'
                        url='https://www.Jacob-Lieber.com'
                        image='src/assets/headshot.jpg'
                        imageStyle={{height:'350px'}}
                        title='Hey, I&#39;m Jacob'
                        data-grid={{ i: 'main', x: 35, y: 2, w: 30, h: 21.5 }}
                    />
                }
            </ResponsiveGridLayout> */}

            <GridLayout
                className='layout'
                rowHeight={10}
                cols={110}
                width={1100}
                draggableHandle='.window-title-bar'
                compactType={null}
                allowOverlap={true}
                // Data-grid has to be on each component - cannot use layout. Conditional display breaks on rerender otherwise
            >

                {/* SECTION: About Me */}

                { currentDisplay === ContentType.AboutMe &&
                    <Window 
                        key='main'
                        titleBar='https://www.Jacob-Lieber.com'
                        image='src/assets/headshot.jpg'
                        imageStyle={{ minWidth: '230px', width: '90%'}}
                        title='Hey, I&#39;m Jacob'
                        data-grid={{ i: 'main', x: 5, y: 2, w: 35, h: 28 }}
                    />
                }
                { currentDisplay === ContentType.AboutMe &&
                    <Window
                        key='main-intro'
                        titleBar='https://www.Jacob-Lieber.com/intro'
                        text='I&#39;m a recent graduate from Northeastern University with a combined degree in Chemical Engineering and Computer Science. My interdisciplinary background allows me to approach problems at the intersection of both fields, combining chemical process knowledge with computational solutions.'
                        data-grid={{ i: 'intro', x: 41, y: 3, w: 32, h: 12.5 }}
                    />
                }
                { currentDisplay === ContentType.AboutMe &&
                    <Window 
                        key='main-interests'
                        titleBar='https://www.Jacob-Lieber.com/interests'
                        text='I&#39;m fascinated by the intersection of technology and industrial processes, particularly how software can transform and optimize chemical systems. I&#39;m passionate about building solutions that make operations more efficient&#8212;whether through automation, monitoring, or process optimization. I&#39;m eager to grow and contribute my programming skills to solve real-world industrial challenges.'
                        data-grid={{ i: 'interests', x: 41, y: 16, w: 39, h: 13 }}
                    />
                }
                { currentDisplay === ContentType.AboutMe &&
                    <Window
                        key='main-metalor'
                        titleBar='https://www.Jacob-Lieber.com/jobs/Metalor'
                        image='src/assets/job-logos/metalor-logo.png'
                        imageStyle={{ minWidth: '64px'}}
                        data-grid={{ i: 'main-metalor', x: 5, y: 33, w: 10, h: 6 }}
                    />
                }
                { currentDisplay === ContentType.AboutMe &&
                    <Window
                        key='main-fortify'
                        titleBar='https://www.Jacob-Lieber.com/jobs/Fortify'
                        image='src/assets/job-logos/fortify-logo.png'
                        imageStyle={{ minWidth: '64px'}}
                        data-grid={{ i: 'main-fortify', x: 16, y: 33, w: 10, h: 6 }}
                    />
                }

                {/* SECTION: Contact Information */}
                
                { currentDisplay === ContentType.Contact &&
                    <Window
                        key='greeting'
                        titleBar='https://www.contact-me.com/greeting'
                        title='Feel free to reach out to me via:'
                        data-grid={{ i: 'greeting', x: 30, y: 4, w: 47, h: 3.75 }}
                    />
                }
                { currentDisplay === ContentType.Contact &&
                    <Window
                        key='linkedin'
                        titleBar='https://www.contact-me.com/LinkedIn'
                        image='src/assets/icons/linkedin.png'
                        imageStyle={{width:'150px'}}
                        link='https://www.linkedin.com/in/jacob-lieber/'
                        linkText='My LinkedIn'
                        data-grid={{ i: 'linkedin', x: 60, y: 10, w: 32, h: 12 }}
                    />
                }
                { currentDisplay === ContentType.Contact &&
                    <Window
                        key='email'
                        titleBar='https://www.contact-me.com/gmail'
                        image='src/assets/icons/gmail.png'
                        imageStyle={{width:'150px'}}
                        title='jlie&#98;er1&#50;4&#64;&#103;&#109;a&#105;l&#46;com'
                        clickHere='ma&#105;lto&#58;%6Ali%65ber1%3&#50;&#52;&#64;g&#109;a&#105;&#108;&#46;com'
                        clickHereText='send me an email'
                        data-grid={{ i: 'email', x: 20, y: 10, w: 30, h: 12 }}
                    />
                }

                 {/* SECTION: Capstone */}

                { currentDisplay === ContentType.Capstone &&
                    <Window
                        key='capstone-problem'
                        titleBar='C:/Projects/Capstone/Problem-Statement'
                        title='Thermosetting Plastics'
                        text='Thermosets are a class of polymers that permanently harden when shaped and are commonly used for high temperature applications, but they have some problems:'
                        list={[
                            {
                                header:'',
                                items: [
                                    // Need to use fromCharCode cause entity was not working
                                    'They' + String.fromCharCode(39) + 're made from petrochemicals',
                                    'They' + String.fromCharCode(39) + 're not recyclable or easily degradable'
                                ]
                            }
                        ]}
                        data-grid={{ i: 'capstone-problem', x: 4, y: 1, w: 47, h: 11 }}
                    />
                }
                { currentDisplay === ContentType.Capstone &&
                    <Window
                        key='capstone-goal'
                        titleBar='C:/Projects/Capstone/Our-Goal'
                        image='src/assets/projects/capstone/capstone-logo.png'
                        imageStyle={{ width: '100px', margin: 0 }}
                        title='Research Objective'
                        text='For our senior capstone, we decided to design and evaluate a process that is recyclable, sustainably sourced, and affordable'
                        data-grid={{ i: 'capstone-goal', x: 53, y: 2, w: 31, h: 14 }}
                    />
                }
                { currentDisplay === ContentType.Capstone &&
                    <Window
                        key='capstone-logo'
                        titleBar='C:/Projects/Capstone/Logo-Note'
                        title='About the Logo'
                        text='Our group name was JAKE as an acronym for all of our first names. By coincidence, Jake is also my nickname&#8212;the group was NOT named after me.'
                        data-grid={{ i: 'capstone-logo', x: 86, y: 3, w: 22, h: 11 }}
                    />
                }
                { currentDisplay === ContentType.Capstone &&
                    <Window
                        key='capstone-process'
                        titleBar='C:/Projects/Capstone/Process'
                        image='src/assets/projects/capstone/capstone-process.png'
                        imageStyle={{ minWidth:'450px', width: '90%' }}
                        title='Our Process: Production and Recycling'
                        text='We developed and optimized a manufacturing process for our polymer, from raw glycerol purification through thermal curing stages. Our team also established a sustainable recycling protocol that enables material recovery and reuse through controlled dissolution and filtration.'
                        data-grid={{ i: 'capstone-process', x: 0, y: 13, w: 51, h: 17 }}
                    />
                }
                { currentDisplay === ContentType.Capstone &&
                    <Window
                        key='capstone-economics'
                        titleBar='C:/Projects/Capstone/Economics'
                        image='src/assets/projects/capstone/capstone-economics.png'
                        imageStyle={{ minWidth: '325px', width: '90%' }}
                        title='Economic Evaluation'
                        list={[
                            {
                                header: 'Market Use Case',
                                items: [
                                    'Intended for rapid prototyping, not for final products',
                                    'Works well for high temperature testing',
                                ]
                            },
                            {
                                header: 'Other Considerations',
                                items: [
                                    'Circular Economy: we supply our customer who return the polymer for recycling',
                                    'Our full process incorporates the recycled polymer stream back into the process, so the batch price may increase if recycle rates are low'
                                ]
                            }
                        ]}
                        data-grid={{ i: 'capstone-economics', x: 53, y: 17, w: 45, h: 23 }}
                    />
                }
                { currentDisplay === ContentType.Capstone &&
                    <Window
                        key='capstone-future'
                        titleBar='C:/Projects/Capstone/Future-Considerations'
                        title='Future Considerations'
                        text='There are currently two key areas in which we could improve our process: catalyst safety and potential alternatives, and curing on a larger scale. Additionally, we could look to expand our consumer base beyond prototyping.'
                        data-grid={{ i: 'capstone-future', x: 1, y: 31, w: 50, h: 9 }}
                    />
                }

                {/* SECTION: Process Analysis */}

                { currentDisplay === ContentType.Ethylbenzene &&
                    <Window
                        key='separations-overview'
                        titleBar='C:/Projects/Process-Analysis/Overview'
                        title='Ethylbenzene Process Simulation'
                        text='My group was tasked to design of a process for the production of ethylbenzene. The project scope required a production capacity of 80,000 metric tons annually while meeting purity specifications of 99.8%.'
                        data-grid={{ i: 'separations-overview', x: 4, y: 3, w: 38, h: 12 }}
                    />
                }
                { currentDisplay === ContentType.Ethylbenzene &&
                    <Window
                        key='separations-process'
                        titleBar='C:/Projects/Process-Analysis/Process'
                        image='src/assets/projects/process/separations-pfd.png'
                        imageStyle={{ minWidth: '350px', width: '90%' }}
                        title='Process Design'
                        text='The core of our design featured a high-pressure catalytic reactor system operating at 20 bar. We addressed key engineering challenges including the management of exothermic reaction heat through steam generation, and the optimization of feed ratios to minimize unwanted side reactions.'
                        style={{ zIndex: 100 }}
                        data-grid= {{ i: 'separations-process', x: 44, y: 1, w: 52, h: 27 }}
                    />
                }
                { currentDisplay === ContentType.Ethylbenzene &&
                    <Window
                        key='separations-tech'
                        titleBar='C:/Projects/Process-Analysis/Tech'
                        title='Technical Analysis'
                        text='We used Aspen Plus to optimize our process parameters and equipment specifications. This comprehensive analysis enabled us to fine-tune operating conditions, ensuring both product quality and operational efficiency while meeting all design constraints.'
                        data-grid={{ i: 'separations-tech', x: 4, y: 16, w: 38, h: 12 }}
                    />
                }
                { currentDisplay === ContentType.Ethylbenzene &&
                    <Window 
                        key='separations-econ-example'
                        titleBar='C:/Projects/Process-Analysis/Econ/Example'
                        image='src/assets/projects/process/separations-sensitivity.png'
                        imageStyle={{ width: '95%' }}
                        data-grid={{ i: 'separations-econ-example', x: 0, y: 29, w: 37, h: 13}}
                    />
                }
                { currentDisplay === ContentType.Ethylbenzene &&
                    <Window
                        key='separations-econ'
                        titleBar='C:/Projects/Process-Analysis/Econ'
                        title='Economic Evaluation'
                        text='Our technical design decisions were backed by thorough economic analysis. We developed detailed pricings for equipment, utilities, and operations, translating engineering specifications into financial metrics to demonstrate project viability through NPV and DCFROR calculations.'
                        data-grid={{ i: 'separations-econ', x: 38, y: 29, w: 32, h: 13 }}
                    />
                }
                { currentDisplay === ContentType.Ethylbenzene &&
                    <Window
                        key='separations-deliverable'
                        title='Final Product'
                        titleBar='C:/Projects/Process-Analysis/Deliverables'
                        text='The project culminated in a comprehensive package featuring block and process flow diagrams, detailed equipment specifications, and utility requirements. We presented our findings through two technical presentations focused on process design considerations and economic analysis, defending our design choices to faculty and peers.'
                        data-grid={{ i: 'separations-deliverable', x: 71, y: 29, w: 37, h: 13 }}
                    />
                }


                {/* SECTION: Stack Underflow */}

                { currentDisplay === ContentType.Stackunderflow &&
                    <Window
                        key='stackunderflow-link'
                        titleBar='C:/Projects/StackUnderflow/Link'
                        title='Our website is live!'
                        clickHere='https://cs4530-f24-106.onrender.com/'
                        clickHereText='view a live version of the website'
                        data-grid={{ i: 'stackunderflow-link', x: 5, y: 31, w: 38, h: 6 }}
                    />
                }
                { currentDisplay === ContentType.Stackunderflow &&
                    <Window
                        key='stackunderflow-other-features'
                        titleBar='C:/Projects/StackUnderflow/Link-Notes'
                        title='Some Notes on the Live Website'
                        text='Our website is hosted through Render for free, and as such may take a while to load depending on when it was last accessed'
                        data-grid={{ i:'stackunderflow-other-features', x: 45, y: 33, w: 60, h: 7 }}
                    />
                }
                { currentDisplay === ContentType.Stackunderflow &&
                    <Window 
                        key='stackunderflow-overview'
                        titleBar='C:/Projects/StackUnderflow/Overview'
                        image='src/assets/projects/software/stackunderflow.png'
                        imageStyle={{width:'95%'}}
                        title='Similar to Stack Overflow...'
                        text='This project tasked my group with creating a website similar to the Stack Overflow with a focus on adding features beyond simply asking and answering questions. Our groups primary additions were AI-powered features and User Communities.'
                        data-grid={{ i: 'stackunderflow-overview', x: 7, y: 1, w: 36, h: 17 }}
                    />
                }
                { currentDisplay === ContentType.Stackunderflow &&
                    <Window
                        key='stackunderflow-chatgpt'
                        titleBar='C:/Projects/StackUnderflow/AI-integration'
                        image='/src/assets/projects/software/AI-integration-example.gif'
                        imageStyle={{ width:'75%', minWidth:'350px'}}
                        title='AI generated responses'
                        text='By working with the ChatGPT API, we were able to integrate AI into two aspects of our website: asking questions, and getting answers. When asking a question, users are prompted with autocomplete suggestions based on what they&#39;ve typed so far. Additionally, users can opt for an AI response to their question in addition to answers or comments from other users.'
                        data-grid={{ i: 'stackunderflow-chatgpt', x: 45, y: 11, w: 48, h: 21 }}
                    />
                }
                { currentDisplay === ContentType.Stackunderflow &&
                    <Window
                        key='stackunderflow-communities'
                        titleBar='C:/Projects/StackUnderflow/Communities'
                        title='User Created Communities'
                        text='Allowed users to create communities to better organize discussions. Users can create public communities, where anyone can join from the communities screen, or private communities, where the community is hidden and only accessible via invite.'
                        data-grid={{ i: 'stackunderflow-communities', x: 7, y: 19, w: 36, h: 11 }}
                    />
                }
                { currentDisplay === ContentType.Stackunderflow &&
                    <Window
                        key='stackunderflow-techstack'
                        titleBar='C:/Projects/StackUnderflow/Techstack'
                        title='The Techstack'
                        list={[
                            {
                                header: '',
                                items: [
                                    'Frontend: React, Material UI, Marked',
                                    'Backend: Node.js, Express.js, OpenAI API, BCrypt',
                                    'Communication: Axios, Socket.IO',
                                    'Database: MongoDB',
                                    'Testing: Jest, Mockingoose'
                                ]
                            }
                        ]}
                        data-grid={{ i:'stackunderflow-techstack', x: 45, y: 0, w: 43, h: 10 }}
                    />
                }
                
                {/* SECTION: This Website */}

                { currentDisplay === ContentType.Website &&
                    <Window
                        key='website-overview'
                        titleBar='C:/Projects/Portfolio-Website/Overview'
                        image='src/assets/Initial Logo.png'
                        imageStyle={{width:'128px'}}
                        title='jacob95'
                        text='For this project, I created an interactive Windows 95-inspired portfolio website that combines nostalgia with modern web technologies. The goal was to design a unique way to showcase my development skills while paying homage to the iconic user interface of the 90s.'
                        data-grid={{ i:'website-overview', x: 7, y: 3, w: 35, h: 19 }}
                    />
                }
                { currentDisplay === ContentType.Website &&
                    <Window
                        key='website-todo'
                        titleBar='C:/Projects/Portfolio-Website/Todo'
                        title='Future Features and Additions'
                        list={[
                            {
                                header: 'Important',
                                items: [
                                    'Make the layouts responsive and mobile friendly',
                                    'Minor code tweaks and revisions under the hood'
                                ]
                            },
                            {
                                header: 'Just For Fun',
                                items: [
                                    'Add nostalgic sound effects and background music (toggleable of course)',
                                    'Finish the start menu (the start button is currently just for show and doesn' + String.fromCharCode(39) + 't do anything)'
                                ]
                            }
                        ]}
                        data-grid={{ i: 'website-todo', x: 44, y: 26, w: 44, h: 14 }}
                    />
                }
                { currentDisplay === ContentType.Website &&
                    <Window
                        key='website-features'
                        titleBar='C:/Projects/Portfolio-Website/Features'
                        image='src/assets/projects/website/RGL-example.gif'
                        imageStyle={{minWidth:'400px'}}
                        title='The Power of React-Grid-Layout'
                        text='Using the React-Grid-Layout library, I&#39;m able to easily layout my information in windows. Additionally, each window is draggable (from the titlebar) and resizable (from the bottom right corner of the window).'
                        data-grid={{ i: 'website-features', x: 44, y: 1, w: 44, h: 24 }}
                    />
                }
                { currentDisplay === ContentType.Website &&
                    <Window
                        key='website-design'
                        titleBar='C:/Projects/Portfolio-Website/Design'
                        title='Custom Icons'
                        text='All of the icons on my website were made by me using Aseprite. Each 32x32 pixel art icon was made with care to try and match the Windows 95 style while adding my own creative touch to the interface.'
                        data-grid={{ i: 'website-design', x: 7, y: 23, w: 35, h: 10 }}
                    />
                }
            </GridLayout>
        </div>
    )
}

export default Desktop;
