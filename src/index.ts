import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { Menu } from '@lumino/widgets';

/**
 * Initialization data for the jupyterlab_mainmenu_example extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_mainmenu_example:plugin',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu
  ) => {
    const { commands } = app;

    // Add a command
    const command = 'jlab-examples:main-menu';
    commands.addCommand(command, {
      label: 'Execute jlab-examples:main-menu Command',
      caption: 'Execute jlab-examples:main-menu Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
        window.alert(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
      }
    });

    // Add the command to the command palette
    const category = 'Extension Examples';
    palette.addItem({
      command,
      category,
      args: { origin: 'from the palette' }
    });

    const menu = new Menu({ commands: commands });
    menu.title.label = "Main Menu Example";
    menu.addItem({
      command: "jlab-examples:main-menu",
      args: {}
    });
    mainMenu.addMenu(menu, { rank: 80 });

    console.log('JupyterLab extension jupyterlab_mainmenu_example is activated!');
  }
};

export default plugin;
