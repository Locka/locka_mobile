import { Reapp, View, Button } from 'reapp-kit';
import DevicesList from './devices/DevicesList';

class Devices extends React.Component {

  render() {
    const addButton = <Button chromeless onTap={this.showNewDevicePage.bind(this)}>Add</Button>;
    return (
      <div {...this.props.viewListProps}>
          <View style={{overflow: 'hidden'}} title={['', 'Devices', addButton]}>
            <DevicesList />
          </View>
          {this.props.child()}
      </div>
    );
  }

  showNewDevicePage() {
    this.router().transitionTo('deviceNew');
  }
}

export default Reapp(Devices);
