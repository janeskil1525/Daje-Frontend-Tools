import {ResponseBase} from "../../../core/response/response.interface";

export interface ObjectTreeListInterface extends ResponseBase {
    key:string,
    label:string,
    icon:string,
    children:Array<ObjectTreeListInterface>
}
