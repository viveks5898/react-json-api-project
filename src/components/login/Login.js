import React, { useState } from 'react'
import './login.css';
import Input from '../input/Input';
import Button from '../button/Button';
import data from "../../data/data.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
	Link, useNavigate
} from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate()

	const [logindata, setlogindata] = useState({
		email: "",
		password: "",
	});


	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setlogindata({ ...logindata, [name]: value })

	};
	const [formerrors, setformerrors] = useState({});
	const [issubmit, setissubmit] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setformerrors(validate(logindata));
		setissubmit(true)
		if (logindata.email == data[0].email && logindata.password == data[0].password) {
			navigate("/frontend");

		}
		else {
			toast("Wrong credential", {position: toast.POSITION.TOP_CENTER});
		}
	};
	const validate = (formvalue) => {
		const errors = {}
		const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!formvalue.email) {
			errors.email = "please enter your email address";
		}
		if (!formvalue.password) {
			errors.password = "Enter Your Password";
		}
		return errors;
	}


	return (
		<>
			<div className="global-container">
				<div className="card login-form">
					<div className="card-body ">
						<h3 className="card-title text-center">Login</h3>
						<div className="card-text">
							<form onSubmit={handleSubmit}>
								<div className="form-group">

									<Input
										type="email"
										className="form-control form-control-sm"
										id="exampleInputEmail1"
										placeholder="Email address"
										value={logindata.email}
										onChange={onChange}
										name="email" />
								</div>
								<p className="errors">{formerrors.email}</p>
								<div className="form-group">
									<Input
										type="password"
										className="form-control form-control-sm"
										id="exampleInputPassword1"
										placeholder="password"
										value={logindata.password}
										onChange={onChange}
										name="password" />
									<a href="" className="forgot" >Forgot password?</a>
								</div>
								<p className="errors">{formerrors.password}</p>


								<Button type="submit" className="btn btn-primary btn-block">Sign in
								</Button>


							</form>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</>


	)
}

export default Login

