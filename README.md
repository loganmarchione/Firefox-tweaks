# Firefox tweaks

## Overview
These settings are mostly cosmetic and privacy related.  
I don't believe in changing "performance" settings. If they were beneficial, Firefox would ship them by default. Most of the time, they cause more harm than good.  

## Update files via script

### Windows (run via PowerShell)
```
# The special string that our profile contains
$string="loganmarchione"

# The full path for our profile that contains that string
$basedir = Resolve-Path "$env:appdata\Mozilla\Firefox\Profiles\*.$string" | Select -ExpandProperty Path

# URLs of files to get and their output locations
$userjs_url = "https://raw.githubusercontent.com/loganmarchione/Firefox-tweaks/master/user.js"
$userjs_out = "$basedir\user.js"
$userchrome_url = "https://raw.githubusercontent.com/loganmarchione/Firefox-tweaks/master/userChrome.css"
$userchrome_out = "$basedir\chrome\userChrome.css"

# Create directory for "chrome"
New-Item -ItemType Directory -Path "$basedir\chrome"

# Download the files
Invoke-WebRequest -Uri $userjs_url -OutFile $userjs_out
Invoke-WebRequest -Uri $userchrome_url -OutFile $userchrome_out
```

### Linux (run via bash)
```
# The special string that our profile contains
string="loganmarchione"

# The full path for our profile that contains that string
basedir="~/.mozilla/firefox/*.$string"

# URLs of files to get and their output locations
userjs_url="https://raw.githubusercontent.com/loganmarchione/Firefox-tweaks/master/user.js"
userjs_out="$basedir/user.js"
userchrome_url="https://raw.githubusercontent.com/loganmarchione/Firefox-tweaks/master/userChrome.css"
userchrome_out="$basedir/chrome/userChrome.css"

# Create directory for "chrome"
mkdir -p "$basedir/chrome"

# Download the files
wget -O $userjs_out $userjs_url
wget -O $userchrome_out $userchrome_url
```

## DNS over HTTPS (DoH)

### Introduction
I won't waste a bunch of time explaining what DNS over HTTPS is, you can read the wiki [here](https://en.wikipedia.org/wiki/DNS_over_HTTPS). DoH attempts to solve two problems:
1. When you visit a website, even if the website content is encrypted (HTTPS), your ISP knows you are attempting to visit the site because your DNS requests are not encrypted.
1. Because encryption is not used, it's possible that the IP you receive from the DNS server is vulnerable to a man-in-the-middle attack.

I personally don't have these settings in my user.js file, as I set all my DNS settings on my router, but I have included them below if you're interested.

### User.js settings
```
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.trr.bootstrapAddress", "1.1.1.1");
```
