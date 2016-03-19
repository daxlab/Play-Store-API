import urllib2
import json

url = "http://localhost:3000/api?package=com.whatsapp"

for i in range(5):
    print 'Downloading '+ str(i)
    res = urllib2.urlopen(url).read()
    file = "data-"+str(i)+".json"
    with open(file, 'w') as outfile:
        json.dump(res, outfile)
