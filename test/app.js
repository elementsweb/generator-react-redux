'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-redux:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        author: 'elementsweb',
        repository_name: 'react-redux-app',
        repository_url: 'git@github.com:elementsweb/react-redux-app',
        description: 'React application'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.babelrc',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      'CONTRIBUTING.md',
      'index.html',
      'ISSUE_TEMPLATE.md',
      'LICENSE',
      'package.json',
      'README.md',
      'server.js',
      'webpack.config.js'
    ]);
  });

  it('has generated a README file', function() {
    assert.fileContent('README.md', '# react-redux-app');
    assert.fileContent('README.md', 'React application');
    assert.fileContent('README.md', 'git@github.com:elementsweb/react-redux-app');
    assert.fileContent('README.md', '- elementsweb __(lead developer)__');
    assert.fileContent('README.md', '2017 elementsweb');
  });

  it('has generated a package.json file', function() {
    assert.jsonFileContent('package.json', {
      name: 'react-redux-app',
      description: 'React application',
      repository: {
        url: 'git@github.com:elementsweb/react-redux-app'
      }
    });
  });

  it('has generated an index.html file with app name in title', function() {
    assert.fileContent('index.html', '<title>react-redux-app</title>');
  });

  it('has generated a CONTRIBUTING file', function() {
    assert.fileContent('CONTRIBUTING.md', 'Contributing to react-redux-app');
    assert.fileContent('CONTRIBUTING.md', 'git clone git@github.com:elementsweb/react-redux-app');
  });
});
