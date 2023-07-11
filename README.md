# Laboratorio 2 Sistemas Distribuidos
## Ejecución del proyecto

Abrir un terminal en la carpeta clonada del respositorio y posicionarse en la carpeta app

```
cd app
```

(Opcional, dado que Spark aún no funciona) 
Luego ejecutar el siguiente comando para generar una imagen para Spark
```
sudo docker build -t cluster-apache-spark:3.0.2 .
```
Luego levantar todos los contenedores kafka, zookeper, mongodb
```
sudo docker-compose -f docker-compose-expose.yml up -d
```
Luego dependiendo de la versión de python se utiliza el comando python o python3 etc
```
python producerAPI.py
```
```
python consumerAPI.py
```
Los cambios en la base de datos se pueden revisar con MongoDB Compass con localhost o la ip de la máquina virtual y el puerto 27017
