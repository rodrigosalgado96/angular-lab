import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { MAINTENANCE_ORDER } from "src/app/shared/model/om.model";
import { ManusisService } from "../services/manusis.service";
import Telegram from "telegram-send-message";
import { error } from 'console';

@Component({
  selector: "chart-view",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  @ViewChild("barChartCanvas", { read: false, static: true })
  canvas: ElementRef;

  hoverBackground = [];
  legendAutomatico = true;
  legendSemiAutomatico = true;
  legendManual = true;

  notifyTelegram: boolean = false;
  genOm: boolean = false;

  om: MAINTENANCE_ORDER = {
    area_id: 23, //Test Area
    first_loc_id: 4787,  // Test Location
    maint_service_type_id: 1,
    maint_service_nature_id: null,
    priority: 1,
    description: "",
    opened_at: new Date(),
    scheduled_to: new Date(),
    est_finish_at: new Date()
  };

  public barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      multiKeyBackground: "transparent",
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          offset: true,
          display: true,
          gridLines: {
            display: false,
            color: "#3255AB",
          },
          ticks: {
            fontColor: "white",
            defaultFontFamily: "helvetica-lt-std-roman",
            fontSize: 14,
          },
          id: "A",
        },
        {
          display: false,
          gridLines: {
            display: false,
            color: "#3255AB",
          },
          ticks: {
            fontColor: "white",
            defaultFontFamily: "helvetica-lt-std-roman",
            fontSize: 14,
          },
          id: "B",
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: true,
            color: "#3255AB",
            lineWidth: 2,
          },
          ticks: {
            callback(value) {
              return value.toFixed(0) + "s ";
            },
            fontColor: "white",
            defaultFontFamily: "helvetica-lt-std-roman",
            fontSize: 14,
            beginAtZero: true,
          },
        },
      ],
    },
  };

  cycleTimeData = [
    {
      data: [],
      borderColor: "#ffc107",
      backgroundColor: "transparent",
      hoverBackgroundColor: [],
      hoverBorderColor: [],
      borderWidth: "4",
      type: "line",
      xAxisID: "B",
    },
    {
      data: [],
      borderColor: this.borderColor.bind(null),
      backgroundColor: this.backgroundColor.bind(null),
      hoverBackgroundColor: [],
      hoverBorderColor: [],
      borderWidth: "2",
      xAxisID: "A",
    },
  ];

  label = [];

  mockedDataOne = [
    { x: "OP20[C]", y: 24, z: "Automatico", count: 20 },
    { x: "OP30[C]", y: 41, z: "Semi-Automatico", count: 32 },
    { x: "OP40[C]", y: 24, z: "Automatico", count: 14 },
    { x: "OP50[C]", y: 67, z: "Manual", count: 30 },
    { x: "OP55[C]", y: 31, z: "Automatico", count: 22 },
    { x: "OP60[C]", y: 58, z: "Manual", count: 48 },
    { x: "OP70[C]", y: 35, z: "Automatico", count: 20 },
    { x: "OP75[C]", y: 27, z: "Automatico", count: 2 },
    { x: "OP80[C]", y: 45, z: "Semi-Automatico", count: 30 },
    { x: "OP20[B]", y: 41, z: "Semi-Automatico", count: 6 },
    { x: "OP30[B]", y: 36, z: "Automatico", count: 20 },
    { x: "OP40[B]", y: 70, z: "Manual", count: 40 },
    { x: "OP50[B]", y: 65, z: "Manual", count: 58 },
    { x: "OP55[B]", y: 31, z: "Automatico", count: 14 },
    { x: "OP60[B]", y: 59, z: "Manual", count: 26 },
    { x: "OP70[B]", y: 29, z: "Automatico", count: 4 },
    { x: "OP75[B]", y: 46, z: "Semi-Automatico", count: 8 },
    { x: "OP80[B]", y: 61, z: "Manual", count: 40 },
    { x: "OP20[A]", y: 41, z: "Semi-Automatico", count: 20 },
    { x: "OP30[A]", y: 25, z: "Automatico", count: 12 },
    { x: "OP40[A]", y: 61, z: "Manual", count: 30 },
    { x: "OP50[A]", y: 58, z: "Manual", count: 46 },
    { x: "OP55[A]", y: 45, z: "Semi-Automatico", count: 14 },
    { x: "OP60[A]", y: 39, z: "Semi-Automatico", count: 6 },
    { x: "OP70[A]", y: 28, z: "Automatico", count: 22 },
    { x: "OP75[A]", y: 52, z: "Manual", count: 50 },
    { x: "OP80[A]", y: 29, z: "Automatico", count: 0 },
  ];

  constructor(private omService: ManusisService) {}

  ngOnInit() {
    this.hoverBackgroundColor(this.mockedDataOne);
    this.cycleTimeData[1].data = this.mockedDataOne;
    this.getLabel(this.mockedDataOne);
    this.chartAverage(this.mockedDataOne);

    setInterval(() => {
      //Telegram Config
      Telegram.setToken("1330320176:AAE_YOn26fn4H5GQr5FnE4zD-DhjDNj5bNQ");
      Telegram.setRecipient("-466831592");
      //--------------------------

      for (let i = 0; i < this.mockedDataOne.length; i++) {
        this.mockedDataOne[i].count = this.mockedDataOne[i].count + 2;
        if (this.mockedDataOne[i].count > this.mockedDataOne[i].y) {
          this.mockedDataOne[i].count = 0;
          this.mockedDataOne[i].y =
            this.mockedDataOne[i].z === "Automatico"
              ? Math.round(Math.random() * 20 + 20)
              : this.mockedDataOne[i].z === "Semi-Automatico"
              ? Math.round(Math.random() * 20 + 40)
              : Math.round(Math.random() * 20 + 50);
        }
      }
      this.legendChange();
    }, 2000);

    //Telegram Message
    let random: number;
    let message: string;
    setInterval(() => {
      message = "";
      random = Math.round(Math.random() * (this.mockedDataOne.length - 1));
      this.mockedDataOne[random].y = 70 + 70 * Math.random();
      message =
        "A operação <u><b>" +
        this.mockedDataOne[random].x +
        "</b></u>, de tipo <u><b>" +
        this.mockedDataOne[random].z +
        "</b></u>, excedeu o tempo de ciclo de referência <u><b>(70s)</b></u>. Valor atual de: <u><b>" +
        Math.round(this.mockedDataOne[random].y) +
        "</b></u> segundos.";
      Telegram.setMessage(message);
      this.om.description = message;
      if (this.notifyTelegram)
        setTimeout(() => {
          Telegram.send();
        }, 1000); // 1segundo
      if (this.genOm)
        setTimeout(() => {
          // this.postOm(this.om); // comentado para nao criar ordem de serviço
        }, 1000); // 1segundo
    }, 10000); //10 segundos
    //--------------------------------------
  }

  //Manussis-----------------------------------------------
  private postOm(om: MAINTENANCE_ORDER) {
    this.omService.postOm(om).subscribe(
      () => console.log("você não é o goku, mas deu certo"),
      (err) => console.log(err.error.errors)
    );
  }
  //-----------------------------------------------

  //Chart-----------------------------------------------
  legendAutomaticoToggle() {
    this.legendAutomatico = !this.legendAutomatico;
    this.legendChange();
  }
  legendSemiAutomaticoToggle() {
    this.legendSemiAutomatico = !this.legendSemiAutomatico;
    this.legendChange();
  }
  legendManualToggle() {
    this.legendManual = !this.legendManual;
    this.legendChange();
  }
  borderColor(ctx) {
    const value = ctx.dataset.data[ctx.dataIndex].z;
    const color =
      value === "Automatico"
        ? "#07820F"
        : value === "Semi-Automatico"
        ? "#C547FA"
        : "#FAA047";
    return color;
  }
  backgroundColor(ctx) {
    const value = ctx.dataset.data[ctx.dataIndex].z;
    const color =
      value === "Automatico"
        ? "#07820F20"
        : value === "Semi-Automatico"
        ? "#C547FA20"
        : "#FAA04720";
    return color;
  }

  hoverBackgroundColor(data) {
    this.hoverBackground = [];
    for (const color of data) {
      this.hoverBackground.push(
        color.z === "Automatico"
          ? "#07820F80"
          : color.z === "Semi-Automatico"
          ? "#C547FA80"
          : "#FAA04780"
      );
    }
    this.cycleTimeData[1].hoverBackgroundColor = this.hoverBackground;
  }
  getLabel(data) {
    this.label = [];
    for (const value of data) {
      this.label.push(value.x);
    }
  }
  chartAverage(data) {
    let count = 0;
    let sum = 0;
    let average = 0;
    const countArray = [];
    for (const value of data) {
      count++;
      sum = sum + value.y;
    }
    average = sum / count;
    average = parseFloat(average.toFixed(2));
    for (let i = 0; i < count; i++) {
      countArray.push(average);
    }
    this.cycleTimeData[0].data = countArray;
  }

  legendChange() {
    const changedArray = [];
    for (const data of this.mockedDataOne) {
      if (this.legendAutomatico === true && data.z === "Automatico") {
        changedArray.push(data);
      } else if (
        this.legendSemiAutomatico === true &&
        data.z === "Semi-Automatico"
      ) {
        changedArray.push(data);
      } else if (this.legendManual === true && data.z === "Manual") {
        changedArray.push(data);
      }
    }
    this.hoverBackgroundColor(changedArray);
    this.cycleTimeData[1].data = changedArray;
    this.getLabel(changedArray);
    this.chartAverage(changedArray);
  }
  //-----------------------------------------------
}
