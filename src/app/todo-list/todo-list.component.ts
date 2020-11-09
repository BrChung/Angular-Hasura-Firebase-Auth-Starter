import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { QueryRef } from "apollo-angular";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AddTaskGQL, TasksGQL, TasksQuery } from "src/generated/graphql";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  tasks$: Observable<TasksQuery["tasks"]>;
  form: FormGroup;
  queryRef: QueryRef<TasksQuery>;

  constructor(
    private tasksGQL: TasksGQL,
    private addTaskGQL: AddTaskGQL,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      authorId: new FormControl(
        "318fd467-fc90-4517-b278-820d7c306195",
        Validators.required
      ),
    });

    this.queryRef = this.tasksGQL.watch();

    this.tasks$ = this.queryRef.valueChanges.pipe(
      map((result) => result.data.tasks)
    );
  }

  onAddTask() {
    this.addTaskGQL.mutate(this.form.value).subscribe(
      () => {
        this.form.controls.title.reset("");
        this.form.controls.description.reset("");
        this.queryRef.refetch();
      },
      (error) => console.error(error)
    );
  }
}
