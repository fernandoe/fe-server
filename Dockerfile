FROM node:6.13.1-alpine as builder
COPY package.json package-lock.json ./
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .
RUN $(npm bin)/ng build --prod



FROM nginx:1.13.9-alpine
COPY --from=builder /ng-app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
