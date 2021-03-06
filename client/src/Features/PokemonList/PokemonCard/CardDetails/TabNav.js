import { Nav } from "react-bootstrap";
import './TabNav.css';




function TabNav({currentTab, setCurrentTab}){


    return(
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
            <Nav.Link className={currentTab === 'About' ? 'nav-link active' : 'nav-link'} 
            onClick={() => setCurrentTab('About')}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className={currentTab === 'Base Stats' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentTab('Base Stats')}>Base Stats</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className={currentTab === 'Evolution' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentTab('Evolution')}>Evo.</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className={currentTab === 'Abilities' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentTab('Abilities')}>Abilities</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default TabNav;