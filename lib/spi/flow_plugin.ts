import {ParamMeta} from "../structs/plugin";
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

    GetConfigMeta(): Record<string, ParamMeta>;
}

export {IFlowNode, NodeError, FlowContext}