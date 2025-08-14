# Full-Stack Next.js Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion. Features MongoDB integration for dynamic content management and a beautiful, animated user interface.

## 🚀 Features

- **Next.js 14 App Router** - Latest Next.js with App Router for optimal performance
- **TypeScript** - Full type safety and better development experience
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Smooth animations and transitions
- **MongoDB Integration** - Dynamic content from database (no hardcoding)
- **Fully Responsive** - Works perfectly on all devices
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Dark Mode** - Toggle between light and dark themes
- **Modern UI/UX** - Clean, professional design with smooth interactions

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal information and background
3. **Skills** - Technical skills with proficiency indicators
4. **Projects** - Portfolio showcase with filtering
5. **Experience** - Work history with timeline
6. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, Custom CSS
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   MONGO_URL=mongodb://localhost:27017/portfolio
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Set up MongoDB**

   - Install MongoDB locally or use MongoDB Atlas
   - Create a database named `portfolio`
   - Run the seed script to populate with sample data:

   ```bash
   node scripts/seed-data.js
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

### About Collection

```javascript
{
  name: string,
  title: string,
  location: string,
  email: string,
  phone?: string,
  bio: string,
  avatar: string,
  socialLinks: {
    github?: string,
    linkedin?: string,
    twitter?: string,
    instagram?: string
  }
}
```

### Skills Collection

```javascript
{
  name: string,
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other',
  proficiency: number, // 1-100
  icon?: string
}
```

### Projects Collection

```javascript
{
  title: string,
  description: string,
  technologies: string[],
  image: string,
  githubUrl?: string,
  liveUrl?: string,
  featured: boolean,
  createdAt: Date
}
```

### Experience Collection

```javascript
{
  company: string,
  position: string,
  location: string,
  startDate: Date,
  endDate?: Date,
  current: boolean,
  description: string[],
  technologies: string[]
}
```

## 🎨 Customization

### Colors and Theme

- Edit `tailwind.config.js` to customize colors, fonts, and animations
- Modify `app/globals.css` for additional custom styles

### Content

- Update the seed script (`scripts/seed-data.js`) with your information
- Run the seed script again to update the database

### Components

- Each section is a separate component in the `components/` directory
- Modify components to match your design preferences

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Connect GitHub repository and set environment variables
- **DigitalOcean App Platform**: Deploy with Docker support

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `node scripts/seed-data.js` - Seed database with sample data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js 14, TypeScript, and TailwindCSS
