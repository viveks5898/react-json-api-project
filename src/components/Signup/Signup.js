import React, { useState, useEffect } from 'react'
import Button from '../button/Button'
import './signup.css';
import Input from '../input/Input';


const Signup = () => {

    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        phonenumber: ""
    });
    const [formerrors, setformerrors] = useState({});
    const [issubmit, setissubmit] = useState(false);
    const onchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setformdata({ ...formdata, [name]: value })
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        setformerrors(validate(formdata));
        setissubmit(true) 
    };
    useEffect(() => {
        if (Object.keys(formerrors).length === 0 && issubmit) {
        }
    }, [formerrors])
    const validate = (formvalue) => {
        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!formvalue.name) {
            errors.name = "Name is required";
        }
            else if(formvalue.name.length <= 3) {
            errors.name ="name should have minimum 3 characters";
        }
        if (!formvalue.email) {
            errors.email = "Email is required";
        } else if (!regex.test(formvalue.email)) {
            errors.email = "this is not a valid email format";
        }
        if (!formvalue.password) {
            errors.password = "Password is required";
        }
        else if(formvalue.password.length <= 8) {
            errors.password ="password should have minimum 8 characters";
        }

        if (formvalue.password !== formvalue.confirmpassword) {

            errors.confirmpassword = "Passwords don't match.";
        }

        if (!formvalue.phonenumber) {
            errors.phonenumber = "Phone number is required";
        }
        return errors;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form className="form" onSubmit={handlesubmit}>
                        <h4 className="text-center register mb-4">Register</h4>
                        <div className="form-group">
                            <Input type="text"
                                className="form-control"
                                id="name" placeholder="Name"
                                name="name"
                                value={formdata.name}
                                onChange={onchange}/>
                        </div>
                        <p className="errors">{formerrors.name}</p>
                        <div className="form-group">
                            <Input type="email"
                                className="form-control"
                                id="email" placeholder="Email"
                                name="email"
                                value={formdata.email}
                                onChange={onchange} />
                        </div>
                        <p className="errors">{formerrors.email}</p>
                        <div className="form-group">
                            <Input type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                name="password"
                                value={formdata.password}
                                onChange={onchange} />
                        </div>
                        <p className="errors">{formerrors.password}</p>
                        <div className="form-group ">
                            <Input type="password"
                                className="form-control"
                                id="confirm-password"
                                placeholder="confirm-password"
                                name="confirmpassword"
                                value={formdata.confirmpassword}
                                onChange={onchange} />
                        </div>
                        <p className="errors">{formerrors.confirmpassword}</p>
                        <div className="form-group">
                            <Input type="text"
                                className="form-control"
                                id="phonenumber"
                                placeholder="Phone number"
                                name="phonenumber"
                                value={formdata.phonenumber}
                                onChange={onchange} />

                        </div>
                        <p className="errors">{formerrors.phonenumber}</p>
                        <div className="d-flex flex-row align-items-center justify-content-between">

                            <Button type="submit" className="btn">create account
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup