import React from 'react';
import ReactDOM from 'react-dom';
import './create-collection-modal.css';

const ICreateCollection = document.getElementById('create-collection-modal');

class CreateCollectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    ICreateCollection.appendChild(this.el);
  }

  componentWillUnmount() {
    ICreateCollection.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default CreateCollectionModal;