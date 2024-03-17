## About The Project

[![MERN Screen Shot][product-screenshot]](https://belka-s.github.io/mern-starter/)

  <h2 align="center">This application intends to help people create
their own MERN app.</h2>

<details>
  <summary>Table of Contents</summary>
  <ol>
      <li><a href="#about-the-project">About the Project</a></li>
      <li><a href="#built-with">Built With</a></li>
      <li><a href="#getting-started">Getting Started</a></li>
      <li><a href="#compose-a-sample">Compose a Sample</a></li>
      <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

### Built With

- [![MongoDB][MongoDB]][MongoDB-url]
- [![Express][Express.js]][React-url]
- [![React][React.js]][React-url]
- [![Node][Node.js]][Node-url]
- [![Vite][Vite]][Vite-url]

### Getting Started

To get started with the project, follow these
steps:

1. Clone this repository to your local machine
   `git clone <repository-url>`.

2. Change directory to the project folder
   `cd mern-tstarter`.

3. Install the project dependencies `npm install`.

4. Start the development server `npm run dev`.

5. Open your web browser and navigate to
   `http://localhost:3000` to access the
   application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Compose a Sample

1. Project structure

```
.
├── client
│   ├── Dockerfile
│   ...
├── server
│   ├── ...
│   └── Dockerfile
├── ...
└── README.md
```

2. Build the Docker image

```sh
docker build -t <user-name>/<image-name> .
```

3. Run the image locally

```sh
docker run -it --rm -p 3000:3000 --name <container-name> <user-name>/<image-name>
```

4. Build and run the the image locally

```sh
docker-compose up
```

5. After the application starts, navigate to
   `http://localhost:3000` in your web browser.

6. Push the image to a private repository

```sh
docker push <user-name>/<image-name>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Contributing

Contributions are welcome! If you have a
suggestion that would make this better, please
fork the repo and create a pull request, please
follow these steps:

1. Fork the Project.
2. Create your Feature Branch
   `git checkout -b feat/feature-name`.
3. Commit your Changes
   `git commit -m 'add: feature-name'`.
4. Push to the Branch
   `git push origin feat/feature-nameure`.
5. Open a Pull Request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]:
 https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]:
 https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]:
 https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]:
 https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]:
 https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]:
 https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]:
 https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]:
 https://github.com/othneildrew/Best-README-Template/issues
[license-shield]:
 https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]:
 https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]:
 https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]:
 https://linkedin.com/in/othneildrew
[product-screenshot]: client/public/MERN.png

<!-- Bages -->

[MongoDB]:
 https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com
[Express.js]:
 https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com
[React.js]:
 https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[Node.js]:
 https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/about
[Vite]:
 https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev
