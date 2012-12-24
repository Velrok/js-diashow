#!/usr/bin/env python
import os
import json
import qrcode

print "Content-type: application/json"
print

image_dir = "images/"
qr_dir = "qrcodes/"
webbase = "http://192.168.1.108:8000/"

def generate_qr(destination, content):
	qr = qrcode.QRCode()
	qr.add_data(content)
	qr.make()
	qr.make_image().save(destination)

entries = []
for d in os.listdir("images/"):
	if not ( d.lower().endswith('png')
					 or d.lower().endswith('jpg')
					 or d.lower().endswith('jpeg') ):
		continue;

	e = {}
	image_url = "{}{}".format(image_dir, d)
	e['image'] = image_url

	qr = "{}{}".format(qr_dir, d)
	if not os.path.exists(qr):
		# print image_url
		generate_qr(qr, webbase + image_url)

	e['qrcode'] = "{}{}".format(qr_dir, d)
	entries.append(e)

# order old -> new
entries.sort(key=lambda f: os.stat(f['image']).st_mtime)

print json.dumps(entries)