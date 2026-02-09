---
title: 'Crossposting on Social Media with crosspost'
description: 'Learn how to use crosspost to share your content across multiple social media platforms effortlessly with just a few commands.'
pubDate: 'August 26 2025'
heroImage: '/blog-crossposting-on-social-media-with-crosspost.png'
---

Do you have multiple social media accounts and want to share your content
across all of them without the hassle of posting separately?
With the `crosspost` tool, you can effortlessly share your content
across various social media platforms with just a few commands.

In this article, we'll walk you through the process of setting up and using `crosspost`
to streamline your social media sharing.

- [My Social Media Journey](#my-social-media-journey)
- [Why Use crosspost?](#why-use-crosspost)
- [Pre-requisites](#pre-requisites)
- [CLI Usage](#cli-usage)
- [Conclusion](#conclusion)

## My Social Media Journey

I'm using Bluesky, Mastodon and Twitter(X) for content sharing.
These platforms are both text based and has different character limits.
I prefer using hashtags on Bluesky and Mastodon,
but due to character limits I don't prefer using hashtags inside Twitter.
I think Twitter(X) people do not care about hashtags,
but Bluesky and Mastodon has a different audience.
When I want to share something I need to open 3 different browser tabs
and it takes time.

I'm also using LinkedIn but I have a separate strategy for it.
It has more character limits and a different audience compared to the other platforms
so I can share more detailed content there
without worrying about the character count.

## Why Use crosspost?

I need something that can help me to share my content across multiple platforms
without the hassle of posting separately.
I don't want to waste my time with
3 times of post configuration and 3 times of sharing it.
One time configuration and 1 time posting is what i need.
First, i tried [MixPost][mixpost-website], but it takes so much time to configure.
Simple and effective tools are so important for my workflow.

Thanks to [Arda Kılıçdağı][arda-kilicdagi-mastodon] I discovered [crosspost][crosspost-github].

<!-- start: MASTODON HTML EMBED ALIGNED TO CENTER -->
<!-- markdownlint-disable line-length no-inline-html -->
<div style="display: flex; justify-content: center; align-items: center;">
<blockquote
    class="mastodon-embed"
    data-embed-url="https://micro.arda.pw/@arda/115023160813282852/embed"
    style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 800px; min-width: 400px; overflow: hidden; padding: 0;"
    title="Mastodon post by Arda Kilicdagi">
    <a href="https://micro.arda.pw/@arda/115023160813282852" target="_blank" aria-label="View post by Arda Kilicdagi on Mastodon" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"/></svg>
    <div style="color: #4a4654; margin-top: 16px;">Post by @arda@micro.arda.pw</div>
    <div style="font-weight: 500;">View on Mastodon</div> </a>
</blockquote>
<script data-allowed-prefixes="https://micro.arda.pw/" async src="https://micro.arda.pw/embed.js"></script>
</div>
<!-- markdownlint-restore -->
<!-- end: MASTODON HTML EMBED ALIGNED TO CENTER -->

It s a great tool developed by [Nicholas C. Zakas][nicholas-zakas-github]
for posting across multiple social networks at once.
You can use it via JavaScript Code, CLI or MCP Server.

## Pre-requisites

You need to have [Node.js][nodejs-website] installed on your machine.

## CLI Usage

First of all, I suggest you to create a new directory called `crosspost`
to hold your secrets and configurations.

```shell
mkdir crosspost
cd crosspost
```

Save your credentials inside `.env`.

Please get required credentials
for each social media platform you want to post to.
Instructions can be found in the [crosspost strategy documentation][crosspost-strategy-docs].

```ini
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=
TWITTER_API_CONSUMER_KEY=
TWITTER_API_CONSUMER_SECRET=

MASTODON_ACCESS_TOKEN=
MASTODON_HOST=

BLUESKY_HOST=
BLUESKY_IDENTIFIER=
BLUESKY_PASSWORD=

LINKEDIN_ACCESS_TOKEN=

DISCORD_BOT_TOKEN=
DISCORD_CHANNEL_ID=
DISCORD_WEBHOOK_URL=

DEVTO_API_KEY=

TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

SLACK_TOKEN=
SLACK_CHANNEL=
```

Install `crosspost` as a global package.

```shell
npm install --global @humanwhocodes/crosspost
```

I will recommend you to create a {topic}.txt file to hold your post content.

```shell
echo "My blog post content" > my_blog_post.txt
```

Share your post on Mastodon

```shell
CROSSPOST_DOTENV=.env crosspost -m --file my_blog_post.txt
```

Share your post on Mastodon, Bluesky and Twitter

```shell
CROSSPOST_DOTENV=.env crosspost -m -b -t --file my_blog_post.txt
```

## Conclusion

We explored the process of crossposting on social media using the crosspost tool.
This tool simplifies sharing content across multiple platforms,
saving time and effort.
All you need to do is configure your environment and use the CLI commands provided.

Thanks for reading!

If you found this guide helpful,
please consider sharing it with others who might benefit from it.

---

- [My Crosspost Environment on GitHub][my-crosspost-env-github]
- [Crosspost on GitHub][crosspost-github]
- [Nicholas C. Zakas on GitHub][nicholas-zakas-github]
- [Arda Kilicdagi on Mastodon][arda-kilicdagi-mastodon]

---

<!-- start: VARIABLES -->
[arda-kilicdagi-mastodon]: https://micro.arda.pw/@arda
[nicholas-zakas-github]: https://github.com/nzakas
[crosspost-github]: https://github.com/humanwhocodes/crosspost
[crosspost-strategy-docs]: https://github.com/humanwhocodes/crosspost?tab=readme-ov-file#setting-up-strategies
[mixpost-website]: https://mixpost.app/
[nodejs-website]: https://nodejs.org/
[my-crosspost-env-github]: https://github.com/mertssmnoglu/crosspost-env
<!-- end: VARIABLES -->
