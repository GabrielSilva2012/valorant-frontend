FROM node:18.16.1-alpine as build
WORKDIR /valorant-frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /valorant-frontend/dist/valorant-frontend /usr/share/nginx/html
EXPOSE 80
