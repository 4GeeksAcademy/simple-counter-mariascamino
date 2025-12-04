
const Home = ({ seconds }) => {
	const padded = seconds.toString().padStart(6, "0");
	const digits = padded.split("");
	return (

		<div className="background-square">
			 <div className="digit-box icon-box">
<i className="fa-regular fa-clock"></i>
      </div>
			{digits.map((digit, index) => (
				<div className="digit-box" key={index}>
					{digit}
				</div>
			))}
		</div>
	);
};

export default Home;