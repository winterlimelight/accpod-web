
export class Module {
    moduleID: string; // Guid
    title: string;
    description: string;
    moduleActions: ModuleAction[];
}

export class ModuleAction {
    moduleActionID: string; //Guid
    title: string;
    description: string;
    actionOrder: number;
    created: string; // TODO Date 
}
