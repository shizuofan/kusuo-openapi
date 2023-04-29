// enum ObjectFieldType {
//   String,
// }

interface DataSourceMeta {
  ID?: string;
  Label?: string;
  DataSourceType: number;
  Objects: Record<string, ObjectMeta>;
}

interface ObjectMeta {
  ID?: string;
  Name: string;
  Info?: ObjectInfo;
  Table?: string;
  CreateUser?: string;
  CreateTime?: number;
  Length?: number;
  Fields?: Record<string, ObjectFieldMeta>;
  IsDeleted?: boolean;
  SourceID?: string;
}

interface ObjectInfo {
  Label?: string;
}

interface ObjectFieldMeta {
  ID: string;
  Label?: string;
  Type?: string;
  Order?: number;
  TableKey?: string;
  IsDelete?: boolean;
  Value?: any;
  CreateTime?: number;
  EnableEdit?: boolean;
}

interface RecordFieldValue {
  Type?: string;
  FieldType?: number;
  Value?: any;
}
