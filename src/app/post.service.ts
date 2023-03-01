import {Injectable} from "@angular/core";
import {Post} from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {
  listOfPosts: Post[] = [
    new Post("Nature", "Nature is wild.",
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1677535806~exp=1677536406~hmac=2f434eea7be8a7f5069f49434dd45295133e8b39287456eb6fc8104616ac03d1",
      "someone",
      new Date()
    ),
    new Post("Africa", "Africa is interesting.",
      "https://ivhq.imgix.net/images/map/ivhq-volunteer-abroad-region-africa-hero.jpg?auto=format,compress",
      "someone",
      new Date()
    ),
    new Post("Egypt", "Egypt is fascinating.",
      "https://www.state.gov/wp-content/uploads/2019/04/Egypt-2109x1406.jpg",
      "someone",
      new Date()
    )
  ];

  getPosts() {
    return this.listOfPosts;
  }

  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  getPost(index: number) {
    return this.listOfPosts[index];
  }
}
