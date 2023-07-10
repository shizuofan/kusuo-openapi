import {ParamMeta, ParamValue} from "../structs/plugin";
import DataService from "./data_service";
import Logger from "./logger";


interface NodeResult {
    Msg: string;
    ErrorCode: string;
    Output?: Record<string, ParamValue>
}

interface FlowContext {
    ID: string;
    api: {
        DataService: DataService,
        Logger: Logger,
    },
    appID: string;
    node: {
        id?: string,
        label?: string,
        config?: any,
    }
}

interface IFlowNode {
    Execute(ctx: FlowContext, input: Record<string, any>): (NodeResult);

    GetConfigMeta(): Record<string, ParamMeta>;

    GetOutputMeta(): Record<string, ParamMeta>;
}

export {IFlowNode, NodeResult, FlowContext}