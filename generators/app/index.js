'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('skip-welcome', {
      desc: 'Skips the welcome message',
      type: Boolean
    });
  }

  prompting() {
    // Have Yeoman greet the user.
    if (!this.options['skip-welcome']) {
      this.log(yosay(
        'Welcome to the spectacular ' + chalk.red('generator-react-redux') + ' generator!'
      ));
    }

    var prompts = [{
      name: 'author',
      message: 'What\'s your name?'
    }, {
      name: 'repository_name',
      message: 'What is the name of your project repository?'
    }, {
      name: 'repository_url',
      message: 'What is your project repository URL?'
    }, {
      name: 'description',
      message: 'Describe your project'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  }

  writing() {
    var unmodifiedFiles = [
      '__mocks__',
      'src',
      '.babelrc',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      'ISSUE_TEMPLATE.md',
      'LICENSE',
      'server.js',
      'webpack.config.js',
    ];
    unmodifiedFiles.forEach(function(file) {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      )
    }, this);

    this.fs.copyTpl(
      this.templatePath('CONTRIBUTING.md'),
      this.destinationPath('CONTRIBUTING.md'),
      {
        repository_name: this.props.repository_name,
        repository_url: this.props.repository_url
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      {
        repository_name: this.props.repository_name
      }
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        repository_name: this.props.repository_name,
        repository_url: this.props.repository_url,
        description: this.props.description
      }
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        repository_name: this.props.repository_name,
        repository_url: this.props.repository_url,
        description: this.props.description,
        author: this.props.author,
        year: new Date().getFullYear()
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
