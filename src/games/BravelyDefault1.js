import React from 'react';

const BravelyDefault1Set = [
  {
    name: "Freelancer"
  },
  {
    name: "Monk"
  },
  {
    name: "White Mage"
  },
  {
    name: "Black Mage"
  },
  {
    name: "Knight"
  },
  {
    name: "Thief"
  },
  {
    name: "Merchant"
  },
  {
    name: "Spell Fencer"
  },
  {
    name: "Time Mage"
  },
  {
    name: "Ranger"
  },
  {
    name: "Summoner"
  },
  {
    name: "Valkyrie"
  },
  {
    name: "Red Mage"
  },
  {
    name: "Salve-Maker"
  },
  {
    name: "Performer"
  },
  {
    name: "Pirate"
  },
  {
    name: "Ninja"
  },
  {
    name: "Swordmaster"
  },
  {
    name: "Arcanist"
  },
  {
    name: "Spiritmaster"
  },
  {
    name: "Templar"
  },
  {
    name: "Dark Knight"
  },
  {
    name: "Vampire"
  },
  {
    name: "Conjurer"
  },
]

const getRandomIntBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const PU_BD1 = ({setJobSetOfFour, setRules}) => {
  let rules = "4 jobs are drawn, and the jobs in each slot are based on story progression.";
  return (
    <button onClick={() => {
      let jobGroup = BravelyDefault1Set.length / 4;
      let job1 = BravelyDefault1Set[getRandomIntBetweenRange(jobGroup * 0, (jobGroup * 1))];
      let job2 = BravelyDefault1Set[getRandomIntBetweenRange(jobGroup * 1, (jobGroup * 2))];
      let job3 = BravelyDefault1Set[getRandomIntBetweenRange(jobGroup * 2, (jobGroup * 3))];
      let job4 = BravelyDefault1Set[getRandomIntBetweenRange(jobGroup * 3, (jobGroup * 4))];
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Progressive Unique - 4 Jobs</button>
  )
}

const U_BD1 = ({setJobSetOfFour, setRules}) => {
  let rules = "4 jobs are drawn, non-repeating."
  return (
    <button onClick={() => {
      let jobIndices = [];
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (BravelyDefault1Set.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let [job1, job2, job3, job4] = [BravelyDefault1Set[jobIndices[0]], BravelyDefault1Set[jobIndices[1]], BravelyDefault1Set[jobIndices[2]], BravelyDefault1Set[jobIndices[3]]];
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Unique - 4 Jobs</button>
  )
}

const ANY_BD1 = ({setJobSetOfFour, setRules}) => {
  return (
    <button onClick={() => {
      let jobIndices = [];
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (BravelyDefault1Set.length));
        jobIndices.push(r);
      }
      let [job1, job2, job3, job4] = [BravelyDefault1Set[jobIndices[0]], BravelyDefault1Set[jobIndices[1]], BravelyDefault1Set[jobIndices[2]], BravelyDefault1Set[jobIndices[3]]];
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules("4 jobs are drawn, possibly repeating.")
    }}>Any - 4 Jobs</button>
  )
}

const BravelyDefault1Body = () => {
  const [jobSetOfFour, setJobSetOfFour] = React.useState(["","","",""])
  const [rules, setRules] = React.useState("");

  return (
    <>
      <h2>Bravely Default</h2>
      <PU_BD1 setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <U_BD1 setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <ANY_BD1 setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      {jobSetOfFour[0] !== "" ? <><h4>Jobs</h4><p>{jobSetOfFour[0]}, {jobSetOfFour[1]}, {jobSetOfFour[2]}, {jobSetOfFour[3]}</p></> : <p></p>}
      {rules !== "" ? <><hr /><h4>Rules</h4><p>{rules}</p></> : <p></p>}
    </>
  )
}

export default BravelyDefault1Body;