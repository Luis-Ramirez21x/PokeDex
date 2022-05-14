import { Nav } from "react-bootstrap";



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
            onClick={() => setCurrentTab('Evolution')}>Evolution</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className={currentTab === 'Moves' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentTab('Moves')}>Moves</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default TabNav;