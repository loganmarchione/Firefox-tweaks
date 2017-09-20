////////////////////////////////////////////////////
//   README
////////////////////////////////////////////////////
//
// These settings are mostly cosmetic and privacy related.
// I don't believe in changing "performance" settings. If they were beneficial, Firefox would ship them by default. Most of the time, they cause more harm than good.
//

////////////////////////////////////////////////////
//   Cosmetic
////////////////////////////////////////////////////

// Don't trim HTTP/HTTPS off of URLs in the address bar
user_pref("browser.urlbar.trimURLs", false);

// Select all text when clicking once in the URL bar
user_pref("browser.urlbar.clickSelectsAll", true);

// When double-clicking a word on a page, only copy the word itself, not the space character next to it 
user_pref("layout.word_select.eat_space_to_next_word", false);

// Enable WebM
user_pref("media.mediasource.webm.enabled", true);

// Don't warn when opening about:config
user_pref("general.warnOnAboutConfig", false);

// Enable spellchecker on all text fields
user_pref("layout.spellcheckDefault", 2);

// Enable click to play for plugins
user_pref("plugins.click_to_play", true);

// Make fullscreen warning go away
user_pref("full-screen-api.warning.timeout", 0);

// Set "When Firefox starts" to blank page
user_pref("browser.startup.page", 0);

// Disable new tab page ads and preload
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.introShown", true);

////////////////////////////////////////////////////
//   Privacy
////////////////////////////////////////////////////

// Hide "Get Add-ons" panel (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false);

// Hide onboarding tour (uses Google Analytics)
user_pref("browser.onboarding.enabled", false);

// Disable geolocation
user_pref("geo.enabled", false);

// Disable WebGl
user_pref("webgl.disabled", true);

// Show punycode
user_pref("network.IDN_show_punycode", true);

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);

// Resist fingerprinting
user_pref("privacy.resistFingerprinting", true);

// Send a DO NOT TRACK (DNT) header
user_pref("privacy.donottrackheader.enabled", true);

// Turn on tracking protection and the corresponding UI
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.ui.enabled", true);

// Disable remember passwords
user_pref("signon.rememberSignons", false);

// Disable form autofill
user_pref("browser.formfill.enable", false);

// Disable autofill username and passwords in form fields
user_pref("signon.autofillForms", false);

// Disable autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Set time range to "Everything" as default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.sanitize.timeSpan", 0);

// Check all the boxes by default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.cpd.cache", true);          // Cache
user_pref("privacy.cpd.cookies", true);        // Cookies
user_pref("privacy.cpd.downloads", true);      // Downloads - This is not listed
user_pref("privacy.cpd.formdata", true);       // Form & Search History
user_pref("privacy.cpd.history", true);        // Browsing & Download History
user_pref("privacy.cpd.offlineApps", true);    // Offline Website Data
user_pref("privacy.cpd.passwords", true);      // Passwords - This is not listed
user_pref("privacy.cpd.sessions", true);       // Active Logins
user_pref("privacy.cpd.siteSettings", true);   // Site Preferences

// Clear history when Firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// Check all the boxes by default in "Clear history when Firefox closes"
user_pref("privacy.clearOnShutdown.cache", true);           // Cache
user_pref("privacy.clearOnShutdown.cookies", true);         // Cookies
user_pref("privacy.clearOnShutdown.downloads", true);       // Downloads - This is not listed
user_pref("privacy.clearOnShutdown.formdata", true);        // Form & Search History
user_pref("privacy.clearOnShutdown.history", true);         // Browsing & Download History
user_pref("privacy.clearOnShutdown.offlineApps", true);     // Offline Website Data
user_pref("privacy.clearOnShutdown.sessions", true);        // Active Logins
user_pref("privacy.clearOnShutdown.siteSettings", true);    // Site Preferences

////////////////////////////////////////////////////
//   Misc
////////////////////////////////////////////////////

// Disable Pocket
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);

// Backspace key goes back a page
user_pref("browser.backspace_action", 0);

// Disable check for default browser
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable search suggestions in location bar
user_pref("browser.urlbar.suggest.searches", false);
