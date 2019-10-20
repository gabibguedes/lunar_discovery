# The first instruction is what image we want to base our container on
# We Use an official Python runtime as a parent image
FROM python:3.6

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# create root directory for our project in the container
RUN mkdir /src

# Set the working directory to /music_service
WORKDIR /src

# Copy the current directory contents into the container at /music_service
ADD ./backend /src/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# FROM debian:buster-slim

# EXPOSE 8000

# RUN apt-get update && apt-get install -y --no-install-recommends \
#     python3 \
#     python3-pip \
#     python3-crypto \
#     python3-pyodbc \
#     python3-setuptools

# RUN pip3 install --no-cache-dir toolz

# RUN mkdir src

# COPY backend/ src/

# COPY requirements.txt requirements.txt

# COPY runserver.sh runserver.sh

# RUN pip3 install -r requirements.txt