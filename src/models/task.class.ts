export class Task {
    title: string;
    description: string;
    priority: string;
    startDate: number;
    deadlineDate: number;
    type: string;
    department: string;
    employee: string;
    id: string;

    // obj? => if Object exist
    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.priority = obj ? obj.priority : '';
        this.startDate = obj ? obj.startDate : '';
        this.deadlineDate = obj ? obj.deadlineDate : '';
        this.type = obj ? obj.type : '';
        this.department = obj ? obj.department : '';
        this.employee = obj ? obj.employee : '';
        this.id = obj ? obj.id : '';
    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
            priority: this.priority,
            startDate: this.startDate,
            deadlineDate: this.deadlineDate,
            type: this.type,
            department: this.department,
            employee: this.employee,
            id: this.id
        }
    }
}