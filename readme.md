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
docker run -d -it -p 80:8080 --name=num number npm run ec2 -- --host=0.0.0.0

//to stop docker container
docker stop <CONTAINER_NAME>

//to remove container 
docker rm <CONTAINER_NAME>
