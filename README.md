#GUI for sport bets 


#### Get started 
##### Requirements
You need to install *nodejs*  [here](https://nodejs.org/en/download/) *npm* is installed with node   
Project was done with *node* version **v10.16.3**  and *npm* version **6.9.0**  
You'll need to install the angular CLI too [here](https://cli.angular.io/)  (``npm install -g @angular/cli``)

##### Run locally 
```
npm install
npm start
```

### Build and Deploy with AWS CodePipeline & S3
Here is a link to know more about the deployment : https://www.youtube.com/watch?v=CbldTE7xGy8
#### Pipeline

We use a pipeline on CodePipeline  
The pipeline is triggered with a Github push (using github hooks)

![pipeline](docs/pipeline.png)

#### Build
[![Build Status](https://codebuild.eu-west-3.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiRnhpV3U2ZHhaWCtZMlIyMGw0OTNNUEtFWU1leDA3U2wwVjVyeVdBK0kyOUgzclhTQkN4azFWcWZpTVNCNUxEakZ1N011TEpNNEVQVDVZMFViT0pDdzg0PSIsIml2UGFyYW1ldGVyU3BlYyI6Ink3V1dNcS90M2dvQzRCcEUiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://eu-west-3.console.aws.amazon.com/codesuite/codebuild/projects/bets-gui/)

The buildspec file will generate an archive with the dist folder content (html,css and js)

```
version: 0.2
phases:
  install:
    runtime-versions:
      nodejs: 10
    commands:
      # Update libs
      - apt-get update
      # Headless Chrome
      - apt-get install -y fonts-liberation libasound2 libnspr4 libnss3 libx11-xcb1 xdg-utils libxss1 libappindicator1 libindicator7
      - wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
      - dpkg -i google-chrome*.deb
      - npm install -g @angular/cli
  pre_build:
    commands:
      - npm install
  build:
    commands:
      - npm run build -aot
artifacts:
  files:
    - '**/*'
  base-directory: 'dist*'
  discard-paths: no
```

The build is done on a Linux/ubuntu server. Here is the configuration : 

![build](docs/build.png)

#### Deploy 

The deployement is done on an S3 bucket that had to be set public. 
You also need to allow code pipeline to access the S3 bucket

![deploy](docs/deploy.png)





