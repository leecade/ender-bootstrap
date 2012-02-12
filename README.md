# Ender Bootstrap &mdash; Twitter's Bootstrap for Ender

This is a port of **v2.0** of [Twitter's
Bootstrap](http://twitter.github.com/bootstrap) for Ender, using only
[Qwery](https://github.com/ded/qwery),
[Bonzo](https://github.com/ded/bonzo),
[Bean](https://github.com/fat/bean).
[domReady](https://github.com/ded/domready) and
[Bowser](https://github.com/ded/bowser).

This project builds upon the v1.x port which can still be found at
https://github.com/rvagg/bootstrap and is available in NPM as
*ender-twitter-bootstrap*

Why use this? Because you're either using Ender now and want to use
Bootstrap plugins too, or because you want to avoid [the
beast](http://jquery.com) and make your users download only *1/2 the
amount of JavaScript* (the whole lot weighs in at 47% of the size,
minified & gzipped, of a jQuery-based Bootstrap install).

## Current status

This is currently a work-in-progress and there are a couple of important
blockers that should make you think twice before using this in a
production environment:

 * There are a few outstanding issues with IE7 & 8 that have yet to be
   addressed, most work so far is plain development using modern
   browsers.
 * There are some changes to Bonzo that are pending, waiting for
   [@ded](https://github.com/ded) to find time to review. See
   [here](https://github.com/ded/bonzo/pull/50) for gory details.
   This will only prevent a couple off the plugins from working properly
   though.

## Using

NPM contains a package for each of the Bootstrap plugins:

 * ender-bootstrap-alert
 * ender-bootstrap-button
 * ender-bootstrap-carousel
 * ender-bootstrap-collapse
 * ender-bootstrap-dropdown
 * ender-bootstrap-modal
 * ender-bootstrap-popover
 * ender-bootstrap-scrollspy
 * ender-bootstrap-tab
 * ender-bootstrap-tooltip
 * ender-bootstrap-typeahead

(See the Bootstrap home for details about each of these)

Which all depend on two base packages:

 * ender-bootstrap-base
 * ender-bootstrap-transition

Or, you can install the lot with the *virtual* package:

 * ender-bootstrap

### Installing

Even though the dependencies are set up in the packages, you need to
specify the required dependencies on the command line when running
*ender*, otherwise they will end up installed in your *ender.js* file
*after* the Ender Bootstrap packages. So install like this:

```
 $ ender build qwery bonzo bean domready bowser ender-bootstrap-base ender-bootstrap-transition ender-bootstrap-alert

 # or, for the whole hog

 $ ender build qwery bonzo bean domready bowser ender-bootstrap
```
