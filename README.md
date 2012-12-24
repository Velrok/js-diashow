# description

This is a _very_ simple diashow implementation based on python and jquery, where python hosts a very simple CGIHttpServer that serves all images located in the images subfolder.

## key feature

- It automaticaly fetches a new list of images from the server every x secounds in the backgroud. This way it also displays new images.
- It supports different index itterators, effectively controlling which images to show. By using the IncreaseProbabilityIndexIterator newer images are shown more fequently.

# requirements

- python 2.7
	- pip
	- qrcode
	- PIL ( python image library )

- modern browser ;)

# installation

1. checkout the repository
2. run `./install.sh` ( this will install all the requires python modules )
3. start the python webserver `./server.sh` this will start a python server on port 8000
4. put images into the images subfolder ( create it if not present )