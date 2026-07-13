import ExpoModulesCore

public class MyDeviceModuleSharedObject: SharedObject {
  var count: Int = 0

  override public func sharedObjectDidRelease() {
    super.sharedObjectDidRelease()
  }
}
