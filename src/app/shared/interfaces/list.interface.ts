import { Card } from "./card.interface";

export interface List {
    title:String;
    cards:Card[];
    isAchived:Boolean;
}