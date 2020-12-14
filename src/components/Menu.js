import React from 'react';
import { Button } from 'design-react-kit';

export const Menu = () => <>
  <div style={{height: 'calc(100vh - 27px', overflow: 'auto'}}>
    <div className="row p-3">
      <div className="col">
        Botton menu
      </div>
    </div>
    <div className="row p-3">
      <div className="col">
        <Button
          color="primary"
          icon={false}
          outline
          tag="button"
        >
          Upload
        </Button>
      </div>
    </div>
    <div className="row p-3">
      <div className="col">
        <Button
          color="primary"
          icon={false}
          outline
          tag="button"
        >
          Template
        </Button>
      </div>
    </div>
    <div className="row p-3">
      <div className="col">
        <Button
          color="primary"
          icon={false}
          outline
          tag="button"
        >
          From url
        </Button>
      </div>
    </div>
    <div className="row p-3">
      <div className="col">
        <a>settings</a>
      </div>
    </div>
  </div>
</>