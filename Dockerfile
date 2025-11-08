# Multi-stage Dockerfile for Vite + React + TypeScript app
# Base image
FROM node:22-alpine AS base
WORKDIR /app

# Install dependencies separately for better caching
COPY package.json ./
# Copy lock files if present (npm, pnpm, yarn, bun)
# They are optional; this keeps layers cacheable regardless of the manager used
COPY package-lock.json* yarn.lock* pnpm-lock.yaml* bun.lockb* ./

# Default to npm if no lockfile dictates a manager
# npm ci fails without a lockfile, so fall back to npm install
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then corepack enable && yarn install --frozen-lockfile; \
    elif [ -f bun.lockb ]; then npm install; \
    else npm install; fi

# ------------------------------------------------------
# Development image (with HMR)
FROM base AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 5173
# Vite must bind to 0.0.0.0 inside Docker
CMD ["npm","run","dev","--","--host","0.0.0.0","--port","5173"]

# ------------------------------------------------------
# Build stage (production)
FROM base AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

# ------------------------------------------------------
# Production runtime using NGINX to serve static files
FROM nginx:1.27-alpine AS prod
# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
