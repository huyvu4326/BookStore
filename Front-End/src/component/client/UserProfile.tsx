
const UserProfile = () => {
  return (
    <div>
        <div className='container-md3'>
        <form>
            <div className="form-group">
                <label htmlFor="lastName">Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email address"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        
    </div>
  )
}

export default UserProfile