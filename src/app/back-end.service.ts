import {Injectable} from "@angular/core";
import {PostService} from "./post.service";
import {Post} from "./post.model";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

//dataPath https://live-posts-95045-default-rtdb.firebaseio.com/

@Injectable({providedIn: 'root'})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) {
  }

  //Save
  saveData() {
    // get list of posts from post service
    const listOfPosts: Post[] = this.postService.getPosts()
    // send list of posts to backend
    this.http
      .put("https://live-posts-95045-default-rtdb.firebaseio.com/posts.json", listOfPosts)
      .subscribe((res) => {
        console.log(res)
      });

  }

  //Fetch
  fetchData() {
    this.http
      .get<Post[]>("https://live-posts-95045-default-rtdb.firebaseio.com/posts.json")
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
          this.postService.setPosts(listOfPosts);
        })
      ).subscribe();
  }

}
