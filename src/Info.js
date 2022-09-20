function Info() {
  return (
    <div className="container c-info">
      <div className="info--component">
        <div className="image-holder">
          <img
            id="infophoto"
            src={require("./infophoto.jpg")}
            alt="Dominic Bacasnot"
          />
        </div>
        <h1 className="name-info">Dominic Cyril Bacasnot</h1>
        <h2 className="position-info">Frontend Developer</h2>
        <p className="website-info">fb.com/dominic.bacasnot</p>
        <div className="btns-info">
          <p className="email-btn">
            <i class="fa-solid fa-envelope"></i>Email
          </p>
          <p className="linkedin-btn">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
