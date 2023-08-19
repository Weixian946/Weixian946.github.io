/*const CrisesList = [
  'Index    Needs   Bonus   Penalty',
  '\nA    2 Ammo    None    1 scientist',
  '\nB    5 Ammo    1 specimen    1 personnel',
  '\nC    2 Ammo    None    1 food',
  '\nD    1 herb    None    1 food',
  '\nE    1 Ammo    None    1 personnel',
  '\nF    1 Timber    None    1 tunnel',
  '\nG    2 Timber    1 specimen    1 scientist',
  '\nH    1 Timber and 1 herb   None    1 personnel',
  '\nI    2 Ammo    None    1 tunnel',
  '\nJ    1 timber    None    1 tunnel',
];*/

// Description; CHOICE A: AMMO, TIMBER, HERB, TECH, BONUS SPECIMEN;
//CHOICE B: SCIENTIST, # of days personnel is lost (zero means no personnel lost), FOOD, TUNNEL
const array1 = [
["Farm Attack 1",[1,0,0,0,0],[0,0,1,0]],
["Small Mines",[0,0,0,1,0],[0,1,0,0]],
["Small Bomb Attack",[0,1,0,0,0],[0,0,0,1]],
["Tunnel Sabotage",[1,0,0,0,0],[0,0,0,1]],
["Thunderstorm",[0,1,0,0,0],[0,0,0,1]],
["Farm Fence Broken",[0,1,0,0,0],[0,0,1,0]],
];

const array2 = [
  ["Small Horde Wave",[2,0,0,0,1],[0,1,0,0]],
  ["Farm Attack 2",[1,0,1,0,1],[0,0,1,0]],
  ["Biological Attack",[0,1,1,0,1],[0,1,0,0]],
  ["Fire needed",[1,1,0,0,1],[0,1,0,0]],
  ["Small chemical attack",[1,0,1,0,1],[0,1,0,0]],
  ];

