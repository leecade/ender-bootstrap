var packageJSON = {
        'name': 'ender-bootstrap-'
      , 'description': 'Ender version of Twitter\'s Bootstrap JS - original by @fat & @mdo'
      , 'url': 'https://github.com/rvagg/bootstrap'
      , 'keywords': ['twitter', 'bootstrap', 'ender']
      , 'authors': [
            'Jacob Thornton <@fat>'
          , 'Mark Otto <@mdo>'
          , 'Rod Vagg <@rvagg>'
        ]
      , 'dependencies': {
            'qwery': '*'
          , 'bonzo': '*'
          , 'bowser': '*'
          , 'domready': '*'
        }
      , 'main': ''
    }

  , generateJSON = function (config, data) {
      var json = JSON.parse(JSON.stringify(packageJSON))
      json.name += data.package
      json.main = data.package + '.js'
      json.version = config.version
      return json
    }

module.exports.generateJSON = generateJSON
