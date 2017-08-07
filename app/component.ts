import {Component} from "@angular/core";
import {Model} from "./repository.model";

@Component({
    selector:"app",
    templateUrl:"app/template.html"
})
export class ProductComponent{
    model:Model = new Model();

    getClasses(key:number):string{
        let product = this.model.getProduct(key);
        return "p-a-1 "+(product.price < 50 ? "bg-info" : "bg-warning");
    }
}