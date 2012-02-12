var packageJSON = {
        'name': 'ender-bootstrap-'
      , 'description': 'Ender port of Twitter\'s Bootstrap JS ({package})'
      , 'url': 'https://github.com/rvagg/bootstrap'
      , 'keywords': ['twitter', 'bootstrap', 'ender']
      , 'authors': [
            'Jacob Thornton <@fat>'
          , 'Mark Otto <@mdo>'
          , 'Rod Vagg <@rvagg>'
        ]
      , 'dependencies': {
            'ender-bootstrap-base': '*'
          , 'ender-bootstrap-transition': '*'
        }
      , 'main': ''
    }

  , generateJSON = function (config, data) {
      var json = JSON.parse(JSON.stringify(packageJSON))
      json.name += data.package
      json.main = data.package + '.js'
      json.version = config.version
      json.dependencies['ender-bootstrap-base'] = json.dependencies['ender-bootstrap-transition'] = config.version
      if (data.package == 'transition')
        delete json.dependencies['ender-bootstrap-transition']
      else if (data.package == 'popover')
        json.dependencies['ender-bootstrap-tooltip'] = config.version
      json.description = json.description.replace('{package}', data.package[0].toUpperCase() + data.package.substring(1))
      return json
    }

module.exports.generateJSON = generateJSON
