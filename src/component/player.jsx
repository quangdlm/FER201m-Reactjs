import { Component } from "react";

export default class Player extends Component{
    render(){
        return (
            <div className="container">
                <div className="column">
                    <div className="card">
                        <img src="https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-videoSixteenByNine3000.jpg"></img>
                        <h3>Cristiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSZ-Q0g4jlw9fW96nEdfFFy2ZVD0q6l_5WBe7C1BDiEoXMwIKK3jXfD2JLHXGsrTsJLZZ5_leyq2QTub3Q"></img>
                        <h3>Kante</h3>
                        <p className="title">Chelsea</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ2RRIqs6MqnQR181DRcWRGxeJql9FVildnyF0uu48OZ7MN62g93ZeNAtwVxS_8djQC7Hgc3aAOJD55kbk"></img>
                        <h3>Messi</h3>
                        <p className="title">PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        )
    }
}