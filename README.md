## About The Project

This application intends to help people create
their own MERN app.

### Built With

- [![MongoDB][MongoDB]][MongoDB-url]
- [![Express][Express.js]][React-url]
- [![React][React.js]][React-url]
    <!-- * [![Next][Next.js]][Next-url] -->
    <!-- * [![Vue][Vue.js]][Vue-url] -->
    <!-- * [![Angular][Angular.io]][Angular-url] -->
    <!-- * [![Svelte][Svelte.dev]][Svelte-url]
  <!-- - [![Laravel][Laravel.com]][Laravel-url] -->
  <!-- - [![Bootstrap][Bootstrap.com]][Bootstrap-url] -->
  <!-- - [![JQuery][JQuery.com]][JQuery-url] -->

### Getting Started

To get started with the project, follow these
steps:

1. Clone this repository to your local machine:

`git clone <repository-url>`

2. Change directory to the project folder:

`cd mern-tstarter`

3. Install the project dependencies:

`npm install`

4. Start the development server:

`npm run dev`

5. Open your web browser and navigate to
   `http://localhost:3000` to access the
   application.

### Compose sample

1. Project structure:

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

2. Build the Docker image:

```sh
docker build -t <user-name>/<image-name> .
```

3. Run the image locally:

```sh
docker run -it --rm -p 3000:3000 --name <container-name> <user-name>/<image-name>
```

4. Build and run the the image locally:

```sh
docker-compose up
```

5. After the application starts, navigate to
   `http://localhost:3000` in your web browser.

6. Push the image to a private repository:

```sh
docker push <user-name>/<image-name>
```

### Contributing

Contributions are welcome! If you have a
suggestion that would make this better, please
fork the repo and create a pull request, please
follow these steps:

1. Fork the Project
2. Create your Feature Branch
   `git checkout -b feat/feature-name`
3. Commit your Changes
   `git commit -m 'add: feature-name'`
4. Push to the Branch
   `git push origin feat/feature-nameure`
5. Open a Pull Request

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

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
[product-screenshot]: images/screenshot.png
[Next.js]:
 https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Vue.js]:
 https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]:
 https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]:
 https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]:
 https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]:
 https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]:
 https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

<!--  -->

[MongoDB]:
 https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com
[Express.js]:
 https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com
[React.js]:
 https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]:
 https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/about
[Vite]:
 https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev
