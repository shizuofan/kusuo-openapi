import {ParamMeta} from "../structs/ui_plugin";
import DataService from "../structs/data_service";


interface NodeError {
    Msg: string;
    ErrorCode: string;
}

interface FlowContext {
    ID: string;
    SPI: {
        DataService: DataService,
    },
    appID: string;
}

interface IFlowNode {
    Execute(ctx: FlowContext): NodeError;

    GetInputMeta(): Record<string, ParamMeta>;

    GetConfigMeta(): Record<string, ParamMeta>;

    GetOutputMeta(): Record<string, ParamMeta>;
}

export {IFlowNode, NodeError, FlowContext}