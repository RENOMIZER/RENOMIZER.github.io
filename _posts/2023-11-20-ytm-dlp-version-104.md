---
layout: post
title:  "YTM-DLP version 1.0.4 update"
date:   2023-11-20 06:31:53 +0300
categories: ytm-dlp-update
---

#### [New version](https://github.com/RENOMIZER/ytm-dlp-gui/releases/tag/v1.0.4) of YTM-DLP has arrived!
<!--more-->
I've added abilities to change output file format and choose whether or not to sort them,<br>
plus some tweaks to the css file of the index page to make it scale properly.

---

Formats are limited to the ones yt-dlp allow to use namely:
- mp3
- flac
- opus
- m4a 

There are several more, but they do not support album covers, so I didn't include them.

---

Sorting. There are two options `None` and `Strict`:

- `None` means, there will be no order to files, <strike>obviousy</strike>, just like before.

- `Strict` means, the `track` field of each file's metadata will be filled with a number representing
it's position in a playlist or an ablum.

---

_It is recomeneded to use `.exe` file for installation, since it makes updating the app as easy as opening one file._<br>
_If you already have installed the app using `.exe` file to update it just run the `.exe` file of the new version._