#!/usr/bin/env python

import os
import json

print "Content-type: application/json"
print

image_dir = "images/"

def prefix_with_image_dir(x):
	return "{}{}".format(image_dir, x)

print json.dumps(map(prefix_with_image_dir, os.listdir("images/")))