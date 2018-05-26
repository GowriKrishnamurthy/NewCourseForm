import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  courseCategories=[
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:3, name:'Languages'}
  ];
  CreateNewCourse(course) {
    console.log(course);
  }

}
