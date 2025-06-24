# EventEase 🎉

A comprehensive event planning platform built with React, TypeScript, and Tailwind CSS. EventEase simplifies the process of organizing various types of events, from weddings and birthdays to corporate seminars and workshops.

[![Deploy to GitHub Pages](https://github.com/nour-6687/event-ease/actions/workflows/deploy.yml/badge.svg)](https://nour-6687.github.io/event-ease/)

## 🌟 Features

### Event Management
- **Multi-Event Support**: Wedding, Engagement, Birthday, Graduation, Party, Seminar, Workshop, and Custom events
- **Service Selection**: Choose from various services including venues, catering, entertainment, photography, and more
- **Venue Booking**: Browse and book venues with detailed information and package options
- **Real-time Booking**: Interactive booking system with date selection and guest management

### User Experience
- **Responsive Design**: Mobile-first approach with seamless cross-device compatibility
- **Interactive UI**: Smooth animations and transitions using custom CSS animations
- **Dark Theme**: Modern dark theme with purple and pink gradient accents
- **Search & Filter**: Advanced filtering options for venues and services

### Guest Management
- **Guest Lists**: Create and manage guest lists with contact information
- **QR Code Generation**: Generate individual QR codes for guests
- **Event QR Codes**: Create event-specific QR codes for easy access
- **Invitation System**: Send digital invitations with tracking

### Additional Features
- **Event Gallery**: Upload and manage photos, videos, and audio files
- **Payment Integration**: Secure payment processing with multiple payment methods
- **Chat Support**: Integrated chatbot for customer assistance
- **Notifications**: Real-time notification system
- **User Profiles**: Comprehensive user profile management
- **Business Registration**: Platform for businesses to register and offer services

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **QR Codes**: qrcode.react
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nour-6687/event-ease.git
   cd event-ease
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── about/          # About page components
│   ├── auth/           # Authentication components
│   ├── business/       # Business registration components
│   ├── chat/           # Chat and support components
│   ├── contact/        # Contact form components
│   ├── events/         # Event-related components
│   ├── home/           # Homepage components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── legal/          # Legal pages components
│   ├── support/        # Support and FAQ components
│   └── wedding/        # Event-specific components
├── data/               # Static data and configurations
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── styles/             # Custom CSS and animations
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎨 Key Components

### Event Planning Flow
1. **Event Type Selection** - Choose from 8+ event types
2. **Service Selection** - Select required services for your event
3. **Venue Booking** - Browse and book venues with packages
4. **Guest Management** - Manage invitations and guest lists
5. **Payment Processing** - Secure checkout and booking confirmation

### Venue Categories
- **Wedding**: Halls, dress shops, beauty centers, barber shops, photographers
- **Corporate**: Conference rooms, workspaces, catering, equipment rental
- **General**: Entertainment, transportation, decoration, photography

## 📱 Responsive Design

EventEase is built with a mobile-first approach:
- **Mobile**: Optimized for smartphones and tablets
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience with multi-column layouts
- **Large Screens**: Optimized for wide displays

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configurations:
- Custom color palette with purple and pink gradients
- Responsive breakpoints
- Custom animations and transitions

### Vite Configuration
- React plugin for fast development
- Optimized build for production
- GitHub Pages deployment configuration

## 🌐 Deployment

The application is deployed on GitHub Pages at: https://nour-6687.github.io/event-ease/

### Deployment Process
1. Build the project: `npm run build`
2. Deploy to GitHub Pages: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🔗 Links

- **Live Demo**: [EventEase](https://nour-6687.github.io/event-ease/)
- **Repository**: [GitHub](https://github.com/nour-6687/event-ease)

## 📞 Support

For support and questions:
- Use the in-app chat feature
- Visit the FAQ page
- Contact through the support page

---

**EventEase** - Making event planning effortless and enjoyable! 🎊
