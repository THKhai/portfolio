# TEMPLATE — static SPA (Vite / CRA / plain HTML) served by nginx on port 80.
# Copy to project root as Dockerfile, plus templates/nginx.conf.
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Build-time public vars (VITE_*) come in as build args from compose
ARG VITE_GETFORM_URL
ENV VITE_GETFORM_URL=$VITE_GETFORM_URL
RUN npm run build

FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/healthz || exit 1
