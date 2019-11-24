Load Testing Workbench
---

Status: WIP

I currently have most of the base infrastructure in place for the hapijs version of the application.
You can preview it using the following steps:

1. cd `hapi-load-tested`
2. `docker-compose up --build`

It will take a while to load as there are several filebeat and metricbeat dashboards that get loaded into kibana.