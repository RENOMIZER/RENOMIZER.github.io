---
layout: post
title:  "YTM-DLP version 1.2.0 update"
date:   2024-01-12 00:20:23 +0300
categories: ytm-dlp-update
---

#### [New version](https://github.com/RENOMIZER/ytm-dlp-gui/releases/tag/v1.2.0) has been released!
<!--more-->
This is quite a big update.

***I had to remove previous release due to a serious mistake that made Linux version unusable.***

---

### New styles system<br>

Now it is possible to change the look of the app via custom `.css` styles.
To do that go to the `About` screen and choose the prefered skin from the dropdown menu. If you want to make one
yourself head to the `%APPDATA%\ytm-dlp\styles` on Windows or `~/.config/ytm-dlp/styles`on Linux, then 
dupilicate and modify the default `Mocha` theme or if you want to use someone else's theme, just move the `.css`
file into the directory. After that close the `About` window, to apply the selected theme.

---

### Logs<br>

Now whenever something breaks and an error appears the verbose version of it will be written to the log file
located in the `temp` directory of your system. The naming format follows this pattern 
`ytm-dlp-log-HH-MM-SS-DD-MM-YYYY.log` to make it easier to find the desired log.

---

### Integrity check<br>

To make app more stable, now during every launch it will try to run all necessary binaries without arguments.
If there will be an error, it will delete the corrupted files and download them again.<br>
It will also check the integrity of `config.json` file and the `styles` folder, and will restore them in case
they became corrupted or unavailable.

---

And some miscellaneous stuff in the end:
  - Updated the package base
  - Added link the the README.md on `About` screen
  - **Applied Hotfix for Linux**

---

_Once again, it is recomeneded to use `.exe` file for installation, since it makes updating the app as easy as opening one file._
