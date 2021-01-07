import {_} from "framework"
import {RoutingModule} from "framework/core/routing/routing.module"

export function initRouting(routes, dispatcher) {
    if (_.isUndefined(routes)) return

    let routing = new RoutingModule(routes, dispatcher)
    routing.init()
}