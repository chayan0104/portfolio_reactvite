#without ngnix

#FROM node:20-alpine
#WORKDIR /app
#COPY . .
#RUN npm ci && npm run build
#RUN npm install -g serve
#CMD ["serve", "-s", "dist", "-l", "3000"]
# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies (better caching)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the Vite app (outputs to /dist)
RUN npm run build


# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: SPA routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
