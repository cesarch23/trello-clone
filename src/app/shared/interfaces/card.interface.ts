export interface Label{
    color:String;
    title:String;
}
export interface Member{
    name:String;
    email:String;
}
export interface CheckList{
    title:String;
    percentage:Boolean;
    item:{name:String;isChecked:Boolean}[];
}
export type Reminder =  'At time of due date' 
                        | 'None' | '5 Minutes before' | '10 Minutes before' | '15 Minutes before'
                        | '1 Hour before' | '2 Hours before' | '1 Day before' | '2 Days before'
export interface Dates{
    starDate:Date;
    dueDate:Date;
    reminder:Reminder;
}
export interface Attach{
    displayText?:String;
    addedTime:Number;
    url:String;
}
export interface Card {
    title:String;
    labels?:Label[];
    members?:Member[];
    notification?:Boolean;
    checklists?:CheckList[];
    dateReminder?:Dates;
    attach?:Attach[];
    coverWithColor?:String;
    coverWithImg?:String;
    comment?:{menmber:Member; text:String};
}