# 🎨 Zolink Templates

**Craft Stunning, Customizable Profile Pages for the Social Web**

[![GitHub stars](https://img.shields.io/github/stars/ishikki-akabane/zolink?style=social)](https://github.com/ishikki-akabane/zolink)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/ishikki-akabane/zolink)](https://github.com/ishikki-akabane/zolink/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/ishikki-akabane/zolink)](https://github.com/ishikki-akabane/zolink/contributors)

> Build breathtaking profile pages with our open-source collection of React components. Designed for [Zolink](https://zolink.site), the platform that redefines your online presence.

## 🌟 What is Zolink Templates?

Zolink Templates is an open-source library of responsive, customizable profile page components built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Our templates empower developers and users to create visually stunning, accessible, and performant profile pages for the [Zolink platform](https://zolink.site). Whether you're showcasing your portfolio, social links, or personal brand, Zolink Templates makes it effortless and elegant.

**🌐 Live Demo**: [zolink.site/templates](https://zolink.site)

## 🚀 Features

- **🎨 Beautiful Designs**: Modern, trend-aware templates with customizable themes.
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile.
- **⚡ TypeScript-Powered**: Type-safe code with IntelliSense support for developers.
- **🎯 Highly Customizable**: Easily tweak colors, layouts, and functionality.
- **♿ WCAG-Compliant**: Accessible designs with proper ARIA labels and keyboard navigation.
- **📦 Modular Architecture**: Mix and match components or use complete templates.
- **🔄 Dynamic Data**: Supports real-time data updates for profiles and social links.
- **⚡ Optimized Performance**: Lazy loading, memoization, and image optimization.

## 📋 Data Model

Each template adheres to a standardized data structure for consistency and ease of integration:

```typescript
interface User {
  uid: string;
  username: string;
  likes: number;
  views: number;
  profile: ProfileData;
  createdAt: number;
  updatedAt: number;
}

interface ProfileData {
  displayName: string;
  bio: string;
  avatar: string;
  theme: string;
  accentColor: string;
  images: string[];
  socialLinks: SocialLink[];
}

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  title: string;
  icon: React.ReactNode; // Supports Lucide or Simple Icons
  color: string;
  visible: boolean;
}
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: v18 or higher
- **Next.js**: v14 or higher
- **TypeScript**: v5 or higher
- **Tailwind CSS**: v3 or higher
- **pnpm** (recommended for package management)

## 🤝 Contributing

We welcome contributions from developers, designers, and enthusiasts of all skill levels! Whether you're fixing bugs, enhancing documentation, or creating new templates, your contributions help make Zolink Templates better for everyone.

### Contribution Workflow
1. **Fork the Repository**: Click the "Fork" button on GitHub.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-template-name
   ```
3. **Develop Your Template**:
   - Follow the [Template Guidelines](#template-guidelines) below.
   - Ensure responsiveness and accessibility.
   - Test across devices and screen sizes.
4. **Commit Changes**:
   ```bash
   git commit -m "Add YourTemplateName with responsive design and accessibility"
   ```
5. **Submit a Pull Request**:
   - Provide a detailed description of your changes.
   - Include screenshots or a live demo (if possible).
   - Reference related issues (e.g., `#123`).

### Template Guidelines

#### File Structure
Organize your template in the following structure:
```
templates/
├── YourTemplateName/
│   ├── index.tsx              # Main template component
│   ├── preview.png            # Screenshot/images for showcase
│   ├── README.md              # Optional: Template-specific documentation
│   ├── components/            # Optional: Reusable sub-components
│   └── styles/                # Optional: Custom CSS or Tailwind overrides
```

#### **Code Standards**
- ✅ Use TypeScript with proper types
- ✅ Follow the existing component interface
- ✅ Use Tailwind CSS for styling
- ✅ Ensure responsive design (mobile-first)
- ✅ Add proper accessibility attributes
- ✅ Include error handling for missing data

#### **Component Props**
```tsx
interface YourTemplateProps {
  profile: User  // Use the standard User interface
}

export function YourTemplate({ profile }: YourTemplateProps) {
  // Your component logic
}
```

#### **Required Features**
- 📱 Mobile responsive design
- 🔗 Social links integration
- 💖 Like button functionality
- 📤 Share functionality
- 🖼️ Avatar/image display
- 📝 Bio/description support

#### **Best Practices**
- Use meaningful component and variable names
- Add comments for complex logic
- Optimize for performance (lazy loading, memoization)
- Handle edge cases (missing data, long text)
- Test across different screen sizes
- Validate accessibility with screen readers

## 📚 Documentation

### Component API

Each template component accepts a `profile` prop with the standard User interface:

```tsx
<YourTemplate profile={userData} />
```

### Styling

Templates use Tailwind CSS with our custom design system:

- **Colors**: Consistent color palette with theme support
- **Typography**: Responsive text scales
- **Spacing**: Consistent margin and padding
- **Components**: Reusable UI components from shadcn/ui

## 🎨 Design Principles

Our templates follow these design principles:

- **Simplicity** - Clean, uncluttered interfaces
- **Accessibility** - Usable by everyone
- **Performance** - Fast loading and smooth interactions
- **Consistency** - Unified design language
- **Flexibility** - Easy to customize and extend

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).
- UI components powered by [shadcn/ui](https://ui.shadcn.com/).
- Icons from [Lucide React](https://lucide.dev/) and [Simple Icons](https://simpleicons.org/).
- Special thanks to our amazing community of contributors!

## 🔗 Links

- **Website**: [zolink.site](https://zolink.site)
- **Developer**: [github.com/ishikki-akabane](https://github.com/ishikki-akabane)
- **Issues**: [Report a bug or request a feature](https://github.com/ishikki-akabane/zolink/issues)

## 📞 Support

Need help? Have questions?

- 💬 **Discussions**: [GitHub Discussions](https://github.com/ishikki-akabane/zolink/discussions)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/ishikki-akabane/zolink/issues)
- 📧 **Email**: [Contact us](mailto:ishikkiiii@gmail.com)

---

<div align="center">

**Crafted with ❤️ by the Zolink Community**

[⭐ Star us on GitHub](https://github.com/ishikki-akabane/zolink) | [🚀 Try Zolink](https://zolink.site)

</div>