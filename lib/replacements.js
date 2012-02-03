var replacements = [
      , { // replace the }(window.jQuery) at the bottom with ender
            packageMatch: /^([^_]+|_jsdocapp)$/
          , regex: /^\s*\}\(\s*window\.jQuery\s*\)\s*$/m
          , replace: '}(require(\'ender-bootstrap-faker\'))'
        }
      , { // replace $(function () with domReady
            packageMatch: /.*/
          , regex: /\$\(\s*function\s*\(\s*\)\s*{/
          , replace: '$.domReady(function () {'
        }
      , { // alerts will do a $('#') in default cases which qwery borks at
            packageMatch: /alert/
          , regex: /, selector = \$this\.attr\('data-target'\) \|\| \$this\.attr\('href'\)/
          , replace: ', selector = $this.attr(\'data-target\') || ($this.attr(\'href\') == \'#\' ? \'\' : $this.attr(\'href\'))'
        }
      , { // enforce a display:block for the modal show()
            packageMatch: /modal/
          , regex: /that\.\$element\s+\.show\(\)/
          , replace: 'that.$element.show(\'block\')'
        }
      , { // use of $.type(o) == 'object', what's wrong with typeof??
            packageMatch: /popover/
          , regex: /\$\.type\((\w+)\) == 'object'/g
          , replace: 'typeof $1 == \'object\''
         }
      , { // fix the height/width('') call
            packageMatch: /collapse/
          , regex: /\[dimension\]\(size \|\| ''\)/
          , replace: '[dimension](size || \'auto\')'
        }
      , { // fix a 'return false' from an event handler
            packageMatch: /dropdown/
          , regex: /(toggle\: function \( e \) {[\s\S]+)return false/
          , replace: '$1e.stop()'
         }


      /***** javascript.html specifics *****/
      , {
            packageMatch: /^_jsdoc$/
          , regex: /<script src="assets\/js\/jquery.js"><\/script>/
          , replace: '<script src="ender.js"></script><script src="../base/base.js"></script>'
        }
      , {
            packageMatch: /^_jsdoc$/
          , regex: /<script src="assets\/js\/application.js"><\/script>/
          , replace: '<script src="application.js"></script>'
        }
      , {
            packageMatch: /^_jsdoc$/
          , regex: /<script src="assets\/js\/bootstrap-(\w+).js"><\/script>/g
          , replace: '<script src="../dist/$1/$1.js"></script>'
        }
      , {
            packageMatch: /^_jsdoc$/
          , regex: /(assets\/(js|css|img)\/)/g
          , replace: '../bootstrap-git/docs/$1'
        }
      , {
            packageMatch: /^_jsdoc$/
          , regex: /<!-- Analytics[\s\S]+<\/script>/
          , replace: ''
        }
      , {
            packageMatch: /_jsdocapp/
          , regex: /\/\/ Modified from the original jsonpi .*\n(.+[\r\n]+)+}\)/
          , replace: ''
        }
    ]

  , adjustScript = function (config, data) {
      replacements.forEach(function (replacement) {
        if (replacement.packageMatch.test(data.package)) {
          if (!replacement.regex.test(data.script))
            console.log(('WARNING: Regex "' + replacement.regex + '" is not found in "' + data.package + '"').yellow)
          else
            data.script = data.script.replace(replacement.regex, replacement.replace)
        }
      })
    }

module.exports.adjustScript = adjustScript
