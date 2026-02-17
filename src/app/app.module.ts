import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { TaskDetailComponent } from "./task-detail/task-detail";
import { ButtonComponent } from "./button/button.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, TaskComponent, TaskDetailComponent],
    imports: [BrowserModule, ButtonComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }