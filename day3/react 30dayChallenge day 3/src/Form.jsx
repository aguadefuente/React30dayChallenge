const Subscribe = () => {
  return (
    <>
      <div className="form-container">
        <h1>Subscribe</h1>
        <p>Sign up with your email address to receive news and updates</p>
        <form action="">
          <div className="input-container">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email" />
          </div>

          <button className="btn form-btn">Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default Subscribe;
