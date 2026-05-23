export function getReelId(reelUrl) {
  if (!reelUrl?.trim()) return null
  const match = reelUrl.trim().match(/instagram\.com\/(?:reels?|p)\/([A-Za-z0-9_-]+)/i)
  return match ? match[1] : null
}

export function getReelEmbedUrl(reelUrl) {
  const id = getReelId(reelUrl)
  if (!id) return null
  return `https://www.instagram.com/reel/${id}/embed`
}

export function getReelPermalink(reelUrl) {
  const id = getReelId(reelUrl)
  if (!id) return null
  return `https://www.instagram.com/reel/${id}/`
}

export function getInstagramProfileUrl(client) {
  if (client.instagramUrl?.trim()) return client.instagramUrl.trim()
  const handle = client.instagramHandle?.replace(/^@/, '').trim()
  if (!handle) return null
  return `https://www.instagram.com/${handle}/`
}

export function formatInstagramHandle(handle) {
  if (!handle?.trim()) return null
  const clean = handle.trim().replace(/^@/, '')
  return `@${clean}`
}

export function getWebsiteHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}
