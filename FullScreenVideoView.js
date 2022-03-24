import React, {Component} from 'react';
import VideoPlayer from './VideoPlayer';
export default class FullScreenVideoView extends Component {
  static navigationOptions = ({navigation}) => ({
    header:null
  });

  constructor(props) {
    super(props);
    this.state=({
      path : ''
    })
  }

  componentDidMount() {
    let path = this.props?.route?.params?.path;
    this.setState({
      path: path,
    });
  }

  render() {
    return (
      <VideoPlayer
        onExitFullscreen={() => {
          this.props.navigation.goBack();
        }}
        isFullscreen={true}
        disableBack={true}
        source={{uri: this.state.path}}/>
    );
  }


};
