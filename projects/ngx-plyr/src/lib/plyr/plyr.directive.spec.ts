import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { PlyrDirective } from "./plyr.directive";

describe("PlyrComponent", () => {
  let component: PlyrDirective;
  let fixture: ComponentFixture<PlyrDirective>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlyrDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlyrDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
