import React, {Component} from 'react';

import "./ImageDrop.scss";

interface IProps {
  placeholder: string;
  onFile?: (fileText: string) => void;
}

interface IState {
  file: File | null;
}

class ImageDrop extends Component<IProps, IState> {
  state: IState = {
    file: null,
  }

  async onDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    this.eventFile(file);
  }

  async onFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const file = e.target.files
      ? e.target.files[0]
      : null;

    if (!file) return;
    this.eventFile(file);
  }

  eventFile(file: File) {
    this.setState({file});
    const FR = new FileReader();
    FR.readAsBinaryString(file);

    FR.addEventListener('loadend', () => {
      const buffer = FR.result as string;
      const base64 = btoa(buffer);

      this.props.onFile && this.props.onFile(`data:image/png;base64,${base64}`);
    });
  }

  render() {
    const {placeholder} = this.props
    const {file} = this.state;

    return (
      <label
        className="image-drop"
        onDrop={e => this.onDrop(e)}
        onDragOver={e => e.preventDefault()}
      >
        <span
          className="image-drop__placeholder"
        >
          {file ? file.name : placeholder}
        </span>
        <input
          className="image-drop__input"
          type="file"
          onChange={e => this.onFileUpload(e)}
        />
      </label>
    );
  }
}

export default ImageDrop;