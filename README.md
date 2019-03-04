# Firefox tweaks

## Overview
These settings are mostly cosmetic and privacy related.  
I don't believe in changing "performance" settings. If they were beneficial, Firefox would ship them by default. Most of the time, they cause more harm than good.  

## user.js

### Usage
Firefox [user.js](http://kb.mozillazine.org/User.js_file) settings file - Used to set preferences in Firefox 
  
### Creation
In Firefox [profile folder](http://kb.mozillazine.org/Profile_folder_-_Firefox), create new "user.js" file
  
**IMPORTANT** - Once an entry for a preference setting exists in the user.js file, any change you make to that setting in the options and preference dialogs or via about:config will be lost when you restart your Mozilla application because the user.js entry will override it.
  
## userChrome.css

### Usage
Firefox [userChrome.css](http://kb.mozillazine.org/UserChrome.css) settings file - Used to change the interface/UI

### Creation
In Firefox [profile folder](http://kb.mozillazine.org/Profile_folder_-_Firefox), create new directory called "chrome", then create empty "userChrome.css" file


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

