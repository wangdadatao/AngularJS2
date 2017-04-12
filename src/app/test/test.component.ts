import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  doSomething() {
    var foot = document.getElementById("test-foot");
    console.log(foot.offsetTop - document.body.scrollTop);
  }

  changeScroll() {
    document.body.scrollTop = 0;
  }
}
