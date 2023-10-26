import {ParamMeta, ParamValue} from "../structs/plugin";
import DataService from "./data_service";
import Logger from "./logger";


interface NodeResult {
    Msg: string;
    ErrorCode: string;
    Output?: Record<string, any>
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
    is_debug?: boolean;
}

interface IFlowNode {
    baseInfo: FlowNodeBaseInfo;
    Execute(ctx: FlowContext, input: Record<string, any>): (Promise<NodeResult>);
}

interface FlowNodeBaseInfo {
    customInput: boolean,
    customOutput: boolean,
    inputMeta: Record<string, ParamMeta>,
    outputMeta: Record<string, ParamMeta>,
    label:string,
    desc:string,
}

export {IFlowNode, NodeResult, FlowContext, FlowNodeBaseInfo}