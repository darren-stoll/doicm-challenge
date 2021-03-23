import React from 'react';

const FinalFantasy5Set = [
  {
    name: "Freelancer",
    crystal: "None",
    team: "None"
  },
  {
    name: "Knight",
    crystal: "Wind",
    team: "No750"
  },
  {
    name: "Monk",
    crystal: "Wind",
    team: "No750"
  },
  {
    name: "Thief",
    crystal: "Wind",
    team: "No750"
  },
  {
    name: "Black Mage",
    crystal: "Wind",
    team: "750"
  },
  {
    name: "White Mage",
    crystal: "Wind",
    team: "750"
  },
  {
    name: "Blue Mage",
    crystal: "Wind",
    team: "750"
  },
  {
    name: "Red Mage",
    crystal: "Water",
    team: "750"
  },
  {
    name: "Time Mage",
    crystal: "Water",
    team: "750"
  },
  {
    name: "Summoner",
    crystal: "Water",
    team: "750"
  },
  {
    name: "Berserker",
    crystal: "Water",
    team: "No750"
  },
  {
    name: "Mystic Knight",
    crystal: "Water",
    team: "No750"
  },
  {
    name: "Mime",
    crystal: "Late Water",
    team: "None"
  },
  {
    name: "Beastmaster",
    crystal: "Fire",
    team: "No750"
  },
  {
    name: "Geomancer",
    crystal: "Fire",
    team: "750"
  },
  {
    name: "Ninja",
    crystal: "Fire",
    team: "No750"
  },
  {
    name: "Ranger",
    crystal: "Fire",
    team: "No750"
  },
  {
    name: "Bard",
    crystal: "Fire",
    team: "750"
  },
  {
    name: "Dragoon",
    crystal: "Earth",
    team: "No750"
  },
  {
    name: "Dancer",
    crystal: "Earth",
    team: "750"
  },
  {
    name: "Samurai",
    crystal: "Earth",
    team: "No750"
  },
  {
    name: "Chemist",
    crystal: "Earth",
    team: "750"
  },
  {
    name: "Necromancer",
    crystal: "Mobile",
    team: "None"
  },
  {
    name: "Cannoneer",
    crystal: "Mobile",
    team: "None"
  },
  {
    name: "Gladiator",
    crystal: "Mobile",
    team: "None"
  },
  {
    name: "Oracle",
    crystal: "Mobile",
    team: "None"
  },
]

const getRandomIntBetweenRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const REG_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned one class from each crystal. Until all four classes are unlocked, players are only permitted to use the classes they have currently unlocked. Bare/Suppin/Freelance can only be used until the Wind Crystal job is unlocked.";
  return (
    <button onClick={() => {
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth");
      let job1 = windJobs[getRandomIntBetweenRange(0, windJobs.length)];
      let job2 = waterJobs[getRandomIntBetweenRange(0, waterJobs.length)];
      let job3 = fireJobs[getRandomIntBetweenRange(0, fireJobs.length)];
      let job4 = earthJobs[getRandomIntBetweenRange(0, earthJobs.length)];
      setTypeOfRun("Normal Run (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Normal Run (FJF)</button>
  )
}

const REGRAND_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned one class from any of the available jobs when new jobs are unlocked. As above, Bare/Suppin/Freelance can only be used until the Wind Jobs are obtained.";
  return (
    <button onClick={() => {
      let selectableJobs = [];
      let jobIndices = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth");
      let r;

      for (let i = 0; i < 4; i++) {
        if (i === 0) selectableJobs.push(...windJobs);
        else if (i === 1) selectableJobs.push(...waterJobs);
        else if (i === 2) selectableJobs.push(...fireJobs);
        else if (i === 3) selectableJobs.push(...earthJobs);
        r = getRandomIntBetweenRange(0, selectableJobs.length)
        while (jobIndices.indexOf(r) !== -1) r = getRandomIntBetweenRange(0, selectableJobs.length);
        jobIndices.push(r)
      }
      let job1 = selectableJobs[jobIndices[0]];
      let job2 = selectableJobs[jobIndices[1]];
      let job3 = selectableJobs[jobIndices[2]];
      let job4 = selectableJobs[jobIndices[3]];
      setTypeOfRun("Random Run (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Random Run (FJF)</button>
  )
}

const REGCHAOS_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned jobs.";
  return (
    <button onClick={() => {
      let jobIndices = [];
      let selectableJobs = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth");
      selectableJobs.push(...windJobs);
      selectableJobs.push(...waterJobs);
      selectableJobs.push(...fireJobs);
      selectableJobs.push(...earthJobs);
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (selectableJobs.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let job1 = selectableJobs[jobIndices[0]];
      let job2 = selectableJobs[jobIndices[1]];
      let job3 = selectableJobs[jobIndices[2]];
      let job4 = selectableJobs[jobIndices[3]];
      setTypeOfRun("Chaos Run (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Chaos Run (FJF)</button>
  )
}

const REG750_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned one class from each crystal. Until all four classes are unlocked, players are only permitted to use the classes they have currently unlocked. Bare/Suppin/Freelance can only be used until the Wind Crystal job is unlocked.\nPlayers will be be assigned jobs that can break rods or jobs that are similar in play style and theme.";
  return (
    <button onClick={() => {
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind" && c.team === "750");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water" && c.team === "750");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire" && c.team === "750");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth" && c.team === "750");
      let job1 = windJobs[getRandomIntBetweenRange(0, windJobs.length)];
      let job2 = waterJobs[getRandomIntBetweenRange(0, waterJobs.length)];
      let job3 = fireJobs[getRandomIntBetweenRange(0, fireJobs.length)];
      let job4 = earthJobs[getRandomIntBetweenRange(0, earthJobs.length)];
      setTypeOfRun("Normal Run - 750 (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Normal 750 (FJF)</button>
  )
}

const REGRAND750_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned one class from any of the available jobs when new jobs are unlocked. As above, Bare/Suppin/Freelance can only be used until the Wind Jobs are obtained.\nPlayers will be be assigned jobs that can break rods or jobs that are similar in play style and theme.";
  return (
    <button onClick={() => {
      let selectableJobs = [];
      let jobIndices = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind" && c.team === "750");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water" && c.team === "750");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire" && c.team === "750");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth" && c.team === "750");
      let r;

      for (let i = 0; i < 4; i++) {
        if (i === 0) selectableJobs.push(...windJobs);
        else if (i === 1) selectableJobs.push(...waterJobs);
        else if (i === 2) selectableJobs.push(...fireJobs);
        else if (i === 3) selectableJobs.push(...earthJobs);
        r = getRandomIntBetweenRange(0, selectableJobs.length)
        while (jobIndices.indexOf(r) !== -1) r = getRandomIntBetweenRange(0, selectableJobs.length);
        jobIndices.push(r)
      }
      let job1 = selectableJobs[jobIndices[0]];
      let job2 = selectableJobs[jobIndices[1]];
      let job3 = selectableJobs[jobIndices[2]];
      let job4 = selectableJobs[jobIndices[3]];
      setTypeOfRun("Random Run - 750 (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Random 750 (FJF)</button>
  )
}

const REGCHAOS750_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned jobs.\nPlayers will be be assigned jobs that can break rods or jobs that are similar in play style and theme.";
  return (
    <button onClick={() => {
      let jobIndices = [];
      let selectableJobs = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind" && c.team === "750");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water" && c.team === "750");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire" && c.team === "750");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth" && c.team === "750");
      selectableJobs.push(...windJobs);
      selectableJobs.push(...waterJobs);
      selectableJobs.push(...fireJobs);
      selectableJobs.push(...earthJobs);
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (selectableJobs.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let job1 = selectableJobs[jobIndices[0]];
      let job2 = selectableJobs[jobIndices[1]];
      let job3 = selectableJobs[jobIndices[2]];
      let job4 = selectableJobs[jobIndices[3]];
      setTypeOfRun("Chaos Run - 750 (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Chaos 750 (FJF)</button>
  )
}

const REGNO750_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned one class from each crystal. Until all four classes are unlocked, players are only permitted to use the classes they have currently unlocked. Bare/Suppin/Freelance can only be used until the Wind Crystal job is unlocked.\nPlayers will only be assigned jobs that cannot break rods and follow within that play style and theme.";
  return (
    <button onClick={() => {
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind" && c.team === "No750");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water" && c.team === "No750");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire" && c.team === "No750");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth" && c.team === "No750");
      let job1 = windJobs[getRandomIntBetweenRange(0, windJobs.length)];
      let job2 = waterJobs[getRandomIntBetweenRange(0, waterJobs.length)];
      let job3 = fireJobs[getRandomIntBetweenRange(0, fireJobs.length)];
      let job4 = earthJobs[getRandomIntBetweenRange(0, earthJobs.length)];
      setTypeOfRun("Normal Run - No750 (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Normal No750 (FJF)</button>
  )
}

const REGRANDNO750_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned one class from any of the available jobs when new jobs are unlocked. As above, Bare/Suppin/Freelance can only be used until the Wind Jobs are obtained.\nPlayers will only be assigned jobs that cannot break rods and follow within that play style and theme.";
  return (
    <button onClick={() => {
      let selectableJobs = [];
      let jobIndices = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind" && c.team === "No750");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water" && c.team === "No750");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire" && c.team === "No750");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth" && c.team === "No750");
      let r;

      for (let i = 0; i < 4; i++) {
        if (i === 0) selectableJobs.push(...windJobs);
        else if (i === 1) selectableJobs.push(...waterJobs);
        else if (i === 2) selectableJobs.push(...fireJobs);
        else if (i === 3) selectableJobs.push(...earthJobs);
        r = getRandomIntBetweenRange(0, selectableJobs.length)
        while (jobIndices.indexOf(r) !== -1) r = getRandomIntBetweenRange(0, selectableJobs.length);
        jobIndices.push(r)
      }
      let job1 = selectableJobs[jobIndices[0]];
      let job2 = selectableJobs[jobIndices[1]];
      let job3 = selectableJobs[jobIndices[2]];
      let job4 = selectableJobs[jobIndices[3]];
      setTypeOfRun("Random Run - No750 (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Random No750 (FJF)</button>
  )
}

const REGCHAOSNO750_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned jobs.\nPlayers will only be assigned jobs that cannot break rods and follow within that play style and theme.";
  return (
    <button onClick={() => {
      let jobIndices = [];
      let selectableJobs = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind" && c.team === "No750");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water" && c.team === "No750");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire" && c.team === "No750");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth" && c.team === "No750");
      selectableJobs.push(...windJobs);
      selectableJobs.push(...waterJobs);
      selectableJobs.push(...fireJobs);
      selectableJobs.push(...earthJobs);
      while (jobIndices.length < 4) {
        var r = Math.floor(Math.random() * (selectableJobs.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let job1 = selectableJobs[jobIndices[0]];
      let job2 = selectableJobs[jobIndices[1]];
      let job3 = selectableJobs[jobIndices[2]];
      let job4 = selectableJobs[jobIndices[3]];
      setTypeOfRun("Chaos Run - No750 (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Chaos No750 (FJF)</button>
  )
}

const REGFF1_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will only be assigned jobs that were in the original Final Fantasy. Classic runs are always Natural runs, meaning the character can only use their assigned job. Since this is emulating FF1, the same job can be assigned multiple times! (Only Red Mage cannot be given four times since it is a Water Crystal Job.)";
  return (
    <button onClick={() => {
      let selectableJobs = ["Knight", "Thief", "Monk", "White Mage", "Black Mage", "Red Mage"];

      let job1 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length - 1)]; //Avoids having 4 red mages, hence the -1
      let job2 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length)];
      let job3 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length)];
      let job4 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length)];
      setTypeOfRun("Classic (FJF)")
      setJobSetOfFour([job1, job2, job3, job4])
      setRules(rules)
    }}>Classic (FJF)</button>
  )
}

const REGPURECHAOS_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "Players will be assigned jobs totally randomly. Freelancer and Mime are included.";
  return (
    <button onClick={() => {
      // let jobIndices = [];
      let selectableJobs = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth");
      selectableJobs.push(...windJobs);
      selectableJobs.push(...waterJobs);
      selectableJobs.push(...fireJobs);
      selectableJobs.push(...earthJobs);
      selectableJobs.push(FinalFantasy5Set[0])
      selectableJobs.push(FinalFantasy5Set[12])
      // while (jobIndices.length < 4) {
      //   var r = Math.floor(Math.random() * (selectableJobs.length));
      //   if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      // }
      let job1 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length)];
      let job2 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length)];
      let job3 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length)];
      let job4 = selectableJobs[getRandomIntBetweenRange(0, selectableJobs.length)];
      setTypeOfRun("Pure Chaos Run (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Pure Chaos Run (FJF)</button>
  )
}

