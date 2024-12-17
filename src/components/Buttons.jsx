const Buttons = ({ step, setStep }) => {
	function handleNext() {
		setStep((prev) => prev + 1);
		if (step === 3) {
			setStep(1);
		}
	}
	function handlePrevious() {
		setStep((prev) => prev - 1);
		if (step === 1) {
			setStep(3);
		}
	}
	return (
		<div className='buttons'>
			<button onClick={handlePrevious}>Previous</button>
			<button onClick={handleNext}>Next</button>
		</div>
	);
};

export default Buttons;
