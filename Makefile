docker-build:
	docker build -t fernandoe/fe-server:local .

docker-run:
	docker run -it --rm -p 80:80 fernandoe/fe-server:local
