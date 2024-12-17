import { data } from '../utils/data';

const Message = ({ step }) => {
	const currentTask = data.find((item) => item.id === step);
	return (
		<div className='message'>
			{currentTask ? currentTask.task : 'task not found'}
		</div>
	);
};

export default Message;
