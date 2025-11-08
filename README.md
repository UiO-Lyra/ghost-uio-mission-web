# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/323490be-ae9d-456a-b336-410248083758

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/323490be-ae9d-456a-b336-410248083758) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/323490be-ae9d-456a-b336-410248083758) and click on Share -> Publish.

## Run locally with Docker

You can develop and/or serve this app locally using Docker. You'll need Docker Desktop installed.

### Option 1: Live development (Vite + HMR)

This runs the Vite dev server inside a container and mounts your source code for hot reload.

```powershell
# Start the dev server on http://localhost:5173
docker compose --profile dev up --build

# Stop it when done
docker compose --profile dev down
```

Notes:
- Your local files are bind-mounted into the container, so edits on your host trigger HMR.
- If port 5173 is busy, change the left-hand side of the mapping in `docker-compose.yml`.

### Option 2: Production-like build (static, via NGINX)

This builds the app and serves the static `dist/` files via NGINX.

```powershell
# Build and run the production image, served at http://localhost:8080
docker compose --profile prod up --build

# Stop and remove containers
docker compose --profile prod down
```

What this does:
- Builds the app in a Node image, then copies the output into an `nginx:alpine` image.
- Uses an SPA-friendly NGINX config so client-side routes work (fallback to `index.html`).

### Without Compose (optional)

If you prefer plain Docker commands:

```powershell
# Dev (Vite) – map current folder and expose port
docker build -t ghost-uio-mission-web:dev --target dev . ; \
docker run --rm -it -p 5173:5173 -v ${PWD}:/app -v /app/node_modules ghost-uio-mission-web:dev

# Prod – single static image on port 8080
docker build -t ghost-uio-mission-web:prod --target prod . ; \
docker run --rm -p 8080:80 ghost-uio-mission-web:prod
```

Troubleshooting:
- If you see "address already in use", another process is using that port. Change the host port in the command or `docker-compose.yml`.
- First run may take longer to install dependencies; subsequent runs are cached.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
