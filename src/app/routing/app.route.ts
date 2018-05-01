import { Routes } from "@angular/router";
import { CategoriesComponent, QuestionsComponent, TagsComponent, QuestionAddUpdateComponent, CreditCardComponent } from "../components";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/categories",
    pathMatch: "full"
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "questions",
    component: QuestionsComponent
  },
  {
    path: "tags",
    component: TagsComponent
  },
  {
    path: "question/add",
    component: QuestionAddUpdateComponent
  },
  {
    path: "cards",
    component: CreditCardComponent
  },
  {
    path: "**",
    redirectTo: "/categories"
  }
];
