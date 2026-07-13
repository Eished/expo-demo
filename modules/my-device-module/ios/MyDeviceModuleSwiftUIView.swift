import SwiftUI
import ExpoModulesCore
import ExpoUI

final class MyDeviceModuleSwiftUIViewProps: UIBaseViewProps {
  @Field var title: String = ""
}

struct MyDeviceModuleSwiftUIView: ExpoSwiftUI.View {
  @ObservedObject public var props: MyDeviceModuleSwiftUIViewProps

  var body: some View {
    VStack {
      Text(props.title)
        .font(.headline)
      Children()
    }
  }
}
