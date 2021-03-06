import {_} from "framework"
import {renderComponent} from "framework/core/component/render-component"

export function initComponents(bootstrap, components) {
    if (_.isUndefined(bootstrap)) {
        throw new Error(`Bootstrap component is not defined`)
    }

    [bootstrap, ...components].forEach(renderComponent)

}