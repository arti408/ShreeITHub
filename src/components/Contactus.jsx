

function Contactus() {
  return (
    <>
    <div className="contact">
    <form>
  <div className="form-group fields">
    <label htmlFor="formGroupExampleInput">First Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name" required/>
  </div>
  <div className="form-group fields">
    <label htmlFor="formGroupExampleInput2">Last Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name" required/>
  </div>
  <div className="form-group fields">
    <label htmlFor="formGroupExampleInput">Email</label>
    <input type="email" className="form-control" id="formGroupExampleInput3" placeholder="Email" required/>
  </div>
  <div className="form-group fields">
    <label htmlFor="formGroupExampleInput2">Phone No.</label>
    <input type="tel" className="form-control" id="formGroupExampleInput4" placeholder="Phone No." pattern="[0-9]{10}" required/>
  </div>
  <div className="form-group fields">
    <label htmlFor="formGroupExampleInput2">Enter Your Message</label>
    <textarea name="area" className="form-control" id="formGroupExampleInput5" rows="3"></textarea>
  </div>
  <button type="button" className="btn btn-primary btn">Submit</button>
</form>
    </div>
    </>

  )
}

export default Contactus