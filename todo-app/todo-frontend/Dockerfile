FROM node:16 AS base

WORKDIR /usr/src/app

COPY . .

RUN npm ci



FROM base AS test-stage

ENV CI=true

RUN npm run test


FROM test-stage AS build-stage

ENV REACT_APP_BACKEND_URL=api/

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-p", "3000"]

#FROM nginx:1.20-alpine

#COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
