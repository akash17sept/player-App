import react from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
    
    return (
        <div>
            <div className="heading">
                <h2>10 International Cricket Player</h2>
            </div>
            <div className="player">
                <h3>Welcome, Click the below button to Know!!</h3>
                <Link to={{pathname:'/player'}}>
                    <button>Click here!!</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Home;