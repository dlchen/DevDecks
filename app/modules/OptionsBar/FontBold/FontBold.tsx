import * as React from 'react';
import { Button } from "@blueprintjs/core";

interface FontBoldProps {
  pluginState: any;
  updateCurrentPlugin?: any;
}

const FontBold = ({ pluginState, updateCurrentPlugin }: FontBoldProps) => {

  return (
    <Button className="pt-button" type="button" style={{fontWeight: 'bold'}} onClick={() => pluginState.fontWeight ? updateCurrentPlugin({ fontWeight: false }) : updateCurrentPlugin({ fontWeight: true })}>
      Bold
    </Button>
  );
}

export default FontBold;
