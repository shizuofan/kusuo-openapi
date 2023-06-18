import {ObjectFieldMeta, ObjectMeta} from "../structs/data";

interface DataService {
    QueryAllObjectsByAppID(appID: string): string

    CreateObject(
        appID: string,
        group: string,
        meta: ObjectMeta
    ): ObjectMeta

    DelObject(appID: string, group: string, objectID: string)

    UpdateObject(appID, dataSourceID, objectID, meta)

    updateObjectOnPlugin(
        appID: string,
        object: ObjectMeta,
        adds: ObjectFieldMeta[],
        dels: ObjectFieldMeta[],
        updates: ObjectFieldMeta[]
    )

    QueryAllData(
        appID: string,
        sourceID: string,
        objectID,
        filter: Record<string, any>
    )

    UpdateRecord(
        appID: string,
        objectID: string,
        sourceID: string,
        recordID: string,
        record: Record<string, any>
    )

    DeleteRecord(
        appID: string,
        sourceID: string,
        objectID: string,
        recordID: string
    )

    AddRecord(
        appID: string,
        sourceID: string,
        objectID: string,
        record: Record<string, any>
    )
}


export default DataService;