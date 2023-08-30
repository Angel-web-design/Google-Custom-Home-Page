import requests as re
import os
response = re.get(
    'https://www.google.com/search?q=react&oq=react&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCQgCECMYJxiKBTIKCAMQABixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDINCAYQABiDARixAxiABDIGCAcQRRhB0gEIMTQ3OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'
)
html = response.text

ruta_archivo = os.path.join('E:\\','Archivos','Code','Code','JavaScript','Works','Custom-g-page','src','Python', 'temp', 'result.txt')

file = open(ruta_archivo, "w")
file.write(html + os.linesep)
file.close()
print('success')
