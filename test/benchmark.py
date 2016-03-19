import urllib2
import json
import time

url = "http://localhost:3000/api?package=com.whatsapp"
start_time = time.time()
for i in range(1000):
    print 'Downloading '+ str(i)
    res = urllib2.urlopen(url).read()
    file = "data-"+str(i)+".json"
    with open(file, 'w') as outfile:
        json.dump(res, outfile)

print("Time of execution %s seconds ..." % (time.time() - start_time))