const REGADVANCE_FF5 = ({setTypeOfRun, setJobSetOfFour, setRules}) => {
  let rules = "The extra jobs available in Gameboy Advance are available in this run. So you should be playing on a version that has them! In this mode the twenty regular jobs are shifted to be distributed in your Wind, Water and Fire slots. So you may get a job earlier! The Earth slot will be an Advance job.";
  return (
    <button onClick={() => {
      let jobIndices = [];
      let regularJobs = [];
      let windJobs = FinalFantasy5Set.filter(c => c.crystal === "Wind");
      let waterJobs = FinalFantasy5Set.filter(c => c.crystal === "Water");
      let fireJobs = FinalFantasy5Set.filter(c => c.crystal === "Fire");
      let earthJobs = FinalFantasy5Set.filter(c => c.crystal === "Earth");
      let advanceJobs = FinalFantasy5Set.filter(c => c.crystal === "Mobile");
      regularJobs.push(...windJobs);
      regularJobs.push(...waterJobs);
      regularJobs.push(...fireJobs);
      regularJobs.push(...earthJobs);
      
      while (jobIndices.length < 3) {
        var r = Math.floor(Math.random() * (regularJobs.length));
        if (jobIndices.indexOf(r) === -1) jobIndices.push(r);
      }
      let job1 = regularJobs[jobIndices[0]];
      let job2 = regularJobs[jobIndices[1]];
      let job3 = regularJobs[jobIndices[2]];
      let job4 = advanceJobs[getRandomIntBetweenRange(0, advanceJobs.length)];
      setTypeOfRun("Advance Run (FJF)")
      setJobSetOfFour([job1.name, job2.name, job3.name, job4.name])
      setRules(rules)
    }}>Advance Run (FJF)</button>
  )
}

