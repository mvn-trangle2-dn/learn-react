import logo from './logo.svg';

function Main() {
  return (
    <main class="page-main">
      <div class="container">
        <div class="main-content text-center">
          <a href="/">
            <img src={logo} class="react-logo" alt="react-logo"/>
          </a>
          <h2>Hello React!</h2>
        </div>
      </div>
    </main>
  );
}

export default Main;
