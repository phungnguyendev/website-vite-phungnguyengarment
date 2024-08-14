import { useEffect } from 'react'

interface Props {
  title: string
  description: string
  keywords?: string
  type?: string
  image?: string
  url?: string
}

const useSEO = ({ title, description, keywords, type, image, url }: Props) => {
  useEffect(() => {
    // Thay đổi thẻ title
    if (title) {
      document.title = title
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', title)
      } else {
        const newOgTitle = document.createElement('meta')
        newOgTitle.setAttribute('property', 'og:title')
        newOgTitle.setAttribute('content', title)
        document.head.appendChild(newOgTitle)
      }
    }

    // Thay đổi thẻ description
    if (description) {
      let descTag = document.querySelector('meta[name="description"]')
      if (descTag) {
        descTag.setAttribute('content', description)
      } else {
        descTag = document.createElement('meta')
        descTag.setAttribute('name', 'description')
        descTag.setAttribute('content', description)
        document.head.appendChild(descTag)
      }

      const ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) {
        ogDesc.setAttribute('content', description)
      } else {
        const newOgDesc = document.createElement('meta')
        newOgDesc.setAttribute('property', 'og:description')
        newOgDesc.setAttribute('content', description)
        document.head.appendChild(newOgDesc)
      }
    }

    // Thay đổi thẻ keywords
    if (keywords) {
      let keywordsTag = document.querySelector('meta[name="keywords"]')
      if (keywordsTag) {
        keywordsTag.setAttribute('content', keywords)
      } else {
        keywordsTag = document.createElement('meta')
        keywordsTag.setAttribute('name', 'keywords')
        keywordsTag.setAttribute('content', keywords)
        document.head.appendChild(keywordsTag)
      }
    }

    // Thay đổi thẻ og:type
    if (type) {
      let typeTag = document.querySelector('meta[property="og:type"]')
      if (typeTag) {
        typeTag.setAttribute('content', type)
      } else {
        typeTag = document.createElement('meta')
        typeTag.setAttribute('property', 'og:type')
        typeTag.setAttribute('content', type)
        document.head.appendChild(typeTag)
      }
    }

    // Thay đổi thẻ og:image
    if (image) {
      let imageTag = document.querySelector('meta[property="og:image"]')
      if (imageTag) {
        imageTag.setAttribute('content', image)
      } else {
        imageTag = document.createElement('meta')
        imageTag.setAttribute('property', 'og:image')
        imageTag.setAttribute('content', image)
        document.head.appendChild(imageTag)
      }
    }

    // Thay đổi thẻ og:url
    if (url) {
      let urlTag = document.querySelector('meta[property="og:url"]')
      if (urlTag) {
        urlTag.setAttribute('content', url)
      } else {
        urlTag = document.createElement('meta')
        urlTag.setAttribute('property', 'og:url')
        urlTag.setAttribute('content', url)
        document.head.appendChild(urlTag)
      }
      // Thay đổi thẻ canonical
      let linkTag = document.querySelector('link[rel="canonical"]')
      if (linkTag) {
        linkTag.setAttribute('href', url)
      } else {
        linkTag = document.createElement('link')
        linkTag.setAttribute('rel', 'canonical')
        linkTag.setAttribute('href', url)
        document.head.appendChild(linkTag)
      }
    }
  }, [title, description, keywords, type, image, url])
}

export default useSEO
