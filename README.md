# Easy notification tray for React Native with Expo

> A notification tray for showing errors, infomation and success states

![Example](https://media.giphy.com/media/9D34xNNLCpmgiQymmV/giphy.gif)

## Code Samples



```
      import Tray from './src/Tray'
        
      export default class App extends React.Component {
      render() {
        return (
          <View style={styles.container}>
            <StatusBar hidden />
             
            <Button onPress={() => this.refs.tray.show('warn', 'Warning!', 1000)}>
              <Text>Warn!</Text>
            </Button>
            <Button onPress={() => this.refs.tray.show('info', 'Here is some handy info!', 1000)}>
              <Text>Info!</Text>
            </Button>
            <Button onPress={() => this.refs.tray.show('success', 'You did something right!', 1000)}>
              <Text>Success!</Text>
            </Button>
            
            <Tray
              ref="tray"
              animationDuration={1000}
              backgroundColor={'#5B616A'}
              color={'#FFF'}
            />
            
          </View>
        );
      }
    }
```

## Usage

> Include the `<Tray/>` component anywhere in the root. Remember to add the ref!

> Use `this.refs.tray.show('success', 'Message', 1000)` to open the tray

`<Tray/>` has the following props:
* `ref` (String) can be any string used to reference the tray
* `animationDuration` (Number) duration in milis of enter and exit animations
* `backgroundColor` (String) Hex for background color of tray
* `color` (String) Hex for color of icon and text on the tray

`.show()` has the following params: 
 * `type` which is an enum of `warn` `success` or `info`
 * `message` which is the content of the notification
 * `duration` in milis for how long the notification should be displayed

## Installation

>This project requires expo to run. You can get it [here](https://docs.expo.io/versions/latest/introduction/installation).

## Starting the project


`npm run start`

or if you're using yarn

`yarn start`

## Pull Requests

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request
