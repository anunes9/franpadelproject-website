import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        {...props}
        className="roboto text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-6"
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className="roboto text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mt-6 mb-4"
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        className="roboto text-md md:text-lg font-bold text-gray-900 dark:text-gray-100 mt-6 mb-4"
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        className="roboto text-md md:text-lg font-bold text-gray-900 dark:text-gray-100 mt-6 mb-4"
      />
    ),
    h5: (props) => (
      <h5
        {...props}
        className="roboto text-gray-900 dark:text-gray-100 mt-4 mb-2"
      />
    ),
    h6: (props) => (
      <h6
        {...props}
        className="roboto text-gray-900 dark:text-gray-100 mt-4 mb-2"
      />
    ),
    p: (props) => (
      <p
        {...props}
        className="roboto text-base font-light text-gray-900 dark:text-gray-200 mb-2"
      />
    ),
    li: (props) => <li {...props} className="my-2 roboto font-light" />,
    ol: (props) => (
      <ol
        {...props}
        style={{
          listStyle: "decimal",
          paddingLeft: "32px",
          marginBottom: "12px",
        }}
        className="roboto font-light"
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        style={{
          listStyle: "disc",
          paddingLeft: "32px",
          marginBottom: "12px",
        }}
        className="roboto font-light"
      />
    ),
    a: (props) => (
      <span>
        {props.href ? (
          <Link
            href={props.href}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="roboto text-projectBlue font-medium" {...props} />
          </Link>
        ) : (
          <a {...props} className="roboto text-projectBlue font-medium" />
        )}
      </span>
    ),
    ...components,
  }
}
