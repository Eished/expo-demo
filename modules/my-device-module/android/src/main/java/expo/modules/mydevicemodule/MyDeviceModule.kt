package expo.modules.mydevicemodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.ui.ExpoUIView
import expo.modules.kotlin.records.recordFromMap
import expo.modules.ui.ModifierRegistry

class MyDeviceModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("MyDeviceModule")

    Events("onChange")

    Constant("PI") {
      Math.PI
    }

    Function("hello") {
      "Hello world! 👋. Use native code"
    }

    AsyncFunction("setValueAsync") { value: String ->
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    View(MyDeviceModuleView::class) {
      // Defines an event that the view can send to JavaScript.
      Events("onTap")
    }

    Class(MyDeviceModuleSharedObject::class) {
      Constructor {
        val instance = MyDeviceModuleSharedObject(appContext)
        return@Constructor instance
      }

      Property("count")
        .get { ref: MyDeviceModuleSharedObject ->
          ref.count
        }
        .set { ref: MyDeviceModuleSharedObject, count: Int ->
          ref.count = count
        }
    }

    ExpoUIView<MyDeviceModuleComposeViewProps>("MyDeviceModuleComposeView") {
      Content { props ->
        MyDeviceModuleComposeViewContent(props)
      }
    }

    OnCreate {
      ModifierRegistry.register("myDeviceModuleComposeModifier") { params, _, _, _ ->
        recordFromMap<MyDeviceModuleComposeModifierParams>(params).toModifier()
      }
    }
  }
}
