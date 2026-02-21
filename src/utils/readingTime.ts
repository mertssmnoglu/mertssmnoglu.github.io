export function calculateReadingTime(text: string, wordsPerMinute = 200): string {
  const cleanText = text.replace(/<[^>]*>/g, '')
  const words = cleanText.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)

  return minutes === 1 ? '1 min read' : `${minutes} minutes read`
}

export function getReadingTimeMinutes(text: string, wordsPerMinute = 200): number {
  const cleanText = text.replace(/<[^>]*>/g, '')
  const words = cleanText.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
