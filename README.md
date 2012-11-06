# In-app Refresh Plugin

This plugin adds a small, absolutely positioned refresh button to the top-right of the webview. It should work on any platform, since it's Javascript-only.

Tapping the button triggers a `window.location.reload()`, which will refresh the current page. To amplify, it will *not* return to the starting page of the app, rather refreshing the current page.

## Installing

Installation consists of either using the `cordova` CLI tool, or manually performing some steps, and then some unavoidable manual steps.

### Cordova Client

If you're using the `cordova` command-line tool, clone this repository and

    cordova plugin add path/to/this/directory

See "Unavoidable Manual Steps" below.

### Manual steps

Instead of using `cordova`, you can manually copy `www/refresh.js` to your app's `www/js/refresh.js`.

### Unavoidable Manual Steps

Regardless of how you got `refresh.js` in the right place, you need to include it in every page in your application where you want the button to appear.
Hopefully you've got a single page app, but either way just add

    <script type="text/javascript" src="js/refresh.js"></script>

somewhere in the file.

## Styling

It isn't recommended that you actually deploy this plugin, rather using it for just development. However, it has the class `refreshButton` if you want to apply some styles.