// 12 easy NightTimes including 1 Silent Night
/*const array1 = [
    'B. Small Horde Wave: \n Choice A-Expend 2 Ammo to defeat the mini horde; \n Choice B-lose 1 personnel for 1 day',
    'C. Farm attack by dogs: \n Choice A-Expend 1 Ammo to repel dogs; \n Choice B-lose 1 food',
    'D. Farm attack by pests: \n Choice A-Expend 1 Herb to decontaminate; \n Choice B-lose 2 food',
    'E. Mines detected: \n Choice A-Expend 1 Tech to de-activate mine; \n Choice B-lose 1 personnel for 1 day',
    'F. Bombing imminent: \n Choice A-Expend 1 Timber to strengthen tunnels; \n Choice B-lose 1 tunnel',
    'H. Biological Attack: \n Choice A-Expend 1 Timber and 1 Herb to filter air vents; \n Choice B-lose 1 personnel for 1 day',
    'I. Trackers nearby: \n Choice A-Expend 1 Ammo to intercept; \n Choice B-lose 1 tunnel',
    'J. Thunderstorm: \n Choice A-Expend 1 Timber to prevent flooding; \n Choice B-lose 1 tunnel',
    'K. Silent Night - Opportunity to strengthen.',
    'K. Silent Night - Opportunity to strengthen.',
    'L. Firewall needed: \n Choice A-Expend 1 Timber and 1 Ammo; \n Choice B-lose 1 personnel for 1 day',
    'M. Personnel bleeding: \n Choice A-Expend 1 herb and 1 Ammo; \n Choice B-lose 1 personnel for 1 day',
    'N. Farm Fence broken: \n Choice A-Expend 1 Timber to repair fence; \n Choice B-lose 1 food',
  ];*/

  // 10 difficult nightimes including 2 Silent Night
  
  /*const array2 = [
    'A. Scientist Abducted \n Choice A-Expend 2 Ammo and 1 tech to rescue scientist. \n Choice B-lose 1 scientist=gameover',
    'O. Big Horde Wave: \n Choice A-Expend 2 Ammo and 1 timber to defeat the Big Horde and gain 1 specimen; \n Choice B-lose 1 personnel permanently',
    'P. Farm attack by locusts: \n Choice A-Expend 1 timber and 1 herb to repel locusts; \n Choice B-lose 3 food',
    'Q. Farm attack by wolves: \n Choice A-Expend 1 timber and 1 ammo to repel wolves; \n Choice B-lose 2 food',
    'G. Decoy Lab needed: \n Choice A-Expend 2 Timber and 1 tech to distract Horde; \n Choice B-lose 1 scientist=gameover',
    'R. Chemical Attack: \n Choice A-Expend 1 tech and 1 herb to filter air vents; \n Choice B-lose 1 personnel permanently',
    'S. Cluster Bomb attack on tunnels: \n Choice A-Expend 1 Ammo and 1 timber; \n Choice B-lose 2 tunnels',
    'T. Mega Thunderstorm: \n Choice A-Expend 2 timber to prevent flooding; \n Choice B-lose 2 tunnels',
    'K. Silent Night - Opportunity to strengthen.',
    'K. Silent Night - Opportunity to strengthen.',
  ];*/

  // Description; CHOICE A: AMMO, TIMBER, HERB, TECH, BONUS SPECIMEN; 
  //CHOICE B: SCIENTIST, # of days personnel is lost (zero means no personnel lost), FOOD, TUNNEL
  const array3 = [
    ["Big Horde Wave",[2,1,0,0,2],[0,99,0,0]],
    ["Big Farm Attack 1",[1,2,0,0,2],[0,0,3,0]],
    ["Decoy Lab Needed",[0,2,0,1,2],[1,0,0,0]],
    ["Chemical Attack",[0,1,1,1,2],[0,99,0,0]],
    ["Big Tunnel Sabotage",[1,1,1,0,2],[0,0,0,2]],
    ["Locusts Wave",[1,1,1,0,2],[0,1,1,1]],
    ];

  const array4 = [
      ["Scientist Abducted",[2,2,0,0,3],[1,0,0,0]],
      ["Big Farm Attack 2",[1,2,1,0,3],[0,0,2,0]],
      ["Big Thunderstorm",[0,3,0,0,3],[0,0,0,2]],
      ];


  //const Horde1 = ['X. Mega Horde Wave: \n Choice A-Expend 2 ammo and 1 timber and 1 herb and gain 2 specimen; \n Choice B-lose all personnel',];

  const Horde1 = [["MEGA Horde Wave!",[2,1,1,0,3],[1,0,0,0]]];
  
  //const Horde2 = ['Y. Ultra Horde Wave: \n Choice A-Expend 3 ammo and 2 timber and 2 herb and gain 3 specimen; \n Choice B-lose all personnel',];
  const Horde2 = [["ULTRA HORDE WAVE!!",[3,2,2,0,4],[1,0,0,0]]];

  // shuffle the crises deck using Durstenfeld shuffle algorithm */
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

  shuffleArray(array1);
  shuffleArray(array2);
  shuffleArray(array3);
  shuffleArray(array4);
  const array = array1.concat(array2).concat(Horde1).concat(array3).concat(array4).concat(Horde2)

  let totalnights = array.length // 
  const target = 30; // no. of specimens to be processed

  //const CrisesList = `Total of ${totalnights} nights = ${array1.length} easier Nights (max 2ammo/1herb/1timber/1tech/combos),then 1 MegaHorde,then ${array2.length} harder nights(max 2ammo/1herb/2timber/1tech/combos), then 1 Ultra Horde. \n Hordes 1/2 need 2/3 ammo, 1/2 herbs, 1/2 timbers but gain 2/3 specimens upon success. \n Failure to pass Horde Wave = Game Over.`;

  // Define the starting conditions for lose
  let tunnels = 3;
  let personnel = 4; //minimum is always 4 
  let scientist = 1;
  let robots = 0;
  let RobotAsst = 0;
  // Define the starting conditions for win
  let specimens = 0;
  let ProcessedSpecimens = 0;

  // Define the resources
  let ammo = 2;
  let food = 5;
  let timber = 1;
  let herb = 1;
  let tech = 1;

  let n = 0;
  let CrisisAtHand = '';

  // Define the life and hunger status of personnel
  let SoldierOut = 0;
  let BotanistOut = 0;
  let LumberOut = 0;
  let FarmerOut = 0;
  let ScientistOut = 0;
  let someonejustskipped = false;
  let DaysOut = 0;
  let Soldierhungertoken = 0;
  let Botanisthungertoken = 0;
  let Lumbersmithhungertoken = 0;
  let Farmerhungertoken = 0;
  let Scientisthungertoken = 0;
  let hungryPersonThisRound = 0;
  let hungertokensthisround = 0;
  const hungertokenlimit = 3;
  let SoldierFirstTime = true;
  let BotanistFirstTime = true;
  let LumberFirstTime = true;
  let FarmerFirstTime = true;
  let ScientistFirstTime = true;

  // Initialize the game
  function initializeGame() {

    // Initialize the starting conditions
    tunnels = 3;
    personnel = 4; //minimum is always 4 
    scientist = 1;
    robots = 0;
    RobotAsst = 0;

    // Init the starting conditions for win
    specimens = 0;
    ProcessedSpecimens = 0;
    
    // Init the starting number for resources
    ammo = 2;
    food = 5;
    timber = 1;
    herb = 1;
    tech = 1;

    n = 0;
    CrisisAtHand = '';

    // Init the life and hunger status of personnel
    SoldierOut = 0;
    BotanistOut = 0;
    LumberOut = 0;
    FarmerOut = 0;
    someonejustskipped = false;
    DaysOut = 0;
    Soldierhungertoken = 0;
    Botanisthungertoken = 0;
    Lumbersmithhungertoken = 0;
    Farmerhungertoken = 0;
    hungryPersonThisRound = 0;
    hungertokensthisround = 0;
    SoldierFirstTime = true;
    BotanistFirstTime = true;
    LumberFirstTime = true;
    FarmerFirstTime = true;
       
    // Clear any previous message or status

    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = "" ;

    const pictureContainer = document.querySelector('.picture');
    pictureContainer.innerHTML = `<img src="images/title.png" alt="title">`;

    // Display the first crisis
    daytime();
  }

  // Update the Night 
  function NighTime() {

    if (WinOrLose()){
      // do nothing.
    }else{

      //reset first times for hunger choices
      SoldierFirstTime = true;
      BotanistFirstTime = true;
      LumberFirstTime = true;
      FarmerFirstTime = true;
      hungryPersonThisRound = 0;
      hungertokensthisround = 0;

      //count down days out if they are any
      if (SoldierOut > 0){
        SoldierOut -=1;
      }
      if (BotanistOut > 0){
        BotanistOut -=1;
      }
      if (LumberOut > 0){
        LumberOut -=1;
      }
      if (FarmerOut > 0){
        FarmerOut -=1;
      }

      if (ScientistOut > 0){
        ScientistOut -=1;
      }

      // clear old buttons
      clearbuttons();

      // display status
      updatestatus();
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = CreateDescription(n);

      // Generate the choice buttons
      CreateButtons(n);
      n=n+1;
    } // end of win or lose loop
  }

  // Handle a choice A
  function updateResourceNumbers(j) {
    ammo -= array[j][1][0];
    timber -= array[j][1][1];
    herb -= array[j][1][2];
    tech -= array[j][1][3];
    specimens += array[j][1][4];
  }

  // Handle a choice B
  function updateSurvivalNumbers(j) {
    scientist -= array[j][2][0];
    food -= array[j][2][2];
    tunnels -= array[j][2][3];

    if (array[j][2][1]>0){
      someonejustskipped = true;
      
      DaysOut = array[j][2][1];
      if (DaysOut >25){
        personnel -=1;
      }
    }
  }
  
  
  // Check if the game has been won or lost
  function WinOrLose() {
    
    // clear old buttons
    clearbuttons();

    if (ProcessedSpecimens >= target) {
        // creat new words and status
        const wordContainer = document.querySelector('.word');
        wordContainer.innerText = "";
        const pictureContainer = document.querySelector('.picture');
        pictureContainer.innerHTML = `<img src="images/you win.png" alt="you win">`;
        updatestatus();
        return true
    } else if (tunnels == 0 || scientist == 0 || personnel == 0 || n == totalnights) {
        const wordContainer = document.querySelector('.word');
        wordContainer.innerText = "";
        const pictureContainer = document.querySelector('.picture');
        pictureContainer.innerHTML = `<img src="images/gameover.png" alt="gameover">`;
        updatestatus();
        const buttonEnd = document.createElement('button');
        buttonEnd.innerText = "Click to Restart";
        buttonEnd.addEventListener('click', function () {
        initializeGame();  
        });
        const lettersContainer = document.querySelector('.letters');
        lettersContainer.appendChild(buttonEnd);   
        return true   
    } else {
      return false;
    };
  }

  function daytime() {

    //Process specimens from previous night
    if (specimens >= (scientist+RobotAsst)){
      ProcessedSpecimens = ProcessedSpecimens + scientist + 0.5*RobotAsst;
      specimens = specimens - scientist - RobotAsst;
    } else{
      if (specimens > 0){
        ProcessedSpecimens = ProcessedSpecimens + scientist;
        specimens = specimens - scientist;
        ProcessedSpecimens = ProcessedSpecimens + 0.5*specimens;
        specimens = 0;
      }
    };

    // console helps track the maximum needed of each resource
    
    if (n < 11){
      let RandomCrisisIndex = Math.floor(Math.random() * (11-n));
      let PercentChance = Math.round(1/(11-n)*100);
      console.log(`there is a ${PercentChance} % chance that the next card is ${array[n+RandomCrisisIndex][0]}`)

      function MaxOf(ColIndex){
        var MaxRes = 0;
        for(var counter = n; counter < 11;counter++){
          if (array[counter][1][ColIndex]>MaxRes){
            MaxRes = array[counter][1][ColIndex]
          }
        } 
        return MaxRes
      }
     
      console.log(`max ammo needed for the first 11 nights is ${MaxOf(0)}`)
      console.log(`max timber needed for the 11 nights is ${MaxOf(1)}`)
      console.log(`max herb needed for the 11 nights is ${MaxOf(2)}`)
      console.log(`max tech needed for the 11 nights is ${MaxOf(3)}`)
    }

    if (n == 11){
      console.log(`the next card is ${array[11][0]}`)
    }
   
    if (n > 11 && n < (array.length-1)){
      let RandomCrisisIndex = Math.floor(Math.random() * (array.length-1-n));
      let PercentChance = Math.round(1/(array.length-1-n)*100);
      console.log(`there is a ${PercentChance} % chance that the next card is ${array[n+RandomCrisisIndex][0]}`)
      function MaxOf(ColIndex){
        var MaxRes = 0;
        for(var counter = 12; counter < (array.length -1);counter++){
          if (array[counter][1][ColIndex]>MaxRes){
            MaxRes = array[counter][1][ColIndex]
          }
        } 
        return MaxRes
      }
     
      console.log(`max ammo needed for the game is ${MaxOf(0)}`)
      console.log(`max timber needed for the game is ${MaxOf(1)}`)
      console.log(`max herb needed for the game is ${MaxOf(2)}`)
      console.log(`max tech needed for the game is ${MaxOf(3)}`)
    }

    if (n == (array.length-1)){
      console.log(`the next card is ${array[(array.length-1)][0]}`)
    }

    function SumOf(ColIndex){
      var TotalRes = 0;
      for(var counter = n; counter < array.length;counter++){
        TotalRes += array[counter][1][ColIndex]
      } 
      return TotalRes
    }
   
    console.log(`total ammo needed for the remainder of the game is ${SumOf(0)}`)
    console.log(`total timber needed for the remainder of the game is ${SumOf(1)}`)
    console.log(`total herb needed for the remainder of the game is ${SumOf(2)}`)
    console.log(`total tech needed for the remainder of the game is ${SumOf(3)}`)

    updatestatus();

    if (WinOrLose()){
      //do nothing
    } else{
      // clear old buttons
      clearbuttons();
      // clear old messages
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = ""

      // check if anyone just got skipped
      if(someonejustskipped){
        whoskipped();
        } else /* try to feed the characters*/{
          // if there is not enough food, give out hunger tokens until the hunger is resolved
          if (food < (personnel+scientist)) {
              ResolveHunger(); // ResolveHunger iterates within itself and issues hungertokesn until no more hungry people this round
          } else {
              food = food - personnel - scientist;
              DisplaySoldier();
          }
        };   
    }; // end of else loop for Win or Lose 
  }

  function DisplaySoldier() {

    // update the message
    updatestatus();


    // clear old buttons
    clearbuttons();

    if(SoldierOut==0){
      // show the role
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText += "What do you want the Soldier to do? ";
      // Generate the choice buttons
      const lettersContainer = document.querySelector('.letters');
      const buttonS1 = document.createElement('button');
      buttonS1.innerText = "2 Ammo";
      buttonS1.addEventListener('click', function () {
      ammo = ammo + 2; DisplayBotanist();
      });
      lettersContainer.appendChild(buttonS1);

      const buttonS2 = document.createElement('button');
      buttonS2.innerText = "1 Timber";
      buttonS2.addEventListener('click', function () {
      timber = timber + 1; DisplayBotanist();
      });
      lettersContainer.appendChild(buttonS2);

      const buttonS3 = document.createElement('button');
      buttonS3.innerText = "1 Food";
      buttonS3.addEventListener('click', function () {
      food = food + 1; DisplayBotanist();
      });
      lettersContainer.appendChild(buttonS3);

      const buttonS4 = document.createElement('button');
      buttonS4.innerText = "1 specimen";
      buttonS4.addEventListener('click', function () {
      specimens = specimens + 1; DisplayBotanist();
      });
      lettersContainer.appendChild(buttonS4);

      const buttonS5 = document.createElement('button');
      buttonS5.innerText = "1 Tech";
      buttonS5.addEventListener('click', function () {
      tech = tech + 1; DisplayBotanist();
      });
      lettersContainer.appendChild(buttonS5);
    } else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText += "Soldier not available";
      const lettersContainer = document.querySelector('.letters');
      const button = document.createElement('button');
      button.innerText = "Next personnel";
      button.addEventListener('click', function () {
      DisplayBotanist();
      });
      lettersContainer.appendChild(button);
    }
    
  }

  function DisplayBotanist() {

     // clear old buttons
     clearbuttons();

    // update the message
    updatestatus();

    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the Botanist to do? ";

    if(BotanistOut==0){
    // Generate the choice buttons
    const lettersContainer = document.querySelector('.letters');
    const buttonB1 = document.createElement('button');
    buttonB1.innerText = "1 Herb";
    buttonB1.addEventListener('click', function () {
    herb = herb + 1; DisplayLumbersmith();
    });
    lettersContainer.appendChild(buttonB1);

    const buttonB2 = document.createElement('button');
    buttonB2.innerText = "1 Food";
    buttonB2.addEventListener('click', function () {
    food = food + 1; DisplayLumbersmith();
    });
    lettersContainer.appendChild(buttonB2);

    const buttonB3 = document.createElement('button');
    buttonB3.innerText = "1 Specimen";
    buttonB3.addEventListener('click', function () {
    specimens = specimens + 1; DisplayLumbersmith();
    });
    lettersContainer.appendChild(buttonB3);
    }else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "Botanist not available";
      const lettersContainer = document.querySelector('.letters');
      const button = document.createElement('button');
      button.innerText = "Next personnel";
      button.addEventListener('click', function () {
      DisplayLumbersmith();
      });
      lettersContainer.appendChild(button);
    }
  }

  // Display the Lumbersmith
  function DisplayLumbersmith() {

      // clear old buttons
      clearbuttons();

    // update the message
    updatestatus();

    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the Lumbersmith to do? ";
    
    if(LumberOut==0){
    // Generate the choice buttons
    const lettersContainer = document.querySelector('.letters');
    const buttonL1 = document.createElement('button');
    buttonL1.innerText = "1 Ammo";
    buttonL1.addEventListener('click', function () {
    ammo = ammo + 2; DisplayFarmer();
    });
    lettersContainer.appendChild(buttonL1);

    const buttonL2 = document.createElement('button');
    buttonL2.innerText = "2 Timber";
    buttonL2.addEventListener('click', function () {
    timber = timber + 2; DisplayFarmer();
    });
    lettersContainer.appendChild(buttonL2);

    const buttonL3 = document.createElement('button');
    buttonL3.innerText = "1 Food";
    buttonL3.addEventListener('click', function () {
    food = food + 1; DisplayFarmer();
    });
    lettersContainer.appendChild(buttonL3);

    const buttonL4 = document.createElement('button');
    buttonL4.innerText = "1 Specimen";
    buttonL4.addEventListener('click', function () {
    specimens = specimens + 1; DisplayFarmer();
    });
    lettersContainer.appendChild(buttonL4);

    const buttonL5 = document.createElement('button');
    buttonL5.innerText = "1 Tech";
    buttonL5.addEventListener('click', function () {
    tech = tech + 1; DisplayFarmer();
    });
    lettersContainer.appendChild(buttonL5);

    }else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "Lumbersmith not available";
      const lettersContainer = document.querySelector('.letters');
      const button = document.createElement('button');
      button.innerText = "Next personnel";
      button.addEventListener('click', function () {
      DisplayFarmer();
      });
      lettersContainer.appendChild(button);
    }
  }

  function DisplayFarmer() {

      // clear old buttons
      clearbuttons();

    // update the message
    //const messageContainer = document.querySelector('.message');
    //messageContainer.innerText = `It is Day ${n+1}.` ;
    updatestatus();

    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the farmer to do? ";

    if (FarmerOut==0){
    // Generate the choice buttons
    const lettersContainer = document.querySelector('.letters');
    const buttonF1 = document.createElement('button');
    buttonF1.innerText = "1 Ammo";
    buttonF1.addEventListener('click', function () {
    ammo = ammo + 1; DisplayScientist();
    });
    lettersContainer.appendChild(buttonF1);

    const buttonF2 = document.createElement('button');
    buttonF2.innerText = "1 Timber";
    buttonF2.addEventListener('click', function () {
    timber = timber + 1; DisplayScientist();
    });
    lettersContainer.appendChild(buttonF2);

    const buttonF3 = document.createElement('button');
    buttonF3.innerText = "2 Food";
    buttonF3.addEventListener('click', function () {
    food = food + 2; DisplayScientist();
    });
    lettersContainer.appendChild(buttonF3);

    const buttonF4 = document.createElement('button');
    buttonF4.innerText = "1 Specimen";
    buttonF4.addEventListener('click', function () {
    specimens = specimens + 1; DisplayScientist();
    });
    lettersContainer.appendChild(buttonF4);
    }else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "Farmer not available";
      const lettersContainer = document.querySelector('.letters');
      const button = document.createElement('button');
      button.innerText = "Next personnel";
      button.addEventListener('click', function () {
      DisplayScientist();
      });
      lettersContainer.appendChild(button);
    }
  }

  function DisplayScientist() {

    // clear old buttons
    clearbuttons();

    // update the message
    //const messageContainer = document.querySelector('.message');
    //messageContainer.innerText = `It is Day ${n+1}.` ;
    updatestatus();

    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the Scientist to do? ";

    if (ScientistOut ==0 && scientist>0){
      // Generate the choice buttons
      const lettersContainer = document.querySelector('.letters');
      const buttonSc1 = document.createElement('button');
      buttonSc1.innerText = "Collect Specimens";
      buttonSc1.addEventListener('click', function () {
      specimens = specimens + scientist; Displayrobots();
        });
      lettersContainer.appendChild(buttonSc1);
        
      const buttonSc2 = document.createElement('button');
      buttonSc2.innerText = "Collect Food";
      buttonSc2.addEventListener('click', function () {
      food = food + scientist; Displayrobots();
      });
      lettersContainer.appendChild(buttonSc2);

      const buttonSc3 = document.createElement('button');
      buttonSc3.innerText = "Collect 2 Tech";
      buttonSc3.addEventListener('click', function () {
      tech = tech + 2*scientist; Displayrobots();
      });
      lettersContainer.appendChild(buttonSc3);

      if (tech < 1 || timber < 1){
        // do nothing
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText += "You do not have enough resources for a robot.";
      }else{
        const button = document.createElement('button');
        button.innerText = "Build a normal robot for 1 tech and 1 timber.";
        button.addEventListener('click', function () {
        tech = tech - 1; timber = timber - 1; robots = robots + 1;Displayrobots(); 
        });
        lettersContainer.appendChild(button);
      }
      
      if (tech < 1 || herb < 1){
        // do nothing
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText += "You do not have enough resources for an assistant science robot.";
      }else{
        const button = document.createElement('button');
        button.innerText = "Build an assistant science robot for 1 tech and 1 herb.";
        button.addEventListener('click', function () {
        tech = tech - 1; herb = herb - 1; RobotAsst = RobotAsst + 1;Displayrobots(); 
        });
        lettersContainer.appendChild(button);
      }
    } else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "Scientist not available";
      const lettersContainer = document.querySelector('.letters');
      const button = document.createElement('button');
      button.innerText = "Next personnel";
      button.addEventListener('click', function () {
      Displayrobots();
      });
      lettersContainer.appendChild(button);
    }
}

function Displayrobots() {

  // clear old buttons
  clearbuttons();

  // update the message
  //const messageContainer = document.querySelector('.message');
  //messageContainer.innerText = `It is Day ${n+1}.` ;
  updatestatus();

  if (robots>0){
    // if there is enough sun, robots work
    //let sun = Math.random()
    //console.log(`sun today is at ${sun*100} % intensity `)
    //if (sun>0.25){
      // show the role
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "What do you want the robots to do? ";

      // Generate the choice buttons
      const lettersContainer = document.querySelector('.letters');
      const buttonSc1 = document.createElement('button');
      buttonSc1.innerText = "Collect Specimens";
      buttonSc1.addEventListener('click', function () {
        specimens = specimens + robots; NighTime()
        });
        lettersContainer.appendChild(buttonSc1);
        
      const buttonSc2 = document.createElement('button');
      buttonSc2.innerText = "Collect Food";
      buttonSc2.addEventListener('click', function () {
      food = food + robots; NighTime();
      });
      lettersContainer.appendChild(buttonSc2);
    /*}else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "There is insufficient solar power for the robot to work today.";
      const lettersContainer = document.querySelector('.letters');
      const buttonSc1 = document.createElement('button');
      buttonSc1.innerText = "OK";
      buttonSc1.addEventListener('click', function () {
      NighTime();
      });
      lettersContainer.appendChild(buttonSc1);
    }*/
  } else {
      NighTime();
  }
}

