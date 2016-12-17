import * as React from 'react';
import { Button, Dialog } from '@blueprintjs/core';
import './add-image.scss';

const dialog = require('electron').remote.dialog;
const fs = require('fs');

interface OptionsMenuProps {
  moduleName: string;
  pluginNumber: number;
  pluginState: any;
  slideNumber: number;
  updateCurrentPlugin: Function;
}

const options: any = {
  filters: [
    {
      name: 'Images',
      extensions: [ 'jpeg', 'jpg', 'gif', 'png' ]
    }
  ]
};

class OptionsMenu extends React.Component<OptionsMenuProps, {}> {
  render() {
    const {
      moduleName,
      pluginNumber,
      pluginState,
      slideNumber,
      updateCurrentPlugin
    } = this.props;

    const selectImageFile: any = () => {
      dialog.showOpenDialog(options, (filePaths: string[]) => {
        if (!filePaths) return;
        fs.readFile(filePaths[0], (err: any, data: any) => {
          if (err) return;
          const imageBufferString: string = new Buffer(data).toString('base64');
          updateCurrentPlugin({ imageBufferString, width: 355 });
        });
      });
    };

    return (
      <div>
        <Button
          id="add-image-button"
          onClick={()=>{ selectImageFile(); }}>
          Upload Image
        </Button>
      </div>
    );
  }
}

export default OptionsMenu;
