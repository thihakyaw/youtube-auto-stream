# Set up base node image
FROM buildkite/puppeteer:10.0.0

# Set up the Docker Working Directory
ENV HOME=/usr/app
RUN mkdir -p $HOME
WORKDIR $HOME

COPY app.js $HOME
