import {KObject, KQueryOption, ObjectFieldMeta, ObjectMeta} from "../structs/data";
import {FlowContext} from "./flow_plugin";

interface DataService {
    QueryAllData(
        ctx: FlowContext,
        objectMeta: ObjectMeta,
        option: KQueryOption
    ): Promise<KObject[]>;

    QueryByID(
        ctx: FlowContext,
        objectMeta: ObjectMeta,
        ID: string
    ): Promise<KObject>

    UpdateRecord(
        ctx: FlowContext,
        objectID: string,
        recordID: string,
        update_fields: Record<string, any>
    ): Promise<number>;

    DeleteRecord(ctx: FlowContext, objectID: string, recordID: string): Promise<number>;

    AddRecord(ctx: FlowContext, object: KObject): Promise<string>;
}

export default DataService;