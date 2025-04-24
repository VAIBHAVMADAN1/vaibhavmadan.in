# vaibhavmadan.in
My personal portfolio website built with Next.js

## Features

- Glassmorphism effects
- Dark/Light mode support
- GitHub projects integration via github API
- Docker support for development and production


## Running Locally

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker (optional)

### Local Development

```bash
# Clone the repository
git clone https://github.com/VAIBHAVMADAN1/vaibhavmadan.tech
cd vaibhavmadan.tech

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Using Docker

```bash
# Development
docker-compose up web

# Production
docker-compose up web-prod
```

The development server will be available at http://localhost:3000.

## 📦 Project Structure

```
vaibhavmadan.tech/
├── public/              # Static files
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── components/ # React components
│   │   ├── icons/     # Custom icons
│   │   └── page.tsx   # Main page component
│   └── ...
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
└── ...
```
