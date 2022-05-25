import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_mainmenu_example extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_mainmenu_example:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_mainmenu_example is activated!');
  }
};

export default plugin;
