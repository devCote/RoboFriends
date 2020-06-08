import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav class="nav pa3 pa4-ns">
        <a class="link dim black b f6 f5-ns dib mr3" href="!#" title="Home">
          fromItaly
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3 fr" href="!#" title="Home">
          Contact
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3 fr" href="!#" title="About">
          Store
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3 fr" href="!#" title="Store">
          About
        </a>
        <a
          class="link dim gray    f6 f5-ns dib mr3 fr"
          href="!#"
          title="Contact"
        >
          Home
        </a>
      </nav>
    );
  }
}

export default Header;
