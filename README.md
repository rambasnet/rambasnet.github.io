# Ram Banset

## Homepage

- created using Nextjs

## Deploy to GitHub
- install nodejs (v16^) and nextjs
- [https://nextjs.org/learn/basics/deploying-nextjs-app/github](https://nextjs.org/learn/basics/deploying-nextjs-app/github)

```bash
$ conda create -n nodejs python=3.x
$ conda install -c conda-forge nodejs
$ conda activate nodejs
$ npm install
$ npm run dev
$ npm run deploy
```

## Using Docker
- run the bash script `./docker_run.sh` to build and run the docker image
```bash
$ bash docker_run.sh
```
- once on the Docker container, run the following commands
```bash
$ npm run dev
$ npm run deploy
```
