export const Login = ({ handleLogin, error }) => (
  <div className="content">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        // value={"user1"}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        // value={"password1"}
        required
      />
      <button type="submit">Login</button>
    </form>
    {error && <p className="error">{error}</p>}
  </div>
);
