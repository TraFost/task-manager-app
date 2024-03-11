import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(SafeAreaView);

function App(): React.JSX.Element {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  console.log(isButtonPressed);

  return (
    <StyledView className="bg-red-500 flex-1 items-center justify-center">
      <Button
        title="Press me"
        onPress={() => {
          setIsButtonPressed(!isButtonPressed);
        }}
      />
    </StyledView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
