import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View,Alert} from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {

  onAnimationComplete=()=>{
  this.props.navigation.navigate("Profile")  
  }

  render() {
    // const [isLoading, setIsLoading] = React.useState(true);

    // useEffect(() => {
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 1000);
    // }, []);

    // if (isLoading) {
    //   return (
    //     <View style={[styles.container, styles.horizontal]}>
    //       <ActivityIndicator size="large" color="#000" />
    //     </View>
    //   );
    // }
    

    return (
      <>
        <View>
          <Text>Nick</Text>
        </View>

        <LottieView
          source={require('../4.json')}
          onAnimationFinish={this.onAnimationComplete}
          autoPlay={true}
          loop={false}
        />
      </>
    );
  }
}

// import React, {Component, useEffect} from 'react';
// import {ActivityIndicator, StyleSheet, View, Text, Button} from 'react-native';
// import LottieView from 'lottie-react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {visible: true};
//     // this.state = {setIsLoading: true};
//     // this.state = {isLoading: true};
//   }
//   useEffect = () => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };import React, {Component, useEffect} from 'react';
//   import {ActivityIndicator, StyleSheet, View, Text, Button} from 'react-native';
//   import LottieView from 'lottie-react-native';

//   export default class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {visible: true};
//       // this.state = {setIsLoading: true};
//       // this.state = {isLoading: true};
//     }
//     useEffect = () => {
//       setTimeout(() => {
//         setIsLoading(false);
//       }, 2000);
//     };
//     componentDidMount = () => this.useEffect();
//     render() {
//       const {visible} = this.state;
//       // const {setIsLoading} = this.state;
//       // const {visible} = this.state;

//       if (visible) {
//         return (
//           <View style={styles.container}>
//             <ActivityIndicator
//               visible={visible}
//               overlayColor="rgba(255,255,255,0.75)"
//               speed={1}
//               source={require('./assets/4.json')}
//             />
//           </View>
//         );
//       }
//       return (
//         <View>
//           <Text>Nick</Text>
//         </View>
//       );
//     }
//   }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//     },
//     lottie: {
//       width: 100,
//       height: 100,
//     },
//   });
