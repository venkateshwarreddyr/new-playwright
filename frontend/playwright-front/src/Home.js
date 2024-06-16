
export const Home = ({ loggedIn, username }) => (
    <div className="content">
      <h1>Welcome to the AI Testing Automation Demo</h1>
      {loggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <p>Welcome to the demo of AI testing automation haha</p>
      )}
    </div>
  );