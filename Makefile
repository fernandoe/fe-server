docker-build:
	docker build -t fernandoe/fe-server:local .

docker-run:
	docker run -it --rm -p 80:80 fernandoe/fe-server:local

compose-build:
	docker-compose build

compose-up:
	docker-compose up

compose-stop:
	docker-compose stop

compose-up-dev:
	docker-compose up mysql-conta mysql-pessoa conta pessoa

compose-rm:
	docker-compose rm

ng-build:
	ng build --prod
