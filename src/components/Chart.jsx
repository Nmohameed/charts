import React from 'react';
import { useState } from 'react';
import './Chart.css';
import {
    LineChart,
    ResponsiveContainer,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend
} from "recharts";

const Chart = () => {
const [data, setData] = useState([
    // {
    //   name: ' ',
    //   Colza: 356,
    //   Soja: 508,
    //   // Tournesol: 0,
    // },{
    //   name: 'Dec 2022',
    //   Colza: 361,
    //   Soja: 544,
    //   // Tournesol: 0,
    // },
    // {
    //   name: ' ',
    //   Colza: 367,
    //   Soja: 552,
    //   // Tournesol: 0,
    // },
    // {
    //   name: ' ',
    //   Colza: 367,
    //   Soja: 551,
    //   // Tournesol: 0,
    // },
    // {
    //   name: ' ',
    //   Colza: 371,
    //   Soja: 549,
    //   // Tournesol: 0,
    // },
    // {
    //   name: "Jan 2023",
    //   Colza: 379,
    //   Soja: 555,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 380,
    //   Soja: 576,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 386,
    //   Soja: 587,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 386,
    //   Soja: 578,
    //   // Tournesol: 0,
    // },
    // {
    //   name: "Fev 2023",
    //   Colza: 378,
    //   Soja: 540,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 370,
    //   Soja: 545,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 375,
    //   Soja: 550,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 378,
    //   Soja: 557,
    //   // Tournesol: 0,
    // },
    // {
    //   name: "Mars 2023",
    //   Colza: 378,
    //   Soja: 550,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 376,
    //   Soja: 561,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 373,
    //   Soja: 575,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 362,
    //   Soja: 546,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 350,
    //   Soja: 517,
    //   // Tournesol: 0,
    // },
    // {
    //   name: "Avr 2023",
    //   Colza: 347,
    //   Soja: 523,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 345,
    //   Soja: 517,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 345,
    //   Soja: 518,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 344,
    //   Soja: 497,
    //   // Tournesol: 0,
    // },
    // {
    //   name: "Mai 2023",
    //   Colza: 320,
    //   Soja: 483,
    //   // Tournesol: 0,
    // },
    // {
    //   name: " ",
    //   Colza: 315,
    //   Soja: 479,
    //   // Tournesol: 0,
    // },
   // {
   //   name: " ",
    //  Colza: 308,
   //   Soja: 489,
      // Tournesol: 0,
   // },
   // {
   //   name: " ",
    //  Colza: 306,
    //  Soja: 476,
      // Tournesol: 0,
   // },
   // {
   //   name: "Juin 2023",
   //   Colza: 309,
   //   Soja: 475,
      // Tournesol: 0,
   // },
   // {
   //   name: " ",
    //  Colza: 329,
    //  Soja: 461,
      // Tournesol:0
   // },
   // {
   //   name: "Jui 2023",
   //   Colza: 335,
    //  Soja: 469,
      // Tournesol:0
  //  },
  //  {
   //   name: " ",
   //   Colza: 330,
    //  Soja: 466,
      // Tournesol:0
  //  },
   // {
   //   name: " ",
   //   Colza: 337,
   //   Soja: 474,
      // "Tournesol":0
   // },
   // {
    //  name: " ",
    //  Colza: 335,
    //  Soja: 492,
      // "Tournesol":0
   // },
    // {
    //   name: "Août 2023",
    //   Colza: 327,
    //   Soja: 489,
    //    "Tournesol":0
    // },
    // {
    //   name: " ",
    //   Colza: 333,
    //  Soja: 473,
    //    "Tournesol":0
    // },
    // {
    //   name: " ",
    //   Colza: 336,
    //   Soja: 478,
    //   // "Tournesol":0
    // },
   // {
    //  name: " " ,
    //  Colza:330,
    //  Soja:475,
      // "Tournesol":0
   // },
   // {
    //  name: " " ,
    //  Colza:335,
    //  Soja:506,
      // "Tournesol":0
   // },
 //       {
  //    name: "Sep 2023" ,
  //    Colza:330,
  //    Soja:488,
      // "Tournesol":0
 //   },
  //  {
  //    name: " " ,
 //     Colza:320,
 //     Soja:496,
      // "Tournesol":0
 //   },
  //      {
  //    name: " " ,
  //    Colza:316,
   //   Soja:488,
      // "Tournesol":0
 //   },
  //          {
  //    name: " " ,
   //   Colza:313,
  //    Soja:483,
      // "Tournesol":0
  //  },
                {
      name: "Oct 2023" ,
      Colza:306,
      Soja:480,
      // "Tournesol":0
    },
                    {
      name: " " ,
      Colza:296,
      Soja:473,
      // "Tournesol":0
    },
                        {
      name: " " ,
      Colza:297,
      Soja:492,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:303,
      Soja:522,
      // "Tournesol":0
    },
        {
      name: " " ,
      Colza:309,
      Soja:533,
      // "Tournesol":0
    },
            {
      name: "Nov 2023" ,
      Colza:315,
      Soja:531,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:326,
      Soja:549,
      // "Tournesol":0
    },
        {
      name: " " ,
      Colza:333,
      Soja:530,
      // "Tournesol":0
    },
        {
      name: " " ,
      Colza:341,
      Soja:544,
      // "Tournesol":0
    },
            {
      name: "Déc 2023" ,
      Colza:335,
      Soja:513,
      // "Tournesol":0
    },
            {
      name: " " ,
      Colza:340,
      Soja:529,
      // "Tournesol":0
    },
            {
      name: " " ,
      Colza:340,
      Soja:514,
      // "Tournesol":0
    },
            {
      name: " " ,
      Colza:327,
      Soja:480,
      // "Tournesol":0
    },
            {
      name: "Jan 2024" ,
      Colza:318,
      Soja:465,
      // "Tournesol":0
    },
            {
      name: " " ,
      Colza:312,
      Soja:472,
      // "Tournesol":0
    },
            {
      name: " " ,
      Colza:316,
      Soja:480,
      // "Tournesol":0
    },
            {
      name: " " ,
      Colza:308,
      Soja:460,
      // "Tournesol":0
    },
    {
      name: "Fev 2024" ,
      Colza:307,
      Soja:459,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:309,
      Soja:469,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:315,
      Soja:480,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:295,
      Soja:444,
      // "Tournesol":0
    },
    {
      name: "Mar 2024" ,
      Colza:291,
      Soja:421,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:294,
      Soja:417,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:313,
      Soja:422,
      // "Tournesol":0
    },
    {
      name: "Avr 2024" ,
      Colza:294,
      Soja:408,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:309,
      Soja:412,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:303,
      Soja:414,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza:305,
      Soja:418,
      // "Tournesol":0
    },
    {
      name: "Mai 2024 " ,
      Colza:328,
      Soja:439,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 320,
      Soja:440,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 322,
      Soja:447,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 335,
      Soja:464,
      // "Tournesol":0
    },
    {
      name: "Juin 2024" ,
      Colza: 329,
      Soja:438,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 309,
      Soja:442,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 305,
      Soja:441,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 305,
      Soja:439,
      // "Tournesol":0
    },
    {
      name: "Jui 2023" ,
      Colza: 306,
      Soja:413,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 307,
      Soja:409,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 297,
      Soja:398,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 307,
      Soja:400,
      // "Tournesol":0
    },
    {
      name: " " ,
      Colza: 304,
      Soja:409,
      // "Tournesol":0
    },
    {
      name: "Août 2024" ,
      Colza: 301,
      Soja:399,
      // "Tournesol":0
    },
    {
      name:" ",
    Colza:302,
    Soja:386,
    // Tournesol:0
  },
  {
      name:" ",
    Colza:287,
    Soja:394,
    // Tournesol:0
  },
  {name:" ",
  Colza:292,
  Soja:389,
  // Tournesol:0
},
{
  name: "Sep 2024" ,
  Colza: 302,
  Soja:392,
  // "Tournesol":0
},
{
  name: "" ,
  Colza: 310,
  Soja:398,
  // "Tournesol":0
},
{
  name: "" ,
  Colza: 318,
  Soja:412,
  // "Tournesol":0
},
{
  name: "" ,
  Colza: 313,
  Soja:413,
  // "Tournesol":0
},
{
  name: "Oct 2024" ,
  Colza: 309,
  Soja:407,
  // "Tournesol":0
},
{
  name: "" ,
  Colza: 307,
  Soja:394,
  // "Tournesol":0
},

{
  name: "" ,
  Colza: 303,
  Soja:397,
  // "Tournesol":0
},

  ]);

  let marketInfo = {
    name: "",
    Colza: 0,
    Soja: 0,
    Tournesol: 0,
  }

  // let clickedBtn = 9;

  const handleSubmit = (e) => {
  e.preventDefault();
  // if (clickedBtn===3) {
  //   setData(() => [...data.slice(-2), { name: marketInfo.name, Colza: marketInfo.Colza, Soja: marketInfo.Soja, Tournesol: marketInfo.Tournesol }])
  // } else if (clickedBtn===6) {
  //   setData(() => [...data.slice(-5), { name: marketInfo.name, Colza: marketInfo.Colza, Soja: marketInfo.Soja, Tournesol: marketInfo.Tournesol }])
  // } else if (clickedBtn===9) {
  //   setData(() => [...data.slice(-8), { name: marketInfo.name, Colza: marketInfo.Colza, Soja: marketInfo.Soja, Tournesol: marketInfo.Tournesol }])
  // } else if (clickedBtn===12) {
  //   setData(() => [...data.slice(-11), { name: marketInfo.name, Colza: marketInfo.Colza, Soja: marketInfo.Soja, Tournesol: marketInfo.Tournesol }])
  // }
  setData(() => [...data.slice(1), { name: marketInfo.name, Colza: marketInfo.Colza, Soja: marketInfo.Soja, Tournesol: marketInfo.Tournesol }])
  console.log(JSON. stringify(marketInfo));
  navigator.clipboard.writeText(JSON. stringify(marketInfo));
  console.log(data);
  document.querySelector('.PopUp').style.display = "block"
}

  const handleChangeMonth = (e) => {
    marketInfo.name = e.target.value;
    document.querySelector('.PopUp').style.display = "none"
  };

  const handleChangeColza = (e) => {
    marketInfo.Colza = e.target.value;
    document.querySelector('.PopUp').style.display = "none"
  };

  const handleChangeSoja = (e) => {
    marketInfo.Soja = e.target.value;
    document.querySelector('.PopUp').style.display = "none"
  };

  const handleChangeTournesol = (e) => {
    marketInfo.Tournesol = e.target.value;
    document.querySelector('.PopUp').style.display = "none"
  };
  // const btnSwitches = document.querySelectorAll('.btnSwitch');
  // btnSwitches.forEach(e => {
  //   e.addEventListener('click', () => {
  //     btnSwitches.forEach(btn => {
  //       btn.classList.remove('active')
  //     })
  //     e.classList.add('active')
  //     console.log(e);
  //     if (e[0].classList.contains('active')) {
  //       clickedBtn = 3;
  //     } else if (e[1].classList.contains('active')) {
  //       clickedBtn = 6;
  //     }else if (e[2].classList.contains('active')) {
  //       clickedBtn = 9;
  //     }else if (e[3].classList.contains('active')) {
  //       clickedBtn = 12;
  //     }
  //   })
  // });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="sojaTT">
            <span>{`${payload[1].value}€/t`}</span>
            {` : Soja Montoir`}
          </p>
          <p className="colzaTT">
            <span>{`${payload[0].value}€/t`}</span>
            {` : Colza Montoir`}
          </p>
          {/* <p className="tournesolTT">
            <span>{`${payload[2].value}€/t`}</span>
            {` : Tournesol Saint-Nazaire`}
          </p> */}
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className="chartContainer">
      <p className='PopUp'>JS Object copied to clipboard !</p>
        <form onSubmit={handleSubmit}>
        <div className="formRow">
            <label htmlFor="monthValue">Month :</label>
            <input required="required" type="text" name="Month" id="monthValue"  placeholder="Jan 2023" onChange={handleChangeMonth} />
            </div>
            <div className="formRow">
            <label htmlFor="colzaValue">Colza's value :</label>
            <input required="required" type="number" name="Colza" id="colzaValue"  placeholder="250"  onChange={handleChangeColza}/>
            </div>
            <div className="formRow">
            <label htmlFor="sojaValue" >Soja's value :</label>
            <input required="required" type="number" name="Soja" id="sojaValue" placeholder="250" onChange={handleChangeSoja}/>
            </div>
            {/* <div className="formRow">
            <label htmlFor="tournesolValue">Sunflower's value :</label>
                <input required="required" type="number" name="Tournesol" id="tournesolValue"  placeholder="250" onChange={handleChangeTournesol}/>
            </div> */}
            <div className="formRow">
                <input type="submit" name="Submit" id="submitBtn" value="Add to chart"/>
            </div>
        </form>
        {/* <div className="chartWithOptions"> */}
        {/* <div className="switches">
        <button className='btnSwitch'>3 months</button>
      <button className='btnSwitch'>6 months</button>
      <button className='btnSwitch'>9 months</button>
      <button className='btnSwitch'>12 months</button>
      </div> */}
        <ResponsiveContainer maxHeight={365} width={650}
    margin={{ top: 0, left: 0, right: 0, bottom: 0 }} style={{
      backgroundCOlor:"#fff"
    }}>
        <LineChart
          width={500}
          height={300}
          data={data}
          cursor="pointer"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={"#000000"} opacity={0.3}/>
          <XAxis dataKey="name" axisLine={false}
          tickLine={false} tick={{ fill: "#8e8e8e" }} style={{
            fontSize: "14px",
            fontWeight: "400",
          }} angle={-45} textAnchor="end" interval={0}/>
          <YAxis axisLine={false}
          tickLine={false} tick={{ fill: "#8e8e8e" }} style={{
            fontSize: "14px",
            fontWeight: "400",
          }} tickCount={6} domain={[250, 600]} tickFormatter={(tick) => `${tick}€/t`}/>
          <Tooltip content={CustomTooltip} followPointer={false}/>
          <Legend iconType="circle" wrapperStyle={{
        paddingTop: "50px"
    }}/>
          <Line strokeWidth={6} dataKey="Colza" stroke="#01C876" dot={{ r: 0, fill: "#01C876" }}
          activeDot={{
            r: 7,
            fill: "#ffffff",
            stroke: "#01C876",
            strokeWidth: 3,
          }} style={{
          filter: `drop-shadow(0px 2px 3px #8e8e8ed1)`
        }}/>
          <Line strokeWidth={6} dataKey="Soja" stroke="#FB5D6A" dot={{ r: 0, fill: "#FB5D6A" }}
          activeDot={{
            r: 7,
            fill: "#ffffff",
            stroke: "#FB5D6A",
            strokeWidth: 3,
          }} style={{
          filter: `drop-shadow(0px 2px 3px #8e8e8ed1)`
        }}/>
          {/* <Line strokeWidth={6} dataKey="Tournesol" stroke="#6C8BF1" dot={{ r: 0, fill: "#6C8BF1" }}
          activeDot={{
            r: 7,
            fill: "#ffffff",
            stroke: "#6C8BF1",
            strokeWidth: 3,
          }} style={{
          filter: `drop-shadow(0px 2px 3px #8e8e8ed1)`
        }}/> */}
        </LineChart>
      </ResponsiveContainer>
        {/* </div> */}
    </div>
  )
}

export default Chart