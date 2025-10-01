# Shivam Tiwari - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Shivam Tiwari, a B.Tech Computer Science Engineering student and aspiring full-stack developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and glassmorphism effects
- **Responsive**: Fully responsive design that works perfectly on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Carousel**: Interactive carousel showcasing featured projects
- **Contact Form**: Functional contact form with toast notifications
- **Social Integration**: Links to GitHub, LinkedIn, and Twitter profiles
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Custom CSS animations with smooth transitions

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── navigation.tsx  # Navigation component
│   │   └── ...            # Other UI components
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero/landing section
│       ├── About.tsx      # About section with skills
│       ├── Projects.tsx   # Projects carousel
│       ├── Contact.tsx    # Contact form and info
│       └── Footer.tsx     # Footer component
├── pages/
│   ├── Index.tsx          # Main portfolio page
│   └── NotFound.tsx       # 404 page
├── assets/                # Images and static assets
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── index.css              # Global styles and design system
└── main.tsx              # App entry point
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

- **Color Palette**: Deep blues with electric blue accents
- **Typography**: Inter font family for modern readability
- **Gradients**: Custom gradients for visual appeal
- **Shadows**: Glow effects and smooth shadows
- **Animations**: Smooth transitions and hover effects
- **Components**: Consistent styling across all components

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shivam-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the portfolio

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## ✉️ Contact Form Email Setup

This project includes a serverless function at `api/sendEmail.js` that uses Nodemailer with Gmail to deliver form submissions to your inbox.

1) Create a Gmail App Password
- Enable 2-Step Verification on your Google account
- Go to Google Account > Security > App passwords
- Create an app password (select Mail and your device), copy the 16-character code

2) Configure environment variables
- Copy `.env.example` to `.env.local` (for Vercel) or `.env` (for local dev)
- Fill in:
   - `MAIL_USER` = your Gmail address
   - `MAIL_PASS` = the Gmail App Password
   - `MAIL_TO` (optional) = recipient address (defaults to MAIL_USER)

3) Deploy notes
- On Vercel: add `MAIL_USER`, `MAIL_PASS`, and optional `MAIL_TO` in Project Settings > Environment Variables
- The frontend posts to `/api/sendEmail` which Vercel resolves to `api/sendEmail.js`

Troubleshooting:
- Ensure the sender is the authenticated Gmail account (we set From to `Portfolio Contact <MAIL_USER>` and `replyTo` to the visitor’s email)
- Check server logs for `Email send error` entries
- Some hosts block SMTP; Vercel + Gmail typically works. For production-grade email, consider providers like Resend, Mailgun, or SendGrid.

## 📱 Sections Overview

### 🏠 Hero Section
- Professional photo
- Introduction and tagline
- Call-to-action buttons
- Smooth scroll indicator

### 👨‍💻 About Section
- Educational background
- Technical skills with categorized badges
- Work experience at IBM
- Key achievements and statistics

### 💼 Projects Section
- Interactive carousel with 3 featured projects:
  - **AI Healthcare Assistant**: Google Gemini API integration
  - **Energy Shield Smart Grid AI**: ML-based theft detection
  - **Emotion-Driven Storyteller**: Real-time emotion recognition
- Detailed project descriptions and technologies
- Links to live demos and source code

### 📧 Contact Section
- Contact information (email, phone, location)
- Social media links
- Interactive contact form
- Professional networking opportunities

## 🔗 Social Links

- **GitHub**: [shivam290204](https://github.com/shivam290204)
- **LinkedIn**: [Shivam Tiwari](https://www.linkedin.com/in/shivam-tiwari-383761292/)
- **Twitter**: [@Shivam0_0Tiwari](https://x.com/Shivam0_0Tiwari)

## 📄 Resume Highlights

- **Education**: B.Tech CSE at HMR Institute of Technology and Management (CGPA: 8.5+)
- **Experience**: AI Intern at IBM (Jul 2025 - Aug 2025)
- **Skills**: C++, Python, JavaScript, React.js, Node.js, AI/ML
- **Achievements**: 100+ DSA problems solved, Multiple web projects

## 🌟 Key Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessible**: Proper ARIA labels and keyboard navigation
- **SEO Friendly**: Optimized meta tags and semantic structure
- **Modern Animations**: Smooth transitions and hover effects
- **Professional Styling**: Clean, modern design that stands out

## 🚀 Deployment

The portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload the `dist` folder to any web server

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Fast Loading**: Optimized images and code splitting
- **Responsive Images**: Proper image optimization for all screen sizes
- **Minimal Bundle Size**: Tree-shaking and efficient imports

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. Open an issue for bug reports or suggestions
2. Fork the repository for your own portfolio inspiration
3. Star the repository if you find it helpful

## 📞 Contact

**Shivam Tiwari**
- Email: shivam290204@gmail.com
- LinkedIn: [Shivam Tiwari](https://www.linkedin.com/in/shivam-tiwari-383761292/)
- GitHub: [shivam290204](https://github.com/shivam290204)

---

*This portfolio showcases the journey of a passionate Computer Science student committed to building innovative solutions and contributing to the tech community.*