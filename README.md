# ZYX Group Ads

A modern React application built with Next.js and shadcn/ui components for advertising management.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **shadcn/ui** components with Tailwind CSS
- 📱 **Responsive design** that works on all devices
- 🌙 **Dark mode** support
- 🔧 **TypeScript** for type safety
- ⚡ **Turbopack** for fast development

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd zyxgroupads
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles with shadcn/ui variables
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   └── ui/            # shadcn/ui components
└── lib/               # Utility functions
    └── utils.ts       # cn() utility for class merging
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Customization

### Adding New shadcn/ui Components

You can add more shadcn/ui components by running:

```bash
npx shadcn@latest add [component-name]
```

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. You can customize the theme by modifying the CSS variables in `src/app/globals.css`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.