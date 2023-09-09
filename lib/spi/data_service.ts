import {KObject, KQueryOption, ObjectFieldMeta, ObjectMeta} from "../structs/data";
import {FlowContext} from "./flow_plugin";

interface DataService {

    QueryAllData(
        ctx:FlowContext,
        objectMeta:ObjectMeta,
        option:KQueryOption,
    ):KObject[]

    UpdateRecord(
        ctx:FlowContext,
        objectID: string,
        recordID: string,
        update_fields: Record<string, any>
    ): number

    DeleteRecord(
        ctx: FlowContext,
        objectID: string,
        recordID: string
    ): number

    AddRecord(
        ctx:FlowContext,
        object:KObject,
    ): string
}


export default DataService;