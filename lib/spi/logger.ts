import {FlowContext} from "./flow_plugin";

interface Logger {
    Info(ctx: FlowContext, params: Record<string, any>)
}

export default Logger;