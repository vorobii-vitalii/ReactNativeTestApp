import React from 'react'
import {Image} from 'react-native'

export default class ImageWithDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false
    };
  }
  _onError = () => {
    this.setState({ failed: true });
  }
  render() {
    const defaultImage = <Image source={{uri:'https://www.iisd.org/sites/default/files/styles/publication_cover/public/default_images/No_Image_Available_0.png?itok=qttHxPCE'}} style={this.props.style} />;

    if (this.state.failed) return defaultImage;

    return (
      <Image
        {...this.props}
        onError={this._onError}
        renderIndicator={_ => defaultImage}
      />
    );
  }
}