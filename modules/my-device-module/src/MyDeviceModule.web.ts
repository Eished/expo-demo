import { registerWebModule, NativeModule } from 'expo';

import { MyDeviceModuleEvents } from './MyDeviceModule.types';

class MyDeviceModule extends NativeModule<MyDeviceModuleEvents> {
  PI = Math.PI;

  hello() {
    return 'Hello world! 👋';
  }

  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
}

export default registerWebModule(MyDeviceModule, 'MyDeviceModule');
