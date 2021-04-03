import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      span: 0
    }
    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.ImageRef.current.clientHeight;
    const span = Math.ceil(height/10);
    this.setState({ span: span });
  }

  render() {
    const {urls, description} = this.props.image;
    return(
        <img style={{ gridRowEnd: `${this.state.span} span`}} 
          ref={this.ImageRef}
          alt={description}
          src={urls.regular} /> 
    )
  }
}

export default ImageCard;