---
title: 'LaTeX and code highlighting sample'
description: 'A short sample post that exercises KaTeX math rendering and Shiki code syntax highlighting.'
pubDate: 'Apr 27 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

This post is a smoke test for two features that this blog supports out of the box: LaTeX math rendered by **KaTeX**, and code blocks highlighted by **Shiki**.

## Inline and block math

The Pythagorean theorem can be written inline as $a^2 + b^2 = c^2$.

For a longer expression, use a display block:

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

Matrices and aligned equations also render correctly:

$$
\begin{aligned}
\mathbf{y} &= W\mathbf{x} + \mathbf{b} \\
\mathcal{L} &= \frac{1}{N}\sum_{i=1}^{N} \left(y_i - \hat{y}_i\right)^2
\end{aligned}
$$

## Code highlighting

A small TypeScript snippet:

```ts
type Post = {
  title: string;
  publishedAt: Date;
};

export const isRecent = (post: Post): boolean => {
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - post.publishedAt.getTime() < oneWeek;
};
```

And a Python equivalent:

```python
from datetime import datetime, timedelta

def is_recent(published_at: datetime) -> bool:
    return datetime.now() - published_at < timedelta(days=7)
```
