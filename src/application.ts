interface FrontFlow {
  id: string;
  nodes: [
    {
      id: string;
      type: string;
      data: unknown;
      position: unknown;
    }
  ];
  edges: [
    {
      id: string;
      type: string;
      source: string;
      target: string;
      animated: boolean;
      label: string;
    }
  ];
}

interface FlowResult {
  status: string;
  message?: string;
}

interface RuntimeApplication {
  ID: string;
  Info?: ApplicationInfo;
  FlowMeta?: Record<string, FlowPackageMeta>;
  UIMeta?: UIMeta;

  DataMeta?: Record<string, DataSourceMeta>; // 第一层 datasource 第二层 object
}

interface EditorApplication {
  Meta: RuntimeApplication;
  CreateTime?: number;
  History?: any;
}

interface FlowPackageMeta {
  Flows: Record<string, FlowMeta>;
}

interface FlowMeta {
  ID?: string;
  Nodes: any;
  Edges: any;
  Label?: string;
}

interface UIMeta {
  HomePage: string;
  Pages: Record<string, PageMeta>;
}

interface ApplicationInfo {
  Label: string;
}
