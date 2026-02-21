#!/usr/bin/env node

/**
 * Create a new blog post
 *
 * Usage:
 *   Interactive mode (prompts for input):
 *     pnpm blog:new
 *
 *   CLI mode (pass arguments directly):
 *     pnpm blog:new --title "My Title" --description "My Description"
 *
 *   Mixed mode (provide some args, prompt for missing):
 *     pnpm blog:new --title "My Title"
 */

import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createInterface } from 'node:readline'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog')

// Format date as "MMM DD YYYY" (e.g., "Feb 21 2026")
function formatDate(date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day} ${year}`
}

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
}

// Create blog post template
function createBlogTemplate(title, description, pubDate) {
  return `---
title: '${title}'
description: '${description}'
pubDate: '${pubDate}'
heroImage: '/blog-placeholder-1.jpg'
---

${description}

## Table of Contents

- [Introduction](#introduction)
- [Conclusion](#conclusion)

## Introduction

Write your introduction here...

## Conclusion

Write your conclusion here...
`
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2)
  const result = {}

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--title' && args[i + 1]) {
      result.title = args[i + 1]
      i++
    } else if (args[i] === '--description' && args[i + 1]) {
      result.description = args[i + 1]
      i++
    }
  }

  return result
}

// Main function
async function main() {
  const cliArgs = parseArgs()
  let title = cliArgs.title
  let description = cliArgs.description

  // If arguments not provided, prompt for them
  if (!title || !description) {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    const question = (prompt) =>
      new Promise((resolve) => {
        rl.question(prompt, resolve)
      })

    try {
      console.log('🚀 Create a new blog post\n')

      // Get title if not provided
      if (!title) {
        title = await question('Enter blog post title: ')
        if (!title.trim()) {
          console.error('❌ Title is required')
          rl.close()
          process.exit(1)
        }
      }

      // Get description if not provided
      if (!description) {
        description = await question('Enter blog post description: ')
        if (!description.trim()) {
          console.error('❌ Description is required')
          rl.close()
          process.exit(1)
        }
      }

      rl.close()
    } catch (error) {
      rl.close()
      throw error
    }
  } else {
    console.log('🚀 Create a new blog post\n')
  }

  try {
    // Validate inputs
    if (!title?.trim()) {
      console.error('❌ Title is required')
      process.exit(1)
    }
    if (!description?.trim()) {
      console.error('❌ Description is required')
      process.exit(1)
    }

    // Generate slug and create file path
    const slug = generateSlug(title)
    const pubDate = formatDate(new Date())
    const filename = `${slug}.md`
    const filepath = join(BLOG_DIR, filename)

    // Create blog post content
    const content = createBlogTemplate(title, description, pubDate)

    // Write file
    await writeFile(filepath, content, 'utf-8')

    console.log('\n✅ Blog post created successfully!')
    console.log(`📝 File: src/content/blog/${filename}`)
    console.log(`📅 Date: ${pubDate}`)
    console.log(`🔗 Slug: ${slug}`)
  } catch (error) {
    console.error('❌ Error creating blog post:', error.message)
    process.exit(1)
  }
}

main()
