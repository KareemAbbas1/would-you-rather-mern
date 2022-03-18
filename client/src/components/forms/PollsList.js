import PollModel from "./pollModel/PollModel"

const PollsList = ({polls}) => {
    
    return (
        <ul>
            {polls ? (
                polls.map((_id) => <PollModel key={_id} id={_id} />)
            ) : (
                <p className='text-center'>No More Polls</p>
            )}
        </ul>
    )
}

export default PollsList