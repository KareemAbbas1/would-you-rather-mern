import { Component } from "react";
import PollModel from "./PollModel";

class PollsList extends Component {
    render() {

        const { polls } = this.props;
        return (
            <ul>
                {polls ? (
                    polls.map((id) => <PollModel key={id} id={id} />)
                ) : (
                    <p className='text-center'>No More Polls</p>
                )}
            </ul>
        )
    }
}


export default PollsList
