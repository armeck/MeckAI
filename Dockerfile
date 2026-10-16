# Ultra-lightweight Nginx container for MeckAI.net
FROM nginx:alpine

# Copy compiled static files into Nginx public root
COPY dist /usr/share/nginx/html

# Custom minimal Nginx configuration with gzip and SPA routing
RUN cat <<'EOF' > /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml text/plain;
    gzip_min_length 256;
}
EOF

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
