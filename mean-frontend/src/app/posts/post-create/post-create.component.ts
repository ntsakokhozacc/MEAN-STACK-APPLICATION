import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html'
})
export class PostCreateComponent{
    newPost="no data";
    enteredValue="";


    onAddPost() {
        //console.log(postInput.value)
        this.newPost=this.enteredValue
        alert('Post added!');
    }

}