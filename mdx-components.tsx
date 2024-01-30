import { Text, Title } from "@/components/generic/Typography"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      // <h1 {...props} className="text-2xl text-pale-yellow mt-8 mb-6" />
      <Title heading="1">{props.children}</Title>
    ),
    h2: (props) => (
      // <h2 {...props} className="text-xl text-pale-yellow mt-8 mb-6" />
      <Title heading="2">{props.children}</Title>
    ),
    h3: (props) => (
      // <h3 {...props} className="text-lg text-pale-yellow mt-8 mb-6" />
      <Title heading="3">{props.children}</Title>
    ),
    h4: (props) => (
      // <h4 {...props} className="text-base text-pale-yellow mt-8 mb-6" />
      <Title heading="4">{props.children}</Title>
    ),
    h5: (props) => (
      <h5 {...props} className="text-base text-pale-yellow mt-8 mb-6" />
    ),
    h6: (props) => (
      <h6 {...props} className="text-base text-pale-yellow mt-8 mb-6" />
    ),
    p: (props) => (
      // <p {...props} className="my-4 font-light [&>code]:text-pale-green" />
      <Text>{props.children}</Text>
    ),
    li: (props) => <li {...props} className="my-2 text-base font-light" />,
    ol: (props) => (
      <ol
        {...props}
        style={{
          listStyle: "decimal",
          paddingLeft: "32px",
          marginBottom: "12px",
        }}
        className="text-base font-light"
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
        className="text-base font-light"
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
            <span className="text-pale-blue font-medium" {...props} />
          </Link>
        ) : (
          <a {...props} className="text-pale-blue font-medium" />
        )}
      </span>
    ),
    ...components,
  }
}
