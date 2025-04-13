class Component {
    render() {
        throw new Error("Component::render not implemented");
    }
}

class WindowsComponent extends Component {
    render() {
        console.log("Render windows component");
    }
}

class MacComponent extends Component {
    render() {
        console.log("Render mac component");
    }
}

class GUIFactory {
    create() {
        throw new Error("GUIFactory::create not implemented");
    }
}

class WindowsFactory extends GUIFactory {
    create() {
        return new WindowsComponent();
    }
}

class MacFactory extends GUIFactory {
    create() {
        return new MacComponent();
    }
}

// Gebruik
const factory = new WindowsFactory();
const component = factory.create();
component.render();
