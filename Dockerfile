#
# Ubuntu Dockerfile
#
# https://github.com/dockerfile/ubuntu
#

# Pull base image.
FROM ubuntu:14.04

# Install.
RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    curl \
    make
    
# Add files.
ADD root/.bashrc /root/.bashrc
ADD root/.gitconfig /root/.gitconfig
ADD root/.scripts /root/.scripts

# Set environment variables.
ENV HOME /root

# Define working directory.
WORKDIR /root

COPY package.json /root

RUN npm install


COPY . /root

# Define default command.
CMD ["bash"]