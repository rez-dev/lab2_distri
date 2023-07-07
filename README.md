# lab2_distri
Laboratorio 2 Sistemas Distribuidos

Hay que descomprimir el archivo del docker, git le pone color con el tema de que es un modulo

Despues de descomprimirlo, hay que abrir un terminal y ejecutar;

docker-compose -f docker-compose-expose.yml up

en la carpeta de docker.

Con eso deberia de levantar el docker que contiene zookeper y kafka.


# Para hacer funcionar carpeta TEST
El siguiente comando no lo he probado si es opcional
docker build -t cluster-apache-spark:3.0.2 .

docker-compose -f docker-compose-expose.yml up


# LINKS
Link para crear contenedor con spark
https://cloudinfrastructureservices.co.uk/create-apache-spark-docker-container-using-docker-compose/

Link para probar pipeline con todo incluido
https://medium.com/bentego-teknoloji/apache-spark-structured-streaming-via-docker-compose-3e1f146384b9