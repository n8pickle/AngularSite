import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";

@Component({
  selector: "posts-component",
  templateUrl: "./posts-component.component.html",
  styleUrls: ["./posts-component.component.css"],
})
export class PostsComponentComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = response.json();
      },
      (error) => {
        alert("An uncexpected error occurred.");
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";

    this.service.addPost(post).subscribe(
      (response) => {
        post["id"] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error) => {
        alert("this was a way unexpected error! " + error);
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      (response) => {
        console.log(response.json());
      },
      (error) => {
        alert("this is a really bad error.    " + error);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) alert("This post has already been deleted.");
        else {
          alert("Nothing self destructed... please try again");
          console.log(error);
        }
      }
    );
  }
}
