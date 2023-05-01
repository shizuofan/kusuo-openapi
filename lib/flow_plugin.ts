import {ParamMeta} from "./ui_plugin";


interface NodeError {
    Msg: string;
    ErrorCode: string;
}

interface FlowContext {
    ID: string;
}

interface IFlowNode {
    Execute(ctx: FlowContext): NodeError;

    GetNodeConfigMeta(): Record<string, ParamMeta>;
}

export {IFlowNode, NodeError}