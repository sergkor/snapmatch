# 🔍 SNAP - Visual Search Assistant

**S**earch/**N**avigate **A**mazon **P**roduct Visual Search Assistant

A modern web application built with React, TypeScript, and Vite that allows users to upload images and discover products through visual search technology.

![SNAP Demo](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646cff)

## ✨ Features

- 📸 **Drag & Drop Image Upload** - Intuitive file upload with visual feedback
- 🔄 **Base64 Encoding** - Automatic image encoding for API integration
- 🔍 **Visual Search Ready** - Prepared for integration with visual search APIs
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI/UX** - Beautiful dark theme with smooth animations
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🛡️ **Type Safety** - Full TypeScript implementation
- 🔌 **API Integration Ready** - Structured for easy external API integration

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd snapmatch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Local: http://localhost:5173/
   - Network: Use the network URL shown in terminal

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
snapmatch/
├── src/
│   ├── components/
│   │   ├── ImageUpload.tsx      # Drag & drop image upload component
│   │   └── ProductDisplay.tsx   # Product results display component
│   ├── services/
│   │   └── api.ts              # API integration layer (with mock data)
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── types.ts                # TypeScript type definitions
│   ├── index.css               # Global styles
│   └── main.tsx                # Application entry point
├── dist/                       # Production build output
├── public/                     # Static assets
├── package.json               # Project dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── API_INTEGRATION_GUIDE.md   # Detailed API integration guide
```

## 🔌 API Integration

The application is currently running with **mock data** for demonstration purposes. To integrate with a real visual search API:

1. **Choose your API provider** (Google Vision, AWS Rekognition, etc.)
2. **Get API credentials** from your chosen provider
3. **Update the API service** in `src/services/api.ts`
4. **Set environment variables** for API keys
5. **Deploy** your updated application

### Supported API Providers

- 🟢 **Google Cloud Vision API** - Object detection, OCR, logo detection
- 🟢 **Amazon Rekognition** - Object and scene detection
- 🟢 **Microsoft Computer Vision** - Object detection, OCR, brand detection
- 🟢 **Clarifai API** - Custom models, product recognition
- 🟢 **Imagga API** - Image tagging, categorization

> 📖 **Detailed Integration Guide**: See `API_INTEGRATION_GUIDE.md` for step-by-step instructions.

## 🏗️ Building for Production

Create a production build with optimized static files:

```bash
npm run build
```

This generates optimized files in the `dist/` directory:
- `index.html` - Main HTML file
- `assets/` - Bundled and minified CSS/JS files

## 🌐 Deployment

The built application (`dist/` folder) can be deployed to any static hosting service:

### Popular Hosting Options

| Platform | Instructions |
|----------|-------------|
| **Vercel** | `npm i -g vercel` → `vercel --prod` |
| **Netlify** | Drag & drop `dist/` folder to Netlify |
| **GitHub Pages** | Push `dist/` contents to `gh-pages` branch |
| **AWS S3** | Upload `dist/` folder to S3 bucket |
| **Traditional Hosting** | Upload `dist/` contents via FTP |

### Environment Variables

For production deployment, set these environment variables:

```bash
VITE_API_BASE_URL=https://your-visual-search-api.com/api
VITE_API_KEY=your-actual-api-key
VITE_API_TIMEOUT=30000
```

## 🎯 How It Works

1. **📤 Upload**: User drags/drops or selects an image file
2. **🔄 Encode**: Image is automatically converted to base64 format
3. **📡 Analyze**: Base64 data is sent to visual search API
4. **🛍️ Display**: Matching products are displayed with details
5. **🔗 Action**: User can view products or add to cart

## 🔧 Technologies Used

### Core Technologies
- **React 18.2.0** - Modern React with hooks and concurrent features
- **TypeScript 5.2.2** - Type-safe JavaScript development
- **Vite 5.2.0** - Fast build tool and development server

### Development Tools
- **ESLint** - Code quality and consistency
- **CSS3** - Modern styling with flexbox and grid
- **File API** - Browser file handling and base64 encoding

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the `API_INTEGRATION_GUIDE.md` for API-related questions
2. Review the project structure and component documentation
3. Open an issue on GitHub for bug reports or feature requests

## 🎉 Demo

The application includes a fully functional demo with mock data. Simply:

1. Start the development server (`npm run dev`)
2. Upload any image file
3. Watch the visual search simulation in action
4. See sample product results displayed

---

**Built with ❤️ for visual search and product discovery**
