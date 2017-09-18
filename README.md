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
