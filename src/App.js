
import React from 'react';
import { photos } from "./photos";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div id="main">
          <header id="header">
            <h1>Adi</h1>
            <p>World through my lens...</p>
            <ul className="icons">
              <li><a href="https://instagram.com/onevarma/" target="_blank" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="https://twitter.com/onevarma" target="_blank" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            </ul>
          </header>

          <section id="thumbnails">
            {photos.map((i) => {
              return (
                <article key={i.key} >
                  <a className="thumbnail" href={i.src} data-position={i.imagePosition} >
                    <img src={i.src} alt="Salt Flats - Bolivia" />
                  </a>
                  <h2>{i.imageText}</h2>
                </article>
              );
            })}
          </section>

          <footer id="footer">
            <ul className="copyright">
              <li>&copy; Aditya Pakalapati</li>
              <li><span className="label">Powered by </span><a href="https://guides.github.com/features/pages/" target="_blank" className="icon brands fa-github"></a></li>
            </ul>
          </footer>

        </div>
      </div>
    );
  }

  componentDidMount() {
    const jQueryScript = document.createElement("script");
    jQueryScript.src = process.env.PUBLIC_URL + '/assets/js/jquery.min.js';
    jQueryScript.async = true;
    jQueryScript.type = "text/javascript";
    document.body.appendChild(jQueryScript);

    const browserScript = document.createElement("script");
    browserScript.src = process.env.PUBLIC_URL + '/assets/js/browser.min.js';
    browserScript.async = true;
    browserScript.type = "text/javascript";
    document.body.appendChild(browserScript);

    const breakpointsScript = document.createElement("script");
    breakpointsScript.src = process.env.PUBLIC_URL + '/assets/js/breakpoints.min.js';
    breakpointsScript.async = true;
    breakpointsScript.type = "text/javascript";
    document.body.appendChild(breakpointsScript);

    const mainScript = document.createElement("script");
    mainScript.src = process.env.PUBLIC_URL + '/assets/js/main.js';
    mainScript.async = true;
    mainScript.type = "text/javascript";
    document.body.appendChild(mainScript);
  }
}

export default App;
