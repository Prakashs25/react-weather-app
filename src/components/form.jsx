import React from "react";
import "./formStyle.css";

const Form = props => {
	return (
		<div className="container mt-1">
			<form onSubmit={props.loadweather}>		
				<div>{props.error ? error() : ""}</div>
				<div className="row justify-content-center">
					<div className="col-md-3 mt-3 mt-md-2">
						<input
							type="text"
							className="form-control"
							placeholder="city"
							name="city"
							autoComplete="off"
						/>
					</div>
					<div className="col-md-3 mt-2 mt-md-2">
						<input
							type="text"
							className="form-control"
							placeholder="country"
							name="country"
							autoComplete="off"
						/>
					</div>
					<div className="col-md-3 mt-3 mt-md-2">
						<button className="btn btn-block btn-warning">Get Weather</button>
					</div>
				</div>
			</form>
		</div>
	);
};

const error = props => {
	return (
		<div className="alert alert-danger mx-5" role="alert">
			Please Enter City and Country...!
		</div>
	);
};

export default Form;
