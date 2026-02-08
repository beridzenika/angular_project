import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { TaskDetailComponent } from "./task-detail/task-detail";

@NgModule({
    declarations: [AppComponent, HeaderComponent, TaskComponent, TaskDetailComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule { }