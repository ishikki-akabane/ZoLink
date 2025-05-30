# 🎨 Zolink Templates

**Beautiful, customizable profile templates for the Social Web**

[![GitHub stars](https://img.shields.io/github/stars/ishikki-akabane/zolink?style=social)](https://github.com/ishikki-akabane/zolink)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> Create stunning profile pages with our collection of open-source React components. Built for [Zolink](https://zolink.site) - the platform that transforms your online presence.

## ✨ What is Zolink Templates?

Zolink Templates is an open-source collection of beautiful, responsive profile page components built with Nextjs, TypeScript, and Tailwind CSS. Each template is designed to showcase personal profiles, social links, and content in unique, visually appealing ways.

**🌐 Live Demo:** [zolink.site](https://zolink.site)

## 🚀 Features

- **🎨 Modern Design** - Clean, professional templates following current design trends
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- **🌙 Dark Mode Support** - Built-in light/dark theme switching
- **⚡ TypeScript Ready** - Full type safety and IntelliSense support
- **🎯 Customizable** - Easy to modify colors, layouts, and components
- **♿ Accessible** - WCAG compliant with proper ARIA labels
- **📦 Modular** - Use individual components or complete templates

## 📋 Template Structure

Each template follows a consistent structure and supports the following data model:

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
    icon: any;
    color: string;
    visible: boolean;
}
```

## 🎯 Available Templates

### Minimalist Profile
A clean, modern template focusing on simplicity and readability.

**Features:**
- Clean typography and spacing
- Social links grid layout  
- Interactive like and share buttons
- Responsive design

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- Nextjs
- TypeScript
- Tailwind CSS


## 🤝 Contributing

We welcome contributions from developers of all skill levels! Whether you're fixing bugs, improving documentation, or creating new templates, your help makes Zolink Templates better for everyone.

### How to Contribute

1. **Fork the repository**

2. **Create a feature branch**

3. **Create your template**
   - Follow our [Template Guidelines](#-template-guidelines)
   - Ensure responsive design
   - Add proper TypeScript types

4. **Submit a Pull Request**
   - Provide a clear description
   - Include screenshots/demos
   - Reference any related issues


### 📐 Template Guidelines

When creating a new template, please follow these guidelines:

#### **File Structure**
```
templates/
├── YourTemplateName/
│   ├── index.tsx              # Main component
│   ├── components/            # Sub-components (if needed)
│   ├── README.md             # Template documentation
│   └── preview.png           # Screenshot for showcase
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

- Built with [Nextjs](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/) and [Simple Icons](https://simpleicons.org/)

## 🔗 Links

- **Website**: [zolink.site](https://zolink.site)
- **Documentation**: [docs.zolink.site](https://docs.zolink.site)
- **GitHub**: [github.com/ishikki-akabane](https://github.com/ishikki-akabane)
- **Issues**: [Report a bug or request a feature](https://github.com/ishikki-akabane/zolink/issues)

## 📞 Support

Need help? Have questions?

- 💬 **Discussions**: [GitHub Discussions](https://github.com/ishikki-akabane/zolink/discussions)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/ishikki-akabane/zolink/issues)
- 📧 **Email**: [Contact us](mailto:ishikkiiii@gmail.com)

---

<div align="center">

**Made with ❤️ by the Zolink community**

[⭐ Star us on GitHub](https://github.com/ishikki-akabane/zolink) | [🚀 Try Zolink](https://zolink.site) | [📖 Read the Docs](https://docs.zolink.site)

</div>