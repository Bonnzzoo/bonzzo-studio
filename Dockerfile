FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config (listens on port 8080 for Cloud Run)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the self-contained static site
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
