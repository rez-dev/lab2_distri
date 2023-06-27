from time import sleep
from json import dumps
from kafka import KafkaProducer
import requests

url = 'https://ssd-api.jpl.nasa.gov/sentry.api'
response = requests.get(url)
respuesta = response.json()

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda x: dumps(x).encode('utf-8')
)
for j in range(3):
    print(j)
    data = respuesta['data'][j]
    producer.send('topic_test', value=data)
    sleep(0.5)