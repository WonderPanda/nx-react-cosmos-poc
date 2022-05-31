import Ui from './Ui';
import { useValue } from 'react-cosmos/fixture';

const UiFixture = () => {
  const [val] = useValue('name', { defaultValue: 42 });
  return <div>Hello {val}</div>;
};

export default UiFixture;
