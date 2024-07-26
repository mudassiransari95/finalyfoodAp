import React, { useRef } from 'react';

const Login = () => {
  // const [, set] = useState();
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      user: userRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    console.log(obj); // Just for testing purposes, you can remove this later
    // Add your logic here to handle form submission
  };

  return (
    <div className='   admin-panel' style={{}}>
      <div className='p-3  radius  ' style={{backgroundColor: "white", width: "35rem" }}>
        <h3 className='text-center ' style={{ fontWeight: "bold" }}>Admin panel</h3>
        <div className="mb-3  ">
          <label htmlFor="exampleInputUsername" className="form-label me-5" style={{ }}>Username</label>
          <input type="text" ref={userRef} className="form-control " id="exampleInputUsername" aria-describedby="usernameHelp" style={{ backgroundColor: " 216, 212, 211" }} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label" style={{ }}>Email address</label>
          <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label me-5" style={{ }}>Password</label>
          <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label " htmlFor="exampleCheck1" style={{ }}>Remember me</label>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn " style={{ width: "33rem", backgroundColor: "skyblue", border: "none",fontWeight:"bold" }}>Login</button>

      </div>
    </div>
  );
};

export default Login;
