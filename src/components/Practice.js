import React from "react";
import { useState } from "react";

const Practice = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const handleChange = (data) => {
    if (data == "first") {
      if (first == true) {
        console.log("data", data);
      }
      setFirst(!first);
    }
    if (data == "second") {
      if (second == true) {
        console.log("data", data);
      }
      setSecond(!second);
    }
    if (data == "third") {
      if (third == true) {
        console.log("data", data);
      }
      setThird(!third);
    }
    // console.log("data", data)
  };
  const array = [4, 5, 31, 8, 11, 12, 9];
  const arsray = [4, 53, 13, 8, 11, 12];
  const similardata = array.map((elem, index) => {
    if (!arsray[index]) {
      return elem + 0;
    } else {
      return elem + array[index];
    }
  });
  const valuea = array.reduce((cal, accum) => cal + accum);
  var s = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < arsray.length; j++) {}
  }
  const dataa = [2, 4, 5, 7, 8, 4, 5, 6];
  let newData = [];
  for (let i = 0; i < dataa.length; i++) {
    for (let j = i + 1; j < dataa.length; j++) {
      if (dataa[i] == dataa[j]) {
        newData.push(dataa[i]);
      }
    }
  }
  const arrayofobject = [
    {
      name: "vivesssk",
      height: "125",
      gender: "female",
    },
    {
      name: "bharat",
      height: "80",
      gender: "male",
    },
    {
      name: "vivek",
      height: "65",
      gender: "female",
    },
    {
      name: "raj",
      height: "185",
      gender: "male",
    },
    {
      name: "vik",
      height: "135",
      gender: "female",
    },
    {
      name: "white",
      height: "165",
      gender: "male",
    },
    {
      name: "bue",
      height: "15",
      gender: "female",
    },
  ];
  // get all names
  const allName = arrayofobject.map((ele) => {
    return ele.name;
  });
  // console.log(allName)
  // get all array of objects with just name and height properties
  const getnewProp = arrayofobject.map((ele) => {
    return { name: ele.name, height: ele.height };
  });
  // console.log(getnewProp)
  // get the total height of all character
  const reducer = arrayofobject.reduce((prev, chara) => {
    return prev + Number(chara.height);
  }, 0);
  // console.group("reducer", reducer);

  // get chararcter with mass greater than  100
  const filter = arrayofobject.filter((ele) => {
    return ele.height < 100;
  });
  // console.log('filter', filter)
  //  get all male character

  const maleCharcter = arrayofobject.filter((ele) => {
    return ele.gender == "male";
  });

  let sortedArray = [];
  for (let i = 0; i < arrayofobject.length; i++) {
    for (let j = i + 1; j < arrayofobject.length; j++) {
      if (arrayofobject[i].name > arrayofobject[j].name) {
        sortedArray.push(arrayofobject[i].name);
      }
    }
  }

  return (
    <div className="adi container">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={first}
          id="defaultCheck1"
          onChange={() => handleChange("first")}
        />
        <label className="form-check-label">first</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={second}
          id="defaultCheck2"
          onChange={() => handleChange("second")}
        />
        <label className="form-check-label">second</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={third}
          id="defaultCheck2"
          onChange={() => handleChange("third")}
        />
        <label className="form-check-label">third</label>
      </div>
    </div>
  );
};

export default Practice;
