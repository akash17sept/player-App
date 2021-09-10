import {Component} from 'react';
import './player.css';
import axios from 'axios';
// import ''

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            playerList:[],
            playerDetails:{}
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/player")
        .then((res)=>{
            this.setState({
                playerList:res.data
            },this.getDetails)
        })
    }

    decrementPlayer= () => {
        const {count}=this.state
        if(count>0){
        this.setState({count:count-1},this.getDetails)}
        
    }

    incrementPlayer= () => {
        const {count}=this.state
        if(count < this.state.playerList.length-1){
        this.setState({count:count+1},this.getDetails)}
    }

    getDetails = () => {
        const {count,playerList} =this.state
        this.setState({playerDetails:playerList[count]})
        console.log(this.state.playerDetails,count,playerList)
    }

    render() {
        const {name,country,dob,birthPlace,battingStyle,bowlingStyle,shirtNumber,role,photo} = this.state.playerDetails
        
        return (
            <div>
                <div className="heading">
                    <h2>Click below buttons to change Player!!</h2>
                </div>
                <div className="box">
                    <button className="btn-secondary m-4 prev" onClick={this.decrementPlayer}>
                        Prev
                    </button>
                    <button className="btn-primary next" onClick={this.incrementPlayer}>Next</button>
                </div>
                <div>
                    <div id="player-details">
                        <div id="player-image-div">
                            <img id="player-details-image" src={photo}/>
                            <div className="player-name-country">
                                <h1 id="player-name">{name}</h1>
                                <h2 id="player-country">{country}</h2>
                            </div>
                        </div>
                        <div id="player-details-div">
                            <div className="player-bornsection">
                                <h4 className="player-born">Born: <span>{dob}</span></h4>
                                <h4 className="player-birthPlace">Birth Place:  <span>{birthPlace}</span></h4>
                                <h4 className="player-role">Role:  <span>{role}</span></h4>
                            </div>
                            <div className="player-style">
                                <h4 className="player-bat">Batting Style: <span>{battingStyle}</span></h4>
                                <h4 className="player-bowl">Bowling Style: <span>{bowlingStyle}</span></h4>
                                <h4 className="Player-shirt">Shirt Number: <span>{shirtNumber}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Player;