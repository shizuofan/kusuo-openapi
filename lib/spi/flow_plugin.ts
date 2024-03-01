import {ParamMeta, ParamValue} from "../structs/plugin";
import DataService from "./data_service";
import Logger from "./logger";
import {ObjectMeta} from "../structs/data";


interface NodeResult {
    Msg: string;
    ErrorCode: string;
    Output?: Record<string, any>;
    AlertInfo?: {
        message: string;
        level: 'info' | 'error' | 'warn'
    }
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

    page_vars?: Record<string, any>;

    data_list?: Record<string, ObjectMeta>;

    user_info: {
        id: string,
        name?: string,
    }
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
    label: string,
    desc: string,
}

export {IFlowNode, NodeResult, FlowContext, FlowNodeBaseInfo}