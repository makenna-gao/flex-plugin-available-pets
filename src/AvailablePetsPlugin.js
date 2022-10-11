import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

//import CustomTaskList from './components/CustomTaskList/CustomTaskList';
//import Dogs from './components/CustomTaskList/Dogs';
import PetOfDay from './components/Pets/PetOfDay';
import PetList from './components/Pets/PetList';

const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel2.Content.replace(<PetList key="task"/>);
    //flex.AgentDesktopView.Panel2.Content.replace(<CustomTaskList key="task"/>);
    // flex.Actions.addListener("afterAcceptTask", (payload) => {
    //   if(payload.task.attributes.animals == "cats") {
    //     flex.AgentDesktopView.Panel2.Content.replace(<CustomTaskList key="task"/>);
    //   } else{
    //     flex.AgentDesktopView.Panel2.Content.replace(<Dogs key="task"/>);
    //   }
    // });
    // flex.Actions.addListener("beforeSelectTask", (payload) => {
    //   if(payload.task.attributes.animals == "cats") {
    //     flex.AgentDesktopView.Panel2.Content.replace(<CustomTaskList key="task"/>);
    //   } else{
    //     flex.AgentDesktopView.Panel2.Content.replace(<Dogs key="task"/>);
    //   }
    // });
    // flex.Actions.addListener("afterCompleteTask", (payload) => {
    //   flex.AgentDesktopView.Panel2.Content.replace(<PetOfDay key="task"/>);
    // });
  }
}
