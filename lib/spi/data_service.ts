import { KQueryOption, ObjectFieldMeta, ObjectMeta} from "../structs/data";
import {FlowContext} from "./flow_plugin";

interface DataService {
    Query(
        ctx: FlowContext,
        objectMeta: ObjectMeta,
        option: KQueryOption
    ): Promise<any[]>;

    QueryByID(
        ctx: FlowContext,
        objectMeta: ObjectMeta,
        ID: string
    ): Promise<any>

    UpdateRecord(
        ctx: FlowContext,
        objectID: string,
        recordID: string,
        update_fields: Record<string, any>
    ): Promise<number>;

    DeleteRecord(ctx: FlowContext, objectID: string, recordID: string): Promise<number>;

    AddRecord(ctx: FlowContext, object: any): Promise<string>;
}

export default DataService;