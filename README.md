# Firefox tweaks

## Overview
These settings are mostly cosmetic and privacy related.  
I don't believe in changing "performance" settings. If they were beneficial, Firefox would ship them by default. Most of the time, they cause more harm than good.  

## Update files via script

1. Create a new Firefox profile from _about:profiles_ using a unique string. For example, mine is "loganmarchione".
2. Use either the Windows or Linux commands below to download my files to your machine. Change the _$string_ variable as needed.

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
basedir=$(find ~/.mozilla/firefox -name "*.$string" -type d)

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
