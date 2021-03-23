import React from 'react';

const BravelySecondSet = [
  {
    name: "Freelancer"
  },
  {
    name: "Wizard"
  },
  {
    name: "Charioteer"
  },
  {
    name: "Bishop"
  },
  {
    name: "Fencer"
  },
  {
    name: "Red Mage"
  },
  {
    name: "Thief"
  },
  {
    name: "Astrologian"
  },
  {
    name: "Summoner"
  },
  {
    name: "Swordmaster"
  },
  {
    name: "Catmancer"
  },
  {
    name: "Hawkeye"
  },
  {
    name: "White Mage"
  },
  {
    name: "Merchant"
  },
  {
    name: "Black Mage"
  },
  {
    name: "Ranger"
  },
  {
    name: "Knight"
  },
  {
    name: "Ninja"
  },
  {
    name: "Patissier"
  },
  {
    name: "Exorcist"
  },
  {
    name: "Monk"
  },
  {
    name: "Valkyrie"
  },
  {
    name: "Pirate"
  },
  {
    name: "Performer"
  },
  {
    name: "Time Mage"
  },
  {
    name: "Dark Knight"
  },
  {
    name: "Guardian"
  },
  {
    name: "Kaiser"
  },
  {
    name: "Templar"
  },
  {
    name: "Yokai"
  },
]

const getRandomIntBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const PU_BS = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "4 jobs are drawn, and the jobs in each slot are based on story progression.";
  return (
    <button onClick={() => {
      // let jobGroup = BravelySecondSet.length / 4;
      let job1 = BravelySecondSet[getRandomIntBetweenRange(0, 7)];
      let job2 = BravelySecondSet[getRandomIntBetweenRange(7, 14)];
      let job3 = BravelySecondSet[getRandomIntBetweenRange(14, 22)];
      let job4 = BravelySecondSet[getRandomIntBetweenRange(22, 30)];
      setTypeOfRun("Progressive Unique - 4 Jobs")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Progressive Unique - 4 Jobs</button>
  )
}

const U_BS = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "4 jobs are drawn, non-repeating."
  return (
    <button onClick={() => {
      let jobIndices = [];
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (BravelySecondSet.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let [job1, job2, job3, job4] = [BravelySecondSet[jobIndices[0]], BravelySecondSet[jobIndices[1]], BravelySecondSet[jobIndices[2]], BravelySecondSet[jobIndices[3]]];
      setTypeOfRun("Unique - 4 Jobs")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Unique - 4 Jobs</button>
  )
}

const ANY_BS = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  return (
    <button onClick={() => {
      let jobIndices = [];
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (BravelySecondSet.length));
        jobIndices.push(r);
      }
      let [job1, job2, job3, job4] = [BravelySecondSet[jobIndices[0]], BravelySecondSet[jobIndices[1]], BravelySecondSet[jobIndices[2]], BravelySecondSet[jobIndices[3]]];
      setTypeOfRun("Any - 4 Jobs")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules("4 jobs are drawn, possibly repeating.")
    }}>Any - 4 Jobs</button>
  )
}

const BS_ONLY_U_BS = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  return (
    <button onClick={() => {
      let jobIndices = [];
      let BravelySecondOnlySet = [];
      BravelySecondOnlySet.push(
        ...BravelySecondSet.slice(0,5), 
        BravelySecondSet[7], 
        ...BravelySecondSet.slice(10,12),
        ...BravelySecondSet.slice(18,20),
        ...BravelySecondSet.slice(26,28),
        BravelySecondSet[29]
      );
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (BravelySecondOnlySet.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let [job1, job2, job3, job4] = [BravelySecondOnlySet[jobIndices[0]], BravelySecondOnlySet[jobIndices[1]], BravelySecondOnlySet[jobIndices[2]], BravelySecondOnlySet[jobIndices[3]]];
      setTypeOfRun("Bravely Second Exclusive Unique - 4 Jobs")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules("4 jobs are drawn, non-repeating, exclusive jobs to Bravely Second (compare to BD1)")
    }}>BS Exclusive Unique - 4 Jobs</button>
  )
}

const BravelySecondBody = () => {
  const [typeOfRun, setTypeOfRun] = React.useState("");
  const [jobSetOfFour, setJobSetOfFour] = React.useState(["","","",""])
  const [rules, setRules] = React.useState("");

  return (
    <>
      <h2>Bravely Second</h2>
      <PU_BS setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <U_BS setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <ANY_BS setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <BS_ONLY_U_BS setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      {typeOfRun !== "" ? <><h4>Type of Run</h4><p>{typeOfRun}</p></> : <p></p>}
      {jobSetOfFour[0] !== "" ? <><h4>Jobs</h4><p>{jobSetOfFour[0]}, {jobSetOfFour[1]}, {jobSetOfFour[2]}, {jobSetOfFour[3]}</p></> : <p></p>}
      {rules !== "" ? <><hr /><h4>Rules</h4><p>{rules}</p></> : <p></p>}
    </>
  )
}

export default BravelySecondBody;