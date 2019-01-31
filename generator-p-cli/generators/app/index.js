
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
// const fs = require('fs');
// const _ = require('lodash');
// const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the super-excellent ${chalk.red('generator-p-cli')} generator!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'template',
        message: 'choose your template',
        choices: [
          'react-ts',
          'vue',
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'your project name', 
        default: this.appname,
      },
      {
        type: 'input',
        name: 'description',
        required: false,
        message: 'project description', 
        default: 'a new project',
      },
      {
        type: 'input',
        name: 'author',
        message: 'author', 
        default: this.user.git.name(),
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`./${this.props.template}`),
      this.destinationPath(`./${this.props.name}`), 
      this.props,
    )
  }
  install() {
    this.installDependencies();
  }
};