const FinalFantasy5Body = () => {
  const [typeOfRun, setTypeOfRun] = React.useState("");
  const [jobSetOfFour, setJobSetOfFour] = React.useState(["","","",""])
  const [rules, setRules] = React.useState("");

  return (
    <>
      <h2>Final Fantasy 5</h2>
      <h5>Better resource: <a href="http://fourjobfiesta.com/" target="_blank" rel="noreferrer">http://fourjobfiesta.com/</a></h5>
      <REG_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGRAND_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGCHAOS_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REG750_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGRAND750_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGCHAOS750_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGNO750_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGRANDNO750_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGCHAOSNO750_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGFF1_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGPURECHAOS_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />
      <REGADVANCE_FF5 setTypeOfRun={setTypeOfRun} setJobSetOfFour={setJobSetOfFour} setRules={setRules} />

      {typeOfRun !== "" ? <><h4>Type of Run</h4><p>{typeOfRun}</p></> : <p></p>}
      {jobSetOfFour[0] !== "" ? <><h4>Jobs</h4><p>{jobSetOfFour[0]}, {jobSetOfFour[1]}, {jobSetOfFour[2]}, {jobSetOfFour[3]}</p></> : <p></p>}
      {rules !== "" ? <><hr /><h4>Rules</h4><p>{rules}</p></> : <p></p>}
    </>
  )
}

export default FinalFantasy5Body;