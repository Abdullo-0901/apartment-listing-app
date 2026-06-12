# 🏠 Apartment Listing App

A responsive apartment rental application built with **Next.js**, **TypeScript**, and **JSON Server**.

## ✨ Features

- Browse apartment listings
- View apartment details
- Filter apartments by room count
- Filter apartments by minimum and maximum price
- Responsive design
- Mobile filter sheet
- Loading states
- Empty states
- Server-side data fetching

## 🛠 Tech Stack

- Next.js 16
- React 19
- TypeScript
- JSON Server
- CSS Modules
- Shadcn UI
- Radix UI

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Create environment variables

Create a `.env` file from `.env.dist`:

```bash
cp .env.dist .env
```

### 3. Start the mock API server

```bash
pnpm run run-server
```

The API will be available at:

```text
http://localhost:3002
```

### 4. Start the development server

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## 📦 Production

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## 📜 Available Scripts

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `pnpm dev`            | Start development server              |
| `pnpm build`          | Create production build               |
| `pnpm start`          | Start production server               |
| `pnpm lint`           | Run ESLint                            |
| `pnpm run run-server` | Start JSON Server                     |
| `pnpm compile`        | Run TypeScript compiler in watch mode |

## 📁 Project Structure

```text
src/
├── app/
├── components/
│   ├── feature/
│   └── ui/
├── hook/
├── lib/
└── types/

public/
└── images/

db.json
.env.dist
```

## 📝 Notes

- Make sure the JSON Server is running before starting the Next.js application.
- Create a `.env` file from `.env.dist` before running the project.
- The application expects the mock API to be available on port `3002`.
  x
