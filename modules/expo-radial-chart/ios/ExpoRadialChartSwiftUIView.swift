import SwiftUI
import ExpoModulesCore
import ExpoUI

final class ExpoRadialChartSwiftUIViewProps: UIBaseViewProps {
  @Field var title: String = ""
}

struct ExpoRadialChartSwiftUIView: ExpoSwiftUI.View {
  @ObservedObject public var props: ExpoRadialChartSwiftUIViewProps

  var body: some View {
    VStack {
      Text(props.title)
        .font(.headline)
      Children()
    }
  }
}
