FROM nginx:1.24.0
# WORKDIR /app
# COPY . /app
COPY devops-config.config /etc/nginx/conf.d
COPY . /usr/share/nginx/html