import { useState } from 'react';

import Number from './Number';
import Message from './Message';
import Buttons from './Buttons';

const StepCard = () => {
	const [step, setStep] = useState(1);

	return (
		<div className='steps'>
			<Number>
				<div className={step === 1 ? 'active' : ''}>1</div>
				<div className={step === 2 ? 'active' : ''}>2</div>
				<div className={step === 3 ? 'active' : ''}>3</div>
			</Number>
			<Message step={step} />
			<Buttons step={step} setStep={setStep} />
		</div>
	);
};

export default StepCard;
