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

// Display "Not Secure" icon and text on HTTP websites
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);

////////////////////////////////////////////////////
//   User experience (UX) and user interface (UI)
////////////////////////////////////////////////////

// Don't warn when opening about:config 
user_pref("browser.aboutConfig.showWarning", false);  // for the new HTML version [FF71+]

// When double-clicking a word on a page, only copy the word itself, not the space character next to it 
user_pref("layout.word_select.eat_space_to_next_word", false);

// Settings for finding
user_pref("findbar.highlightAll", true);    // Highlight all words on that page
user_pref("findbar.modalHighlight", true);  // Dim the rest of the page

// Enable spellchecker on all text fields
user_pref("layout.spellcheckDefault", 2);

// Backspace key goes back a page
user_pref("browser.backspace_action", 0);

// Put tabs in the title bar (saves space)
user_pref("browser.tabs.drawInTitlebar", true);

// Enable loading userChrome.css and userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable Ctrl+Q quit shortcut
user_pref("browser.quitShortcut.disabled", true);

// Warn when closing multiple tabs
user_pref("browser.tabs.warnOnClose", true);

////////////////////////////////////////////////////
//   Startup and new pages/tabs/windows
////////////////////////////////////////////////////

user_pref("browser.shell.checkDefaultBrowser", false); // Disable check for default browser
user_pref("browser.startup.page", 0);                  // Set start page
user_pref("browser.startup.homepage", "about:blank");  // Set "Homepage and new windows"
user_pref("browser.newtabpage.enabled", false);        // Set "New tabs"
user_pref("browser.newtab.preload", false);
user_pref("browser.onboarding.enabled", false);        // Hide onboarding tour (uses Google Analytics)

////////////////////////////////////////////////////
//   Activity Stream
////////////////////////////////////////////////////

// Disable Activity Stream recent Highlights in the Library
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Disable recommdations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);   // Disable "Recommend extensions as you browse"
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // Disable "Recommend features as you browse"

// Disable Activity Stream telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");

// Disable Activity Stream Snippets (runs code from a remote server)
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");

// Disable other stuff
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

////////////////////////////////////////////////////
//   Privacy
////////////////////////////////////////////////////

// Disable add-on recommendations
user_pref("extensions.getAddons.showPane", false);  // Disable about:addons "Recommendations" (uses Google Analytics) [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Telemetry - Disable extension recommendations
user_pref("browser.discovery.enabled", false);  // Disable "Allow Firefox to make personalized extension recommendations"
user_pref("datareporting.healthreport.uploadEnabled", false);  // Disable "Allow Firefox to send technical and interaction data to Mozilla"

// Enable Container tabs and corresponding UI
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);  // Using private containers for thumbnail loads

// Opt-out of Shield studies and Normandy
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Disable "Upload" feature on Screenshots
user_pref("extensions.screenshots.upload-disabled", true);

// Disable creating thumbnails from each page
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]

// Disable WebGL
user_pref("webgl.disabled", true);

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// Disable DNS-over-HTTPS because I want to use my internal DNS resolver
user_pref("network.trr.mode", 5);

// Enable HTTPS-only mode
user_pref("dom.security.https_only_mode", true);

// Make sure DNS is sent through the proxy server when using a SOCKS v5 proxy
user_pref("network.proxy.socks_remote_dns", true);

// Do not use the host PC's certificates, instead, use Firefox's built-in certificate list
user_pref("security.enterprise_roots.enabled", false);

////////////////////////////////////////////////////
//   Passwords and Forms
////////////////////////////////////////////////////

user_pref("signon.rememberSignons", false);   // Disable Ask to save logins and passwords for websites"
user_pref("signon.autofillForms", false);     // Disable "Autofill logins and passwords"
user_pref("browser.formfill.enable", false);  // Disable "Remember search and form history"
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

////////////////////////////////////////////////////
//   History
////////////////////////////////////////////////////

// Set time range to "Everything" as default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.sanitize.timeSpan", 0);

// Check all the boxes by default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.cpd.cache", true);          // Cache
user_pref("privacy.cpd.cookies", true);        // Cookies
user_pref("privacy.cpd.downloads", true);      // Downloads [HIDDEN PREF]
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
//   Tracking
////////////////////////////////////////////////////

user_pref("privacy.donottrackheader.enabled", true);                     // Send a DO NOT TRACK (DNT) header
user_pref("privacy.trackingprotection.enabled", true);                   // Turn on tracking protection
user_pref("privacy.trackingprotection.cryptomining.enabled", true);      // Enable cryptomining protection
user_pref("privacy.resistFingerprinting", true);                         // Enable fingerprint protection
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);    // Enable fingerprint protection 
user_pref("privacy.trackingprotection.socialtracking.enabled", true);    // Enable social protection
user_pref("privacy.globalprivacycontrol.enabled", true);                 // Successor to DNT
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);   // Successor to DNT

////////////////////////////////////////////////////
//   Cache
////////////////////////////////////////////////////

// Change session restore from default of 15 seconds, writes less to disk/memory
user_pref("browser.sessionstore.interval", 60000);     // 1min

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
user_pref("extensions.pocket.enabled", false);

// Disable notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Enable WebM
user_pref("media.mediasource.webm.enabled", true);

// Disable Flash
user_pref("plugin.state.flash", 0);
