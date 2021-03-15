import { Component, VERSION } from "@angular/core";
import { html2pdf } from "html2pdf";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  printPage() {
    const element = document.getElementById("print-pdf");
    const opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };
    html2pdf()
      .from(element)
      .set(opt)
      .save();
  }
}
