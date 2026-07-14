import ExpoModulesCore
import ExpoUI

public class MyDeviceModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MyDeviceModule")

    Events("onChange")

    Constant("PI") {
      Double.pi
    }

    Function("hello") {
      return "Hello world! 👋. Use native code iOS"
    }

    AsyncFunction("setValueAsync") { (value: String) in
      self.sendEvent("onChange", [
        "value": value
      ])
    }

    View(MyDeviceModuleView.self) {
      Events("onTap")
    }

    Class(MyDeviceModuleSharedObject.self) {
      Constructor { () -> MyDeviceModuleSharedObject in
        return MyDeviceModuleSharedObject()
      }

      Property("count") { (ref: MyDeviceModuleSharedObject) -> Int in
        return ref.count
      }
      .set { (ref: MyDeviceModuleSharedObject, count: Int) in
        ref.count = count
      }
    }

    ExpoUIView(MyDeviceModuleSwiftUIView.self)

    OnCreate {
      ViewModifierRegistry.register("myDeviceModuleSwiftUIModifier") { params, appContext, _ in
        return try MyDeviceModuleSwiftUIModifier(from: params, appContext: appContext)
      }
    }

    OnDestroy {
      ViewModifierRegistry.unregister("myDeviceModuleSwiftUIModifier")
    }
  }
}
