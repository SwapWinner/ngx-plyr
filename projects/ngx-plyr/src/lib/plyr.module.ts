import { NgModule } from "@angular/core";
import { PlyrDirective } from "./plyr/plyr.directive";

@NgModule({
  declarations: [PlyrDirective],
  exports: [PlyrDirective],
})
export class PlyrModule {}
