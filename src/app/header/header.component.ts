import { Component,EventEmitter, Output } from "@angular/core";


@Component(
    {
        selector:'app-header',
        templateUrl:'./header.component.html',
        styleUrls:['header.component.css']

    }
)

export class headerComponent
{
    @Output() selectedItem=new EventEmitter<String>();
    onSelect(item: String)
    {
        this.selectedItem.emit(item);
    }
}