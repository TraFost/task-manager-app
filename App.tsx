import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <></>
    </GluestackUIProvider>
  );
}

export default App;
