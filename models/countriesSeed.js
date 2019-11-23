module.exports = [
  {
    country: "Singapore",
    city: "Orchard",
    date: "20/02/2010",
    memories:
      "This was my first trip to Singapore. It was such an amazing city! Such cleanliness, and a wonderful blend of greenery with an urban setting. I loved the Marina Bay area. Definitely coming back again soon!",
    travellers: [{ type: Schema.Types.ObjectId, ref: "Users" }]
  },
  {
    country: "Malaysia",
    city: "Kuala Lumpur",
    date: "01/01/2016",
    memories:
      "Won a trip to travel to meet Jackie Chan and Zhang Ziyi in KL! This was the trip of a lifetime, managed to meet my childhood idols! I actually can't remember anything about KL, definitely didn't do the country justice. Need to go back again",
    travellers: [{ type: Schema.Types.ObjectId, ref: "Users" }]
  },
  {
    country: "Indonesia",
    city: "Jakarta",
    date: "12/12/2014",
    memories:
      "It was a great family holiday with dad and mum. They're getting old and I really wanted to bring them on a well-deserved family holiday to spend some quality time today. Not all that much to do in Jakarta, but it was great for family time with each other. ",
    travellers: [{ type: Schema.Types.ObjectId, ref: "Users" }]
  },
  {
    country: "Myanmar",
    city: "Bagan",
    date: "12/12/2018",
    memories:
      "Brought dad and mum for the famous hot air balloon ride over Bagan, it was absolutely breathtaking! So majestic, I would definitely recommend it to all my friends. Will bring my kids there one day!",
    travellers: [{ type: Schema.Types.ObjectId, ref: "Users" }]
  },
  {
    country: "US",
    city: "Washington DC",
    date: "01/01/2016",
    memories:
      "First time meeting the US President! Absolutely blown away. Barack is awesome and such a wonderful guy. A pity he couldn't serve more than 2 terms!",
    travellers: [{ type: Schema.Types.ObjectId, ref: "Users" }]
  },
  {
    country: "Iceland",
    city: "Reykjavik",
    date: "04/04/2017",
    memories:
      "Iceland was hands down the best trip to date. The scenery is BEAUTIFUL! I still vividly recall the huge waterfalls, the solitude of nature, the fresh smell of the country side. We also went spelunking (i.e. cave exploring) which was surreal. The people are so friendly and so independent. The hot springs were unforgetable too! Highly recommend it to friends!",
    travellers: [{ type: Schema.Types.ObjectId, ref: "Users" }]
  }
];
