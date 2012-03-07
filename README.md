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

All good except for some bugs from Bootstrap 2.0.1 that we've caried
over. Radio and checkbox buttons don't work in Bootstrap 2.0.1 but
they've been patched in the latest release of ender-bootstrap.
Carousel's still have the same problem that exists in Bootstrap 2.0.1.

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

 * **ender-bootstrap**

### Installing

#### The *proper* way

Even though the dependencies are set up in the packages, you need to
specify the required dependencies on the command line when running
*ender*, otherwise they will end up installed in your *ender.js* file
*after* the Ender Bootstrap packages. So install like this:

```
 $ ender build qwery bonzo bean domready bowser ender-bootstrap-base ender-bootstrap-transition ender-bootstrap-alert

 # or, for the whole hog

 $ ender build qwery bonzo bean domready bowser ender-bootstrap
```

#### The *easy* way

If you don't want to roll your own then you can download (or link to) a
pre-built version which I'll keep updated:

 * http://rvagg.github.com/ender-bootstrap/ender-bootstrap.js
 * http://rvagg.github.com/ender-bootstrap/ender-bootstrap.min.js

This build has all of the Bootstrap plugins installed plus the Ender
dependencies: Qwery, Bonzo, Bean, domReady and Bowser so you get lots of
goodness.

### Demo

Of course you want to see it in action! Head over to
http://rvagg.github.com/ender-bootstrap/ to see it live.

### Building & contributing

If you'd like to contribute (fixes, improvements, whatever) then I'd
love to hear from you! In this repo you'll find a `build` script, simply
run it and it'll clone the main Twitter Bootstrap repo (*master*) and
then munge it to make it work with Ender and assemble the packages ready
for NPM. The altered files end up in the *dist/* directory but it will
also fix up the *javascript.html* demo page and associated
*application.js* and put them into the *doc/* directory.

Sadly there are no tests to go along with this, the jQuery dependencies
in the QUnit tests mean that it's not a trivial job to fix them up (but
of course I'd love someone to help make this work!). So testing at this
stage is largely a matter of using the demo page against the latest
build across all browsers.

### Important notes for Ender users

**The ender-bootstrap-base package has side-effects that will alter the
way that some parts of Ender work.** Mostly these are fairly minor and
are there to make Ender behave more like jQuery in some situations but
you may need to be aware of them depending on how you use Ender.

Most of the jQueryfication takes place in a private instance of `ender`
which doesn't leak out, but there are some changes to internal chain
functions that do leak.

#### Ender side-effects

 * `$().map()` (Bonzo) is modified to accept argument-less callbacks
   like jQuery. If you feed it a callback with zero-arguments it'll
   invoke your callback and use `this` as the current element.
 * `$().on()` (Bean) is modified to behave like jQuery's implementation
   in some situations. (1) with 3 arguments where the second is not a
   string (i.e. a 'data' variable), the second argument is stripped out
   cmpletely, this is not supported by Bean and not required by
   Bootstrap. (2) with 3 arguments where the second is a string, (i.e. a
   delegated listener with a selector argument in second place) remap
   the call to `bean.on()` to put the selector first--Bean will
   eventually [support this syntax in the future
   anyway](https://github.com/fat/bean/issues/55) so you probably
   shouldn't rely on the selector-first style in Bean's `on()`.
 * `$().trigger()` (Bean) has been modified to prevent it accepting (and
   throwing an error) on non-string arguments. This means that there are
   some events that Bootstrap fires that won't see the light of day. If
   his is important to anyone then file a but report and it can be
   fixed up.
 * `$().height()` and `$().width()` (Bonzo) will attempt to use
   `getComputedStyle()` where it exists (modern browsers) *first* before
   looking at the style property. Bonzo does the reverse to jQuery and
   this matters mainly for the collapsable plugin and shouldn't usually
   matter for most uses because they normally converge to the same value
   anyway.
 * `$().prev()` is installed as an alias for `$().previous()` (Bonzo).
 * `$().data()` (Bonzo) is modified so it can handle JSON arrays, it
   simply looks at the first character, if it's a `'['` then it'll try
   `JSON.parse()` (modern browsers) or a naive split. This is required
   for *typeahead* where you specify the list in a *data-* property.
 * `$().position()` from jQuery (http://api.jquery.com/position/) is
   installed, with a few minor modifications. `$().offsetParent()` comes
   along for the ride too (http://api.jquery.com/offsetParent/).

See
[base.js](https://github.com/rvagg/ender-bootstrap/blob/master/base/base.js)
for all the gory details.

