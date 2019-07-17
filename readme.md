`git pull origin master`

`npm i`

`node index.js test1` => 1


`node index.js 2test1` => 21

`npm test`


Docker

//to build docker image

docker build -t number . 

//check the docker image

docker images

//to run docker image

 docker run -it number /bin/bash

//to stop docker container

docker stop <CONTAINER_NAME>

//to remove container 

docker rm <CONTAINER_NAME>
