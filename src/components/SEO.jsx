import { useEffect } from "react";

const SITE_NAME = "KonnectMD";
const SITE_URL = "https://rukonnected.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-telehealth.jpg`;

function setMetaTag(name, content, attribute = "name") {
  if (!content) return;

  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

export default function SEO({
  title = "KonnectMD | Affordable Healthcare Access in Hampton Roads",
  description = "KonnectMD helps individuals, families, entrepreneurs, and small business owners access healthcare services, savings, virtual care, mental health support, prescription savings, and more.",
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;

    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = fullTitle;

    setMetaTag("description", description);
    setMetaTag("robots", "index, follow");

    // Open Graph / Facebook / LinkedIn
    setMetaTag("og:title", fullTitle, "property");
    setMetaTag("og:description", description, "property");
    setMetaTag("og:type", type, "property");
    setMetaTag("og:url", canonicalUrl, "property");
    setMetaTag("og:image", image, "property");
    setMetaTag("og:site_name", SITE_NAME, "property");

    // Twitter / X
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    setCanonical(canonicalUrl);
  }, [title, description, path, image, type]);

  return null;
}