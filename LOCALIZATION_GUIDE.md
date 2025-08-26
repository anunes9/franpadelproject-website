# Next.js Localization Guide

This guide explains the best approaches for handling localization in Next.js applications, with a focus on your current implementation and recommended improvements.

## Current Implementation Analysis

Your current setup uses:

- Client-side locale detection via `localStorage`
- Custom translation function with namespace/key structure
- Language switcher that updates localStorage and refreshes the page

### Issues with Current Approach:

1. **Client-side only**: No server-side rendering of localized content
2. **Poor SEO**: Search engines can't index different language versions
3. **Layout shifts**: Content appears in default language first, then switches
4. **No URL sharing**: Users can't share links with specific language preferences

## Recommended Approaches

### 1. **URL Query Parameters (Current Implementation - Improved)**

**Pros:**

- Easy to implement
- Shareable URLs
- No major restructuring required
- Works with your existing setup

**Cons:**

- Still client-side heavy
- Limited SEO benefits

**Implementation:**

```typescript
// URL: /academy?lang=en
// Updates URL without page reload
// Stores preference in localStorage
```

### 2. **URL Path Segments (Recommended for Production)**

**Pros:**

- Best SEO performance
- Server-side rendering possible
- Clear URL structure
- Search engine friendly

**Cons:**

- Requires more setup
- Need to restructure routes

**Implementation:**

```typescript
// URLs: /en/academy, /pt/academy
// Middleware handles routing
// Server-side locale detection
```

### 3. **Next.js Built-in i18n (Pages Router Only)**

**Pros:**

- Official Next.js solution
- Automatic locale detection
- Built-in routing

**Cons:**

- Only works with Pages Router
- Not available in App Router

## Implementation Details

### Current Improved Setup

1. **Locale Detection Priority:**

   - URL query parameter (`?lang=en`)
   - localStorage
   - Browser language
   - Default (Portuguese)

2. **URL Updates:**

   - Updates URL without page reload
   - Maintains user preference
   - Shareable links

3. **Event System:**
   - Custom events for locale changes
   - Components can listen for updates
   - No unnecessary re-renders

### Usage Examples

```typescript
// In any component
import { useLocale, t } from '@/lib/i18n'

const MyComponent = () => {
  const locale = useLocale()

  return (
    <div>
      <h1>{t(locale, 'home', 'title')}</h1>
    </div>
  )
}

// Language switcher
import { changeLocale } from '@/lib/i18n'

const handleLanguageChange = (newLocale: string) => {
  changeLocale(newLocale) // Updates URL and localStorage
}
```

### URL Structure

```
Current: /academy?lang=en
Future:  /en/academy
```

## Migration Path

### Phase 1: Improve Current System (✅ Done)

- Add URL query parameter support
- Implement better locale detection
- Add event system for updates
- Improve language switcher UX

### Phase 2: Add Server-Side Support

- Implement middleware for locale detection
- Add server-side translation functions
- Improve SEO with proper meta tags

### Phase 3: URL Path Segments (Optional)

- Restructure routes to use path segments
- Implement proper middleware routing
- Add static generation for all locales

## Best Practices

1. **Always provide fallbacks** for missing translations
2. **Use TypeScript** for type-safe translations
3. **Implement proper loading states** to avoid layout shifts
4. **Consider RTL languages** if expanding to more locales
5. **Use semantic keys** instead of English text
6. **Implement pluralization** if needed
7. **Add locale to meta tags** for SEO

## SEO Considerations

### Current Implementation

- Limited SEO benefits
- Search engines see default language only

### Improved Implementation

- URL parameters help with language detection
- Better for user experience and sharing

### Full URL Path Implementation

- Best SEO performance
- Separate URLs for each language
- Proper hreflang tags possible

## Performance Considerations

1. **Bundle Size**: Keep translation files small
2. **Lazy Loading**: Load translations on demand
3. **Caching**: Cache locale preferences
4. **Static Generation**: Pre-render pages for each locale

## Testing

Test the following scenarios:

- Direct URL access with different locales
- Language switching
- Browser language detection
- localStorage persistence
- URL sharing between users
- SEO meta tags
- Loading states

## Conclusion

Your current implementation is good for a simple setup, but consider migrating to URL path segments for better SEO and user experience. The improved query parameter approach is a good intermediate step that provides immediate benefits without major restructuring.
