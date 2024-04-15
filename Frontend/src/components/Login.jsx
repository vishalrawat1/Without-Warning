import React from 'react';

const Login = () => {
    const handlesubmit = () =>{

    }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <button type='submit' onClick={handlesubmit}>submit</button>
      {/* <button type='submit' onClick={handlesubmit}>Register</button> */}
    </div>
  );
}

export default Login;
