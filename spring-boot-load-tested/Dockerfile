FROM gradle:4.10.3-jdk8-alpine as builder

WORKDIR /usr/src/app
USER root

COPY  . .
RUN gradle build --no-daemon

#######################################

FROM openjdk:8-jre-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build/libs/app.jar .

EXPOSE 8080
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/urandom", "-Xms1536m", "-Xmx1536m", "-Dspring.profiles.active=${JAVA_ENV}", "-jar", "app.jar"]