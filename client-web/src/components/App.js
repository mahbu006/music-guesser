import React from "react";

const App = () => {
  return (
    <div className="App">
      <a href="http://localhost:5000/auth/google" class="button">
        <span class="button-label-google">Sign in with Google</span>
      </a>
      <a href="http://localhost:5000/auth/spotify" class="button">
        <span class="button-label-spotify">Sign in with Spotify</span>
      </a>
    </div>
  );
};

export default App;