function whoskipped(){

  //reset 'someone just skipped"
  someonejustskipped = false;

  const wordContainer = document.querySelector('.word');
  wordContainer.innerText += "Which character skips his turn?";
      // Generate the choice buttons
      if(SoldierOut==0){
        const lettersContainer = document.querySelector('.letters');
        const buttonP1 = document.createElement('button');
        buttonP1.innerText = "Soldier";
        buttonP1.addEventListener('click', function () {
        SoldierOut += DaysOut ;daytime();
        });
        lettersContainer.appendChild(buttonP1);
      }

      if(BotanistOut==0){
        const lettersContainer = document.querySelector('.letters');
        const buttonP2 = document.createElement('button');
        buttonP2.innerText = "Botanist";
        buttonP2.addEventListener('click', function () {
        BotanistOut += DaysOut ;daytime();
        });
        lettersContainer.appendChild(buttonP2);
      }
      
      if(LumberOut==0){
        const lettersContainer = document.querySelector('.letters');
        const buttonP3 = document.createElement('button');
        buttonP3.innerText = "Lumbersmith";
        buttonP3.addEventListener('click', function () {
        LumberOut += DaysOut ;daytime();
        });
        lettersContainer.appendChild(buttonP3);
      }
      
      if(FarmerOut==0){
        const lettersContainer = document.querySelector('.letters');
        const buttonP4 = document.createElement('button');
        buttonP4.innerText = "Farmer";
        buttonP4.addEventListener('click', function () {
        FarmerOut += DaysOut;daytime();
        });
        lettersContainer.appendChild(buttonP4);
      } 
  }

  function ResolveHunger(){
      // clear old buttons
      clearbuttons();
      // clear old messages
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = ""
        hungryPersonThisRound = scientist + personnel - food - hungertokensthisround;
        if (hungryPersonThisRound >0){
            const wordContainer = document.querySelector('.word');
            wordContainer.innerText += `Not enough food. Which personnel gets a hunger token to replace food? \n WARNING: if a character gets ${hungertokenlimit} tokens, he is removed from the game due to overdose.`;
            // Generate the choice buttons
            if(SoldierOut==0 && SoldierFirstTime){
              const lettersContainer = document.querySelector('.letters');
              const buttonP1 = document.createElement('button');
              buttonP1.innerText = `Soldier. Existing Hunger Tokens = ${Soldierhungertoken}`;
              buttonP1.addEventListener('click', function () {
              Soldierhungertoken += 1;hungertokensthisround += 1; SoldierFirstTime = false; ResolveHunger();
              });
              lettersContainer.appendChild(buttonP1);
            }
      
            if(BotanistOut==0 && BotanistFirstTime){
              const lettersContainer = document.querySelector('.letters');
              const buttonP2 = document.createElement('button');
              buttonP2.innerText = `Botanist. Existing Hunger Tokens = ${Botanisthungertoken}`;
              buttonP2.addEventListener('click', function () {
              Botanisthungertoken += 1;hungertokensthisround += 1;BotanistFirstTime = false;ResolveHunger();
              });
              lettersContainer.appendChild(buttonP2);
            }
            
            if(LumberOut==0 && LumberFirstTime){
              const lettersContainer = document.querySelector('.letters');
              const buttonP3 = document.createElement('button');
              buttonP3.innerText = `Lumbersmith. Existing Hunger Tokens = ${Lumbersmithhungertoken}`;
              buttonP3.addEventListener('click', function () {
              Lumbersmithhungertoken += 1;hungertokensthisround += 1;LumberFirstTime = false;ResolveHunger();
              });
              lettersContainer.appendChild(buttonP3);
            }
            
            if(FarmerOut==0 && FarmerFirstTime){
              const lettersContainer = document.querySelector('.letters');
              const buttonP4 = document.createElement('button');
              buttonP4.innerText = `Farmer. Existing Hunger Tokens = ${Farmerhungertoken}`;
              buttonP4.addEventListener('click', function () {
              Farmerhungertoken += 1;hungertokensthisround += 1;FarmerFirstTime=false;ResolveHunger();
              });
              lettersContainer.appendChild(buttonP4);
            }

            if(ScientistOut==0 && ScientistFirstTime){
              const lettersContainer = document.querySelector('.letters');
              const buttonP5 = document.createElement('button');
              buttonP5.innerText = `Scienist. Existing Hunger Tokens = ${Scientisthungertoken}`;
              buttonP5.addEventListener('click', function () {
              Scientisthungertoken += 1;hungertokensthisround += 1;ScientistFirstTime=false;ResolveHunger();
              });
              lettersContainer.appendChild(buttonP5);
            }
        }else {
          // if hungry people are fed with hunger tokens.. then check if anyone died from too many hunger tokens.
          food = 0;
          if (SoldierOut==0 && Soldierhungertoken == hungertokenlimit){
            SoldierOut = 99;
            personnel -= 1;
            const wordContainer = document.querySelector('.word');
            wordContainer.innerText += "\n Soldier removed from game due to overdose." 
          }
          if (BotanistOut==0 && Botanisthungertoken == hungertokenlimit){
            BotanistOut = 99;
            personnel -= 1;
            const wordContainer = document.querySelector('.word');
            wordContainer.innerText += "\n Botanist removed from game due to overdose."
          }
          if (LumberOut==0 && Lumbersmithhungertoken== hungertokenlimit){
            LumberOut = 99;
            personnel -= 1;
            const wordContainer = document.querySelector('.word');
            wordContainer.innerText += "\n Lumbersmith removed from game due to overdose."
          }
          if (FarmerOut==0 && Farmerhungertoken == hungertokenlimit){
            FarmerOut = 99;
            personnel -= 1;
            const wordContainer = document.querySelector('.word');
            wordContainer.innerText += "\n Farmer removed from game due to overdose."
          }
          if (scientist > 0 && Scientisthungertoken == hungertokenlimit){
            scientist -=1;
            const wordContainer = document.querySelector('.word');
            wordContainer.innerText += "\n Scientist removed from game due to overdose."
            checkWinOrLose();
          }
          DisplaySoldier();
        }
  }

  // function to create description based on array
  function CreateDescription(i){
  let description = "";
  // Description; NEEDS: AMMO, TIMBER, HERB, TECH, BONUS SPECIMEN; PENALTIES: SCIENTIST, PERSONNEL, FOOD, TUNNEL
  // create string for expenditure needs
  let ammoV = array[i][1][0];
  console.log(ammoV);
  let ammoStr = ``;
  if (ammoV > 0){
    ammoStr = `${ammoV} ammo, `;
  }

  let timberV = array[i][1][1];
  let timberStr = ``;
  if (timberV > 0){
    timberStr = `${timberV} timber, `;
  }

  let herbV = array[i][1][2];
  let herbStr = ``;
  if (herbV > 0){
    herbStr = `${herbV} herb, `;
  }

  let techV = array[i][1][3];
  let techStr = ``;
  if (techV > 0){
    techStr = `${techV} tech, `;
  }

  let specimenV = array[i][1][4];
  let specimenStr = ``;
  if (specimenV > 0){
    specimenStr = `but gain ${specimenV} specimen.`;
  }

  let ChoiceAStr = `Expend ${ammoStr}${timberStr}${herbStr}${techStr}${specimenStr}`;


  // create string for penalties
  // Description; NEEDS: AMMO, TIMBER, HERB, TECH, BONUS SPECIMEN; PENALTIES: SCIENTIST, PERSONNEL, FOOD, TUNNEL
  let ScientistV = array[i][2][0];
  let ScientistStr = "";
  if (ScientistV > 0){
    ScientistStr = `${ScientistV} Scientist, `;
  }

  let PersonnelDaysV = array[i][2][1];
  let PersonnelStr = "";
  if (PersonnelDaysV > 0){
    if(PersonnelDaysV==99){
      PersonnelStr= `1 Personnel permanently `;
    }else{
      PersonnelStr= `1 Personnel for ${PersonnelDaysV} days (but must still be fed), `;
    }
  }

  let FoodV = array[i][2][2];
  let FoodStr = "";
  if (FoodV > 0){
    FoodStr = `${FoodV} Food, `;
  }
  let TunnelV = array[i][2][3];
  let TunnelStr = "";
  if (TunnelV > 0){
    TunnelStr = `${TunnelV} Tunnel, `;
  }

  let ChoiceBStr = `Lose ${ScientistStr}${PersonnelStr}${FoodStr}${TunnelStr}`;

  description = `${array[i][0]} \n Choice A - ${ChoiceAStr} \n Choice B - ${ChoiceBStr}`;
  return description;
  }

  function CreateButtons(i){

    //define
    const messageContainer = document.querySelector('.message');
    const lettersContainer = document.querySelector('.letters');

    // Description; NEEDS: AMMO, TIMBER, HERB, TECH, BONUS SPECIMEN; PENALTIES: SCIENTIST, PERSONNEL, FOOD, TUNNEL
    let ammoV = array[i][1][0];

    let timberV = array[i][1][1];

    let herbV = array[i][1][2];
  
    let techV = array[i][1][3];

    if (ammo < ammoV || timber < timberV || herb < herbV || tech < techV ){
        messageContainer.innerText += "You do not have enough resources for Choice A";
        const button2 = document.createElement('button');
        button2.innerText = "Choice B";
        button2.addEventListener('click', function () {
        updateSurvivalNumbers(i);daytime();
        });
        lettersContainer.appendChild(button2);
    }else{
          const button = document.createElement('button');
          button.innerText = "Choice A";
          button.addEventListener('click', function () {
          updateResourceNumbers(i);daytime();
          });
          lettersContainer.appendChild(button); 
          const button2 = document.createElement('button');
          button2.innerText = "Choice B";
          button2.addEventListener('click', function () {
          updateSurvivalNumbers(i); daytime();
          });
          lettersContainer.appendChild(button2);
        };
  }


  function clearbuttons(){
    const letterButtons = document.querySelectorAll('.letters button');
    const lettersContainer = document.querySelector('.letters');
    letterButtons.forEach(button => {
    button.disabled = true;
    button.remove;
    button.removeEventListener('click',updateResourceNumbers);
    button.removeEventListener('click',updateSurvivalNumbers);
    lettersContainer.removeChild(button);
    });
  }

  function updatestatus(){
    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = 
    `Lose Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientist} scientist, ${totalnights-1-n} days remaining. None can reach zero.
    
    Win Condition: You have ${ProcessedSpecimens} Processed Specimens. Accumulate ${target} before Day ${totalnights}!
    
    Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.
    
    Hungertokens - Soldier:${Soldierhungertoken}, Botanist:${Botanisthungertoken}, Lumbersmith:${Lumbersmithhungertoken}, Farmer:${Farmerhungertoken}, Scientist:${Scientisthungertoken}. Max per character:${hungertokenlimit-1} 
    
    Robots - Normal Robots:${robots}, Assistant Robots: ${RobotAsst}`;
  }
  
  // Initialize the game when the page loads
  window.addEventListener('load', initializeGame);