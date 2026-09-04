# YAAI - Modern Website

A beautiful, modern website built with **Claude Design** principles using **Next.js**, **React**, and **Tailwind CSS**.

## 🚀 Features

- **Next.js 14** - Fast, production-ready React framework
- **Tailwind CSS** - Utility-first CSS for rapid UI development
- **Responsive Design** - Mobile-first, works on all devices
- **Claude Design Aesthetic** - Clean, modern, minimalist UI
- **Fast Performance** - Optimized for speed and SEO

## 📋 Tech Stack

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Node.js**: 18+
- **Package Manager**: npm or yarn

## 🛠️ Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone or navigate to the repository
cd YAAI

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 🎨 Customization

### Colors & Design Tokens

Edit `tailwind.config.js` to customize:
- Brand colors
- Typography
- Spacing
- Custom components

### Components

Site components are in the `app/` directory:
- `app/page.js` - Homepage
- `app/layout.js` - Root layout
- `app/globals.css` - Global styles

### Adding Pages

Create new files in the `app/` directory:
```bash
# Creates /about route
app/about/page.js
```

## 📁 Project Structure

```
YAAI/
├── app/
│   ├── layout.js       # Root layout with metadata
│   ├── page.js         # Homepage
│   └── globals.css     # Global Tailwind CSS
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
├── .eslintrc.json      # ESLint rules
└── README.md           # This file
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

- **GitHub Pages**: Configure with `next export`
- **Netlify**: Connect your GitHub repo
- **Docker**: Create a Dockerfile for containerized deployment

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Claude Design Guide](https://www.anthropic.com/news/claude-design-anthropic-labs)

## 📝 License

MIT - Feel free to use this project for your own purposes.

## 💬 Support

For issues or questions, open an issue on GitHub.

---

**Built with Claude Design** ✨
