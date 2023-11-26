---
layout: post
title:  "YTM-DLP version 1.0.4 update"
date:   2023-11-20 06:31:53 +0300
categories: ytm-dlp update
---

New version of YTM-DLP has arrived!

I've added abilities to change output file format and choose wheather or not order them.

---

Formats are limited to the ones yt-dlp allow to use namely:
- mp3
- flac
- opus
- m4a 

There are several more, but they do not support album covers, so I didn't include them.

---

Ordering. There are two options ```None``` and ```Strict```.

```None``` means, there will be no order to files, <strike>obviousy</strike>, just like before.

```Strict``` means, the ```track``` field of each file's metadata will be filled with a number representing it's order in a playlist or an ablum.
