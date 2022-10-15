import SideBar from './SideBar';
import Reviews from './Reviews';
import Rating from './Rating';
import Visitors from './Visitors';
import Analysis from './Analysis';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="container">
            <SideBar />
            <Reviews />
            <Rating />
            <Analysis />
            <Visitors />
            </div>
        </div>
    )
}

export default Dashboard;