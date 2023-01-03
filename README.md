<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/itachi47/minimalist-html-fund-me">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HTML FundMe</h3>

  <p align="center">
    Minimalist version of website to interact with the FundMe contract.
    <br />
    <a href="https://github.com/itachi47/hardhat-fund-me"><strong>Explore the backend (FundMe) »</strong></a>
    <br />
    <br />
    <a href="https://github.com/itachi47/minimalist-html-fund-me">View Demo</a>
    ·
    <a href="https://github.com/itachi47/minimalist-html-fund-me/issues">Report Bug</a>
    ·
    <a href="https://github.com/itachi47/minimalist-html-fund-me/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a small project in series to learn smart contract development, this help to understand that how frontend interacts with the contract at the backend, using ethers and hardhat(as backend).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![HTML5][html.js]][html-url]
* [![Solidity][solidity.js]][solidity-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/itachi47/minimalist-html-fund-me.git
   ```
2. Install MetaMask in your browser
3. Run local node from [hardhat-fundme](https://github.com/itachi47/hardhat-fund-me)
4. Add local netowrk to your MetaMask
5. Install Live Server Extension in your VS Code 
6. Right click on `index.html` and select `open with live server`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This project have the following function to interact with.
* Connect: connect the project the MetaMask account.
* getBalance: Help to retrieve the account balance of the deployed contract.
* getOwner: Help to find the owner of the contract (gives the address).
* withdraw: Only the owner can withdraw, transfer the asset to the owner of the contract from the contract account.
* fund: Anyone can fund to the contract.


_For more examples, please refer to the [Documentation](https://github.com/itachi47/minimalist-html-fund-me)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/itachi47/minimalist-html-fund-me/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kuldeep Karhana - kkarhan47@gmail.com

Project Link: [https://github.com/itachi47/minimalist-html-fund-me](https://github.com/itachi47/minimalist-html-fund-me)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [freeCodeCamp](https://www.freecodecamp.org/)
* [Patrick Collins](https://twitter.com/PatrickAlphaC)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/itachi47/minimalist-html-fund-me.svg?style=for-the-badge
[contributors-url]: https://github.com/itachi47/minimalist-html-fund-me/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/itachi47/minimalist-html-fund-me.svg?style=for-the-badge
[forks-url]: https://github.com/itachi47/minimalist-html-fund-me/network/members
[stars-shield]: https://img.shields.io/github/stars/itachi47/minimalist-html-fund-me.svg?style=for-the-badge
[stars-url]: https://github.com/itachi47/minimalist-html-fund-me/stargazers
[issues-shield]: https://img.shields.io/github/issues/itachi47/minimalist-html-fund-me.svg?style=for-the-badge
[issues-url]: https://github.com/itachi47/minimalist-html-fund-me/issues
[license-shield]: https://img.shields.io/github/license/itachi47/minimalist-html-fund-me.svg?style=for-the-badge
[license-url]: https://github.com/itachi47/minimalist-html-fund-me/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kuldeep-singh-karhana-80835119a/
[product-screenshot]: images/screenshot.png

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[html.js]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[solidity.js]: https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white
[solidity-url]: https://docs.soliditylang.org/en/v0.8.17/