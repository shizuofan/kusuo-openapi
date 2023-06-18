import {ParamMeta} from "../structs/plugin";
import DataService from "./data_service";
import Logger from "./logger";


interface NodeError {
    Msg: string;
    ErrorCode: string;
}

interface FlowContext {
    ID: string;
    api: {
        DataService: DataService,
        Logger: Logger,
    },
    appID: string;
}

interface IFlowNode {
    Execute(ctx: FlowContext): NodeError;

    GetConfigMeta(): Record<string, ParamMeta>;

    GetOutputMeta(): Record<string, ParamMeta>;
}

export {IFlowNode, NodeError, FlowContext}