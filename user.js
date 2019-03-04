////////////////////////////////////////////////////
//   README
////////////////////////////////////////////////////
//
// These settings are mostly cosmetic and privacy related.
// I don't believe in changing many "performance" settings. If they were beneficial, Firefox would ship them by default. Most of the time, changing them causes more harm than good.
//
// Plenty of settings taken from here, make sure you take a look
// https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js

////////////////////////////////////////////////////
//   URL bar
////////////////////////////////////////////////////

// Select all text when clicking once in the URL bar
user_pref("browser.urlbar.clickSelectsAll", true);

// Combine URL bar and search bar
user_pref("browser.search.widget.inNavBar", false);

// Show punycode
user_pref("network.IDN_show_punycode", true);

// Turn off search suggestions so you don't leak everything from the URL bar to a search engine
user_pref("keyword.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

// Don't try to guess TLDs if one isn't entered
user_pref("browser.fixup.alternate.enabled", false);

// Don't trim HTTP/HTTPS off of URLs in the address bar
user_pref("browser.urlbar.trimURLs", false);

////////////////////////////////////////////////////
//   Reading
////////////////////////////////////////////////////

// When double-clicking a word on a page, only copy the word itself, not the space character next to it 
user_pref("layout.word_select.eat_space_to_next_word", false);

// Settings for finding
user_pref("findbar.highlightAll", true);
user_pref("findbar.modalHighlight", true);

// Enable spellchecker on all text fields
user_pref("layout.spellcheckDefault", 2);

////////////////////////////////////////////////////
//   Startup and new pages/windows
////////////////////////////////////////////////////

// Set "When Firefox starts" to blank page
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank")

// Disable new tab page ads and preload
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.introShown", true);

// Set new tab page to a blank page
user_pref("browser.newtabpage.activity-stream.enabled", false);
// Disable Activity Stream recent Highlights in the Library
user_pref("browser.library.activity-stream.enabled", false);
// Disable Activity Stream telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
// Disable Activity Stream Web Search
user_pref("browser.newtabpage.activity-stream.showSearch", false);
// Disable Activity Stream Top Sites
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
// Disable Activity Stream Pocket content
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
// Disable Activity Stream Highlights
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
// Disable Activity Stream Snippets
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

////////////////////////////////////////////////////
//   Privacy
////////////////////////////////////////////////////

// Enable Container tabs
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);

// Opt-out of Shield studies and Normandy
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Opt-out of Experiments
user_pref("network.allow-experiments", false);

// Disable "Upload" feature on Screenshots
user_pref("extensions.screenshots.upload-disabled", true);

// Disable Flash
user_pref("plugin.state.flash", 0);

// Disable creating thumbnails from each page
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Hide "Get Add-ons" panel (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false);

// Hide onboarding tour (uses Google Analytics)
user_pref("browser.onboarding.enabled", false);

// Disable geolocation
user_pref("geo.enabled", false);

// Disable WebGL
user_pref("webgl.disabled", true);

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false)

// Make sure DNS is sent through the proxy server when using a SOCKS v5 proxy
user_pref("network.proxy.socks_remote_dns", true);

// Send a DO NOT TRACK (DNT) header
user_pref("privacy.donottrackheader.enabled", true);

// Turn on tracking protection and the corresponding UI
user_pref("privacy.trackingprotection.enabled", true);

// Turn on cryptomining protection
user_pref("privacy.trackingprotection.cryptomining.enabled", true);

// Block third-party cookies (this might break some stuff)
user_pref("network.cookie.cookieBehavior", 1);

// Disable remember passwords
user_pref("signon.rememberSignons", false);

// Disable form autofill
user_pref("browser.formfill.enable", false);

// Disable autofill username and passwords in form fields
user_pref("signon.autofillForms", false);

// Disable autofill
user_pref("extensions.formautofill.available", "off");
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
//   Performance
////////////////////////////////////////////////////

// Change session restore from default of 15 seconds, writes less to disk
user_pref("browser.sessionstore.interval", 60000);

// Enable memory cache and set size
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 1048576);   // 1GB
user_pref("browser.cache.memory.max_entry_size", -1);  // Default=5120

// Disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.max_entry_size", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk_cache_ssl", false);

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

// Make fullscreen warning go away
user_pref("full-screen-api.warning.timeout", 0);

// Enable WebM
user_pref("media.mediasource.webm.enabled", true);

// Don't warn when opening about:config
user_pref("general.warnOnAboutConfig", false);

// Enable click to play for plugins
user_pref("plugins.click_to_play", true);

// Put tabs in the title bar (saves space)
user_pref("browser.tabs.drawInTitlebar", true);
