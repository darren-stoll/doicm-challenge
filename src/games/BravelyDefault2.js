import React from 'react';

const BravelyDefault2Set = [
  {
    name: "Freelancer"
  },
  {
    name: "Black Mage"
  },
  {
    name: "White Mage"
  },
  {
    name: "Vanguard"
  },
  {
    name: "Monk"
  },
  {
    name: "Bard"
  },
  {
    name: "Beastmaster"
  },
  {
    name: "Thief"
  },
  {
    name: "Gambler"
  },
  {
    name: "Berserker"
  },
  {
    name: "Red Mage"
  },
  {
    name: "Ranger"
  },
  {
    name: "Shieldmaster"
  },
  {
    name: "Pictomancer"
  },
  {
    name: "Dragoon"
  },
  {
    name: "Spiritmaster"
  },
  {
    name: "Swordmaster"
  },
  {
    name: "Oracle"
  },
  {
    name: "Salve-Maker"
  },
  {
    name: "Arcanist"
  },
  {
    name: "Bastion"
  },
  {
    name: "Phantom"
  },
  {
    name: "Hellblade"
  },
  {
    name: "Bravebearer"
  },
]

const getRandomIntBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const PU_BD2 = ({setJobSetOfFour, setRules}) => {
  let rules = "4 jobs are drawn, and the jobs in each slot are based on story progression.";
  return (
    <button onClick={() => {
      let jobGroup = BravelyDefault2Set.length / 4;
      let job1 = BravelyDefault2Set[getRandomIntBetweenRange(jobGroup * 0, (jobGroup * 1))];
      let job2 = BravelyDefault2Set[getRandomIntBetweenRange(jobGroup * 1, (jobGroup * 2))];
      let job3 = BravelyDefault2Set[getRandomIntBetweenRange(jobGroup * 2, (jobGroup * 3))];
      let job4 = BravelyDefault2Set[getRandomIntBetweenRange(jobGroup * 3, (jobGroup * 4))];
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Progressive Unique - 4 Jobs</button>
  )
}

const U_BD2 = ({setJobSetOfFour, setRules}) => {
  let rules = "4 jobs are drawn, non-repeating."
  return (
    <button onClick={() => {
      let jobIndices = [];
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (BravelyDefault2Set.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let [job1, job2, job3, job4] = [BravelyDefault2Set[jobIndices[0]], BravelyDefault2Set[jobIndices[1]], BravelyDefault2Set[jobIndices[2]], BravelyDefault2Set[jobIndices[3]]];
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Unique - 4 Jobs</button>
  )
}

const ANY_BD2 = ({setJobSetOfFour, setRules}) => {
  return (
    <button onClick={() => {
      let jobIndices = [];
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (BravelyDefault2Set.length));
        jobIndices.push(r);
      }
      let [job1, job2, job3, job4] = [BravelyDefault2Set[jobIndices[0]], BravelyDefault2Set[jobIndices[1]], BravelyDefault2Set[jobIndices[2]], BravelyDefault2Set[jobIndices[3]]];
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules("4 jobs are drawn, possibly repeating.")
    }}>Any - 4 Jobs</button>
  )
}


const BravelyDefault2Body = () => {
  const [jobSetOfFour, setJobSetOfFour] = React.useState(["","","",""])
  const [rules, setRules] = React.useState("");

  return (
    <>
      <h2>Bravely Default 2</h2>
      <PU_BD2 setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <U_BD2 setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <ANY_BD2 setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      {jobSetOfFour[0] !== "" ? <><h4>Jobs</h4><p>{jobSetOfFour[0]}, {jobSetOfFour[1]}, {jobSetOfFour[2]}, {jobSetOfFour[3]}</p></> : <p></p>}
      {rules !== "" ? <><hr /><h4>Rules</h4><p>{rules}</p></> : <p></p>}
    </>
  )
}

export default BravelyDefault2Body;