import {Component, Input} from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post?: Post;
  @Input() index: number = 0;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    console.log(this.post)
  }

  onDelete() {
    console.log("onDelete() called!")
    console.log(this.index)
    this.postService.deletePost(this.index)
  }
}
