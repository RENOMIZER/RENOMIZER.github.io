---
layout: post
title:  "FFbinaries Plus module release"
date:   2023-12-04 21:54:25 +0300
categories: new-stuff
---

#### A module for downloading `ffmpeg` binaries.
<!--more-->
For all the time my YTM-DLP project existed I've been using `ffbinaries` module to download `ffmpeg` binaries.

It works great, without problems downloading needed binaries, but it has one issue. It uses `request` module
which has been deprecated as of 2020.

At first I thought that the original developer would update
the module to utilize different module, but I realised that it'll probably never happen, since the last commit
was made over half a year ago, so the project has been probably abandoned.

So after this fact has bothered me for enough time I've decided to rewrite the module to use something different
from `request` and after several hours I've made it use `axios` instead.

So, if any would ever need to download `ffmpeg` through NodeJS [here's](https://www.npmjs.com/package/ffbinaries-plus) the link to a module that does it.