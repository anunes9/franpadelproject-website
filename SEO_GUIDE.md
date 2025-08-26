# SEO Implementation Guide - Fran Padel Project

## Overview

This document outlines the comprehensive SEO implementation for the Fran Padel Project website using Next.js 13+ App Router.

## Implemented SEO Features

### 1. **Metadata Management**

- **File**: `lib/seo.ts`
- **Purpose**: Centralized SEO metadata generation for all pages
- **Features**:
  - Dynamic title and description generation per locale
  - Open Graph and Twitter Card support
  - Canonical URLs with language alternates
  - Keywords optimization

### 2. **Page-Level SEO**

Each page now includes:

- Dynamic metadata generation based on locale
- Proper title tags and meta descriptions
- Open Graph images and descriptions
- Twitter Card optimization

### 3. **Structured Data (JSON-LD)**

- **Organization Schema**: Basic company information
- **Location**: `components/generic/StructuredData.tsx`
- **Implementation**: Automatically added to all pages

### 4. **Sitemap Generation**

- **File**: `app/sitemap.ts`
- **Features**:
  - Dynamic sitemap generation
  - Multi-language support (PT/EN)
  - Proper URL structure
  - Last modified dates

### 5. **Robots.txt**

- **File**: `app/robots.ts`
- **Features**:
  - Allow all public pages
  - Disallow private/admin areas
  - Sitemap reference

### 6. **Web App Manifest**

- **File**: `app/manifest.ts`
- **Features**:
  - PWA support
  - App icons
  - Theme colors
  - Display settings

## SEO Best Practices Implemented

### 1. **Technical SEO**

- ✅ Proper meta tags
- ✅ Canonical URLs
- ✅ Language alternates (hreflang)
- ✅ Structured data
- ✅ Sitemap
- ✅ Robots.txt
- ✅ Fast loading (Next.js optimization)

### 2. **Content SEO**

- ✅ Unique titles per page
- ✅ Descriptive meta descriptions
- ✅ Keyword optimization
- ✅ Multi-language content
- ✅ Proper heading structure

### 3. **Social Media SEO**

- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Social media images
- ✅ Proper sharing previews

## Configuration

### 1. **Update Required Values**

In `lib/seo.ts`, update:

```typescript
verification: {
  google: 'your-google-verification-code', // Add your Google Search Console code
},
```

### 2. **Social Media Handles**

Update Twitter handles in `lib/seo.ts`:

```typescript
twitterDefaults = {
  site: '@frapadelproject', // Your Twitter handle
  creator: '@frapadelproject', // Your Twitter handle
}
```

### 3. **Social Media URLs**

Add your social media URLs in the structured data:

```typescript
sameAs: [
  'https://www.instagram.com/frapadelproject',
  'https://www.facebook.com/frapadelproject',
  'https://www.youtube.com/frapadelproject',
]
```

## Page-Specific SEO

### Home Page (`/` and `/[locale]`)

- **Title**: "Fran Padel Project - Metodologia de Padel"
- **Focus**: Methodology introduction and value proposition

### Academy (`/[locale]/academy`)

- **Title**: "Academia Fran Padel Project - Formação de Jogadores"
- **Focus**: Player development and training programs

### Clinics (`/[locale]/clinics`)

- **Title**: "Clínicas Fran Padel Project - Treinos Especializados"
- **Focus**: Specialized training clinics

### Pro Players (`/[locale]/pro-players`)

- **Title**: "Jogadores Profissionais - Fran Padel Project"
- **Focus**: Professional player showcase

### Contact (`/[locale]/contact`)

- **Title**: "Contacto - Fran Padel Project"
- **Focus**: Contact information and inquiries

## Monitoring and Analytics

### 1. **Google Search Console**

- Submit sitemap: `https://frapadelproject.com/sitemap.xml`
- Monitor indexing status
- Track search performance

### 2. **Google Analytics**

- Already implemented with Vercel Analytics
- Monitor user behavior
- Track conversion goals

### 3. **SEO Tools**

Recommended tools for monitoring:

- Google PageSpeed Insights
- GTmetrix
- Screaming Frog SEO Spider
- Ahrefs/SEMrush

## Performance Optimization

### 1. **Images**

- Using Next.js Image component
- Automatic optimization
- WebP format support

### 2. **Fonts**

- Google Fonts with `display: 'swap'`
- Preloaded for performance

### 3. **Code Splitting**

- Dynamic imports for components
- Automatic code splitting

## Future Enhancements

### 1. **Blog/Content Section**

- Add blog functionality
- Implement content SEO
- Add article structured data

### 2. **Local SEO**

- Add local business schema
- Implement location-based SEO
- Add Google My Business integration

### 3. **E-commerce SEO** (if applicable)

- Product schema markup
- Review schema
- Price and availability markup

## Maintenance

### 1. **Regular Updates**

- Update content regularly
- Monitor search performance
- Update meta descriptions based on performance

### 2. **Technical Maintenance**

- Keep Next.js updated
- Monitor Core Web Vitals
- Regular SEO audits

### 3. **Content Strategy**

- Regular keyword research
- Content optimization
- Link building strategy

## Testing

### 1. **SEO Testing Tools**

- Google Rich Results Test
- Schema.org Validator
- Facebook Sharing Debugger
- Twitter Card Validator

### 2. **Performance Testing**

- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## Support

For SEO-related questions or updates, refer to:

- Next.js SEO documentation
- Google Search Console Help
- Schema.org documentation
- Open Graph protocol documentation
