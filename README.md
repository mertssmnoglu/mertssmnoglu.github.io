# Mert Şişmanoğlu Personal Website

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Based on the [Astro blog template](https://github.com/withastro/astro/tree/latest/examples/blog),
this SEO-optimized personal blog website is built with [Astro](https://astro.build).
It serves as the blog for Mert Şişmanoğlu,
featuring blog posts written in Markdown and MDX.

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: Markdown/MDX
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Code Quality**: [Biome](https://biomejs.dev)
- **Deployment**: GitHub Pages
- **Analytics**: Cloudflare Web Analytics (users can opt-out)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 24 (LTS) or higher
- **pnpm**: Package manager (recommended over npm/yarn)

You can check your Node.js version:

```bash
node --version
```

If you need to install Node.js 24, you can use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 24
nvm use 24
```

To install pnpm:

```bash
npm install -g pnpm@latest-10
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/mertssmnoglu/mertssmnoglu.github.io.git
   cd mertssmnoglu.github.io
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the website.

## Available Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Start development server at `localhost:4321`  |
| `pnpm start`        | Start the production server locally           |
| `pnpm build`        | Build the production site to `./dist/`        |
| `pnpm preview`      | Preview your build locally before deploying   |
| `pnpm lint`         | Run Biome linter to check code quality        |
| `pnpm lint-fix`     | Run Biome linter and fix issues automatically |
| `pnpm format`       | Format code with Biome                        |
| `pnpm format-check` | Check code formatting without making changes  |
| `pnpm prepare`      | Set up Husky git hooks                        |
| `pnpm blog:new`     | Create a new blog post interactively          |

## Writing Blog Posts

Blog posts are stored in `src/content/blog/` and written in Markdown or MDX format.

### Creating a New Post

Kickstart a new blog post with the `pnpm blog:new` command:

```shell
pnpm blog:new \
   --title "My New Post" \
   --description "A brief description of my new post"
```

or

```bash
pnpm blog:new
```

The command will:

- Prompt for title and description (if not provided via CLI)
- Automatically assign today's date as publication date
- Generate a slug from the title
- Create a new `.md` file in `src/content/blog/` with pre-defined frontmatter
- and table of contents

Alternatively, you can manually create a blog post:

1. Create a new `.md` or `.mdx` file in `src/content/blog/`
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: "2025-01-15"
heroImage: "/blog-placeholder-1.jpg"
---

Your content goes here...
```

### Frontmatter Fields

- `title`: The title of your blog post
- `description`: A brief description for SEO and previews
- `pubDate`: Publication date in YYYY-MM-DD format
- `heroImage`: Path to hero image (optional)
- `tags`: Array of tags for categorization (optional)

## Contributing

1. Fork the repository
2. Create a feature branch: `git switch -c feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the
[LICENSE](LICENSE) file for details.
