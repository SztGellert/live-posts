import {Component, Input} from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post?: Post;
  @Input() index: number = 0;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.post)
  }

  onDelete() {
    console.log("onDelete() called!")
    console.log(this.index)
    this.postService.deletePost(this.index)
  }

  onEdit() {
    console.log("OnEdit() called!");
    this.router.navigate(["/post-edit", this.index])
  }

  likePost() {
    console.log("likePost() called!")
    this.postService.likePost(this.index);
  }
}
