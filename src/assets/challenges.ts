import repsDataBeginner  from "./repsDataBeginner.json";
import repsDataIntermediate  from "./repsDataIntermediate.json";
import repsDataAdvance  from "./repsDatadvanced.json";
import beginnerGym from "./images/BeginnerGym.png";
import intermediateGym from "./images/Intermediate_GYM.png";
import advancedGym from "./images/weightlift.png";

const data = {
    "challenges": [
          {
            "title": "Beginner Training",
            "type": "Beginner",
            "description": "Tantangan bagi pemula",
            "image": beginnerGym,
            "repsData": repsDataBeginner
          },
          {
            "title": "Intermediate  Training",
            "type": "Intermediate",
            "description": "Tantangan bagi menengah",
            "image": intermediateGym,
            "repsData": repsDataIntermediate
          },
          {
            "title": "Advanced Training",
            "type": "Advance",
            "description": "Tantangan bagi profesional",
            "image": advancedGym,
            "repsData": repsDataAdvance
          }
    ],
    'workout' : [
      {
        "judul": "Latihan Otot Dada",
        "durasi" : "20 MENIT - 16 LATIHAN",
        "imageWO" : "https://functionalfittnessdailynews.com/wp-content/uploads/2022/03/Muscular-Fitness-Model-Working-Out-For-Six-Pack-Abs-Doing-Cable-Pull-Outs-Exercise-1024x567.jpg"
      },
      {
        "judul": "Latihan Otot Sayap",
        "durasi" : "20 MENIT - 16 LATIHAN",
        "imageWO" : "https://i1.wp.com/www.sfidn.com/image/catalog/0nutrisi/sfidn-perbedaan-gerak-chest-press-dan-chest-fly-2.jpg"
      },
    ]
}

export type Challenge = typeof data["challenges"][number];
export type Workout = typeof data["workout"][number];
export type Timeline = typeof data["challenges"][number]["repsData"][number];
export type Set = typeof data["challenges"][number]["repsData"][number]["listSet"][number];

export default data;