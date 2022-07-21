
export interface ObjectPaths{
    path1: string;
}
interface objData{
    item_code:string,
    item_text:string,
    value: string
}
interface obj implements objData{
    item_code:string,
    item_text:string,
    value: string
    children:obj[]
}
