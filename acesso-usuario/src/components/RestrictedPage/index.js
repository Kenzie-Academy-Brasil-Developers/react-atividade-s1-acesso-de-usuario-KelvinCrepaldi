import "./style.css";
const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <p>Bem-vindo {user}.</p>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Você não pode acessar essa página.</p>
          <button onClick={Login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default RestrictedPage;
