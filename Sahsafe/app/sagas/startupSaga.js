// import { NetInfo } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const handleFirstConnectivityChange = () => {
  NetInfo.removeEventListener(
    'connectionChange',
    handleFirstConnectivityChange,
  );
};

const watchNetStatusChange = () => {
  NetInfo.fetch().then((connectionInfo) => {
    console.log(`Initial, type: ${connectionInfo.type}, effectiveType: ${connectionInfo.effectiveType}`);
    NetInfo.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange,
    );
  });
};

export default function* () {
  yield watchNetStatusChange();
}

