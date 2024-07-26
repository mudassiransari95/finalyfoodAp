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
    <div className=' p-3 ' style={{ width:"50rem",height:"35rem",backgroundImage:("	https://newpos.7yug.com/login_asset/images/bg_1.jpg"),background: "whitesmoke", marginLeft: "30rem" }}>
      <div className='p-3    ' style={{ marginLeft:"7rem",marginTop:"5rem",backgroundColor: "white", width: "35rem" }}>
        <h3 className=' ' style={{ fontWeight: "bold" ,marginLeft:"13rem"}}>Admin panel</h3>
        <div className="mb-3  ">
          <label htmlFor="exampleInputUsername" className="form-label me-5" style={{ paddingRight: "19rem" }}>Username</label>
          <input type="text" ref={userRef} className="form-control " id="exampleInputUsername" aria-describedby="usernameHelp" style={{ backgroundColor: " 216, 212, 211" }} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label" style={{ paddingRight: "19rem" }}>Email address</label>
          <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label me-5" style={{ paddingRight: "18rem" }}>Password</label>
          <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label " htmlFor="exampleCheck1" style={{ paddingRight: "16rem" }}>Remember me</label>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn " style={{ width: "33rem", backgroundColor: "skyblue", border: "none",fontWeight:"bold" }}>Login</button>

      </div>
    </div>
  );
};

export default Login;
