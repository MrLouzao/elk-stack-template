# ELK Stack Template
 Template project to test the ELK stack, up with Docker and configure your own filebeats.


## Project structure
**filebeat.docker.yml**: configuration file for your filebeat. This beat is configured with correspondent settings to read a log file and put the result on your index. When you start a new project, a filebeat must be configured.

**logger.js**: node app that writes output file in json format on folder *logs/log.out*. This file will contain a json object per line. This lines will be send to Elasticsearch endpoint automatically by using the correspondant filebeat.

**docker-compose.yaml**: defines all the containers for this test: Kibana, Elasticsearch and Filebeat. The Filebeat instance will be configured with the file *filebeat.docker.yml*.

## Test with Docker

1. Check that logs directory is already created on your project directory.
2. Run docker compose:
```bash
$ docker-compose up
```
3. Init your app that generates the log file:
```bash
$ node logger.js
```

You can check that your indexes are fulfilled with data from logger by just simply calling the next url:
```bash
$ curl -XGET http://localhost:9200/_cat/indices?v
```

Access to your kibana instance on your browser: http://localhost:5601/

## How to mount your own filebeat for your app

When you intend to deploy your app and process the correspondant logs, you must create a dockerfile using the filebeat image as base.

After that, modify docker-compose file to deploy your app. Each filebeat instance must have a custom configuration file!

If you have any doubts about this process, ask to Louzao.


## Built With

* [Node](https://nodejs.org/en/) - The web framework used
* [NPM](https://www.npmjs.com/get-npm) - Dependency Management
* Docker
* ELK Stack

## Authors

* **Luis Miguel Louzao**

See also the list of [contributors](https://github.com/MrLouzao/elk-stack-template/contributors) who participated in this project.
