import { Component } from "react";

export default class Navigation extends Component{
    render(){
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <a className="active" href="#Home">Home</a>
                        </li>
                        <li>
                            <a className="" href="#New">New</a>
                        </li>
                        <li>
                            <a className="" href="#About">About</a>
                        </li>
                        <li>
                            <a className="" href="#Contract">Contract</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}