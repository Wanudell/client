export interface IUserAddProps {}

const UserAdd: React.FunctionComponent<IUserAddProps> = (props) => {
  return (
    <div>
      <div className="mt-5 row justify-content-center">
        <div className="col-5">
          <div className="alert alert-warning">Kayıt işlemi Başarısız</div>
          <div className="alert alert-success">Kayıt işlemi Başarılı</div>
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="form-outline mb-4">
                <label className="form-label">Email</label>
                <input type="email" id="loginName" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">
                  Password Again
                </label>
                <input
                  type="passwordagain"
                  id="loginPasswordagain"
                  className="form-control"
                />
                <span className="text-muted">parola eşleşmedi</span>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">Phone</label>
                <input type="text" id="phone" className="form-control" />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label">DisplayName</label>
                <input type="text" id="displayName" className="form-control" />
              </div>
              <button className="btn btn-primary btn-block mb-4 w-100">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
