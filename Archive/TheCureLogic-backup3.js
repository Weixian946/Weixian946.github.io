//define the number of nights
let totalnights = 45;
// Define the list of crises to choose from

const CrisesList = `There are ${totalnights} nights in total. Every 14 randomly arranged normal nights is followed by a worse Horde Wave night. \n Normal nights includes 2 Silent Nights where zero resources are needed. \n The maximum resources needed for the normal nights are 3 ammo, 2 timber and 1 herb.\n Hordes1/2/3 need 2/3/5 ammo, 0/1/2 herbs, 1/2/3 timbers but gain 1/2/4 specimens upon success. \n Failure to pass Horde Wave = Game Over.`;

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

// Description; AMMO, TIMBER, HERB ;  BONUS SPECIMEN; SCIENTIST, PERSONNEL, FOOD, TUNNEL
// array1 = [["Scientist Abducted!",2,0,0,0,1,0,0,0,1,0,0,]]

// 15 NightTimes including 3 Non-events and 12 Crises
const array1 = [
    'A. Scientist Abducted \n Choice A-Expend 3 Ammo to rescue scientist. \n Choice B-lose 1 scientist',
    'B. Mini Horde Wave: \n Choice A-Expend 2 Ammo to defeat the mini horde; \n Choice B-lose 1 personnel',
    'C. Farm under attack: \n Choice A-Expend 1 Ammo to prevent sabotage; \n Choice B-lose 1 food',
    'D. Farm Contaminated: \n Choice A-Expend 1 herb to decontaminate; \n Choice B-lose 2 food',
    'E. Mines detected: \n Choice A-Expend 2 Ammo to de-activate mine; \n Choice B-lose 1 personnel',
    'F. Bombing imminent: \n Choice A-Expend 1 Timber to strengthen tunnels; \n Choice B-lose 1 tunnel',
    'G. Decoy Lab needed: \n Choice A-Expend 2 Timber to distract Horde; \n Choice B-lose 1 scientist',
    'H. Chemical Attack: \n Choice A-Expend 1 Timber and 1 herb to filter air vents; \n Choice B-lose 1 personnel',
    'I. Trackers nearby: \n Choice A-Expend 1 Ammo to prevent detection; \n Choice B-lose 1 tunnel',
    'J. Thunderstorm: \n Choice A-Expend 1 timber to prevent flooding; \n Choice B-lose 1 tunnel',
    'K. Silent Night - Opportunity to strengthen.',
    'K. Silent Night - Opportunity to strengthen.',
    'L. Firewall needed: \n Choice A-Expend 1 timber and 1 ammo; \n Choice B-lose 1 personnel',
    'M. Personnel bleeding: \n Choice A-Expend 1 herb and 1 ammo; \n Choice B-lose 1 personnel',
  ];

  const Horde1 = ['X. HORDE WAVE 1: \n Choice A-Expend 2 ammo and 1 timber and gain 1 specimen; \n Choice B-lose all personnel',
  ];

  const Horde2 = ['Y. HORDE WAVE 2: \n Choice A-Expend 1 herb and 3 ammo and 2 timber and gain 2 specimen; \n Choice B-lose all personnel',
  ];

  const Horde3 = ['Z. HORDE WAVE 3: \n Choice A-Expend 2 herb and 5 ammo and 3 timber and gain 4 specimen; \n Choice B-lose all personnel',
  ];

  const array2 = array1;

  const array3 = array1;

  // Define the starting conditions for lose
  let tunnels = 4;
  let personnel = 4; //minimum is always 4 
  let scientists = 2;
  let robots = 0;
  // Define the starting conditions for win
  let specimens = 0;
  let ProcessedSpecimens = 0;
  let target = 20; // the goal for processed specimens

  // Define the starting number for resources
  let ammo = 3;
  let food = 6;
  let timber = 2;
  let herb = 1;
  let tech = 0;

  let n = 0;
  let CrisisAtHand = '';

  // Define the life and hunger status of personnel
  let SoliderAlive = true;
  let BotanistAlive = true;
  let LumberAlive = true;
  let FarmerAlive = true;
  let someonejustdied = false;
  let Soliderhungertoken = 0;
  let Botanisthungertoken = 0;
  let Lumbersmithhungertoken = 0;
  let Farmerhungertoken = 0;
  let hungryPersonThisRound = 0;
  let hungertokensthisround = 0;
  let SoldierFirstTime = true;
  let BotanistFirstTime = true;
  let LumberFirstTime = true;
  let FarmerFirstTime = true;

 
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
    // const arrayTemporary = array1.concat(array2)
    const array = array1.concat(Horde1).concat(array2).concat(Horde2).concat(array3).concat(Horde3)

  // Initialize the game
  function initializeGame() {

  // Initialize the starting conditions for lose
  tunnels = 3;
  personnel = 4; //minimum is always 4 
  scientists = 2;
  robots = 0;
  // Init the starting conditions for win
  specimens = 0;
  ProcessedSpecimens = 0;
  
  // Init the starting number for resources
  ammo = 3;
  food = 6;
  timber = 2;
  herb = 1;
  tech = 0;

  n = 0;
  CrisisAtHand = '';

  // Init the life and hunger status of personnel
  SoliderAlive = true;
  BotanistAlive = true;
  LumberAlive = true;
  FarmerAlive = true;
  someonejustdied = false;
  Soliderhungertoken = 0;
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
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = "" ;

    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = "" ;

    const CrisesContainer = document.querySelector('.crises');
    CrisesContainer.innerText = `${CrisesList}` ;

    // Display the first crisis
    NighTime(0);
  
  }

  // Update the Night 
  function NighTime(n) {

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

      // clear old buttons
      const letterButtons = document.querySelectorAll('.letters button');
      const lettersContainer = document.querySelector('.letters');
      letterButtons.forEach(button => {
      button.disabled = true;
      button.remove;
      button.removeEventListener('click',updateResourceNumbers);
      button.removeEventListener('click',updateSurvivalNumbers);
      lettersContainer.removeChild(button);
      });

      //process any specimens
      if (specimens >= scientists){
        ProcessedSpecimens = ProcessedSpecimens + scientists;
        specimens = specimens - scientists;
      } else{
        ProcessedSpecimens = ProcessedSpecimens + specimens;
        specimens = 0;
      };

      // display status
      const messageContainer = document.querySelector('.message');
      messageContainer.innerText = `It is Night ${n+1}.`
      const statusContainer = document.querySelector('.status');
      statusContainer.innerText = `Lose Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists, ${totalnights-1-n} days remaining. None can reach zero.\n Win Condition: You have ${ProcessedSpecimens} Processed Specimens. Accumulate ${target} before Day ${totalnights}!\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.` ;
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = array[n];

      // Generate the choice buttons
      if((array[n][0]=="A" && ammo < 3) ||(array[n][0]=="B" && ammo < 2) ||(array[n][0]=="C" && ammo < 1) ||(array[n][0]=="D" && herb < 1) ||(array[n][0]=="E" && ammo < 2) ||(array[n][0]=="F" && timber < 1) ||(array[n][0]=="G" && timber  < 2) ||(array[n][0]=="H" && (timber < 1 || herb < 1)) ||(array[n][0]=="I" && ammo < 1) ||(array[n][0]=="J" && timber < 1) || (array[n][0]=="L" && (timber < 1 || ammo < 1)) ||(array[n][0]=="M" && (ammo < 1 || herb < 1)) ||(array[n][0]=="X" && (ammo < 2 || timber < 1)) ||(array[n][0]=="Y" && (ammo < 3 || herb < 1 || timber < 2))||(array[n][0]=="Z" && (ammo < 5 || herb < 2 || timber < 3)))
        {
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText += "You do not have enough resources for Choice A";
        const button2 = document.createElement('button');
        button2.innerText = "Choice B";
        button2.addEventListener('click', function () {
        updateSurvivalNumbers(array[n]); daytime();
        });
        lettersContainer.appendChild(button2);
        } else {
          if (array[n][0]=="K"){
            const messageContainer = document.querySelector('.message');
            messageContainer.innerText += "What do you want to do?";
            const button = document.createElement('button');
            button.innerText = "Do Nothing.";
            button.addEventListener('click', function () {
            daytime(); 
            });
            lettersContainer.appendChild(button);

            if (tech < 3 || timber < 1){
              // do nothing
              const messageContainer = document.querySelector('.message');
              messageContainer.innerText += "You do not have enough resources for a robot.";
            }else{
              const button2 = document.createElement('button');
              button2.innerText = "Build a robot for 3 tech and 1 timber.";
              button2.addEventListener('click', function () {
              tech = tech - 3; timber = timber - 1; robots = robots + 1; daytime(); 
              });
              lettersContainer.appendChild(button2);
            }  
          }
        
          else{
          const button = document.createElement('button');
          button.innerText = "Choice A";
          button.addEventListener('click', function () {
          updateResourceNumbers(array[n]); daytime();
          });
          lettersContainer.appendChild(button); 
          const button2 = document.createElement('button');
          button2.innerText = "Choice B";
          button2.addEventListener('click', function () {
          updateSurvivalNumbers(array[n]); daytime();
          });
          lettersContainer.appendChild(button2);
          };
      }
    }
  }

  // Handle a choice A
  function updateResourceNumbers(sentence) {
    let result = sentence.substring(0, 1);
    if (result=="A"){
        ammo = ammo - 3;};
    if (result=="B"){
        ammo = ammo - 2;};
    if (result=="C"){
        ammo = ammo - 2;};
    if (result=="D"){
        herb = herb - 1;};
    if (result=="E"){
        ammo = ammo - 2;};
    if (result=="F"){
        timber = timber - 1;};
    if (result=="G"){
        timber = timber - 2;};
    if (result=="H"){
        timber = timber - 1;
        herb = herb - 1;};
    if (result=="I"){
        ammo = ammo - 1;};
    if (result=="J"){
        timber = timber - 1;};
    if (result=="L"){
          timber = timber - 1;
          ammo = ammo - 1;
        };
    if (result=="M"){
            herb = herb - 1;
            ammo = ammo - 1;
          };
    if (result=="X"){
        timber = timber - 1;
        ammo = ammo - 2;
        specimens = specimens + 1;
    };
    if (result=="Y"){
      herb = herb - 1;
      timber = timber - 2;
      ammo = ammo - 3;
      specimens = specimens + 2;
    };
    if (result=="Z"){
      herb = herb - 2;
      timber = timber - 3;
      ammo = ammo - 5;
      specimens = specimens + 4;
    };

    }

  // Handle a choice B
  function updateSurvivalNumbers(sentence) {
    let result = sentence.substring(0, 1)
    if (result=="A"){
    scientists = scientists - 1;};
    if (result=="B"){
        someonejustdied = true;};
    if (result=="C"){
        food = food - 1;};
    if (result=="D"){
        food = food - 2;};
    if (result=="E"){
        someonejustdied = true;};
    if (result=="F"){
        tunnels = tunnels - 1;};
    if (result=="G"){
        scientists = scientists - 1;};
    if (result=="H"){
        someonejustdied = true;};
    if (result=="I"){
        tunnels = tunnels - 1;};
    if (result=="J"){
        tunnels = tunnels - 1;};
    if (result=="L"){
      personnel = personnel - 1;};
    if (result=="M"){
      personnel = personnel - 1;};
    if (result=="X"){
      personnel = 0;};
    if (result=="Y"){
      personnel = 0;};
    if (result=="Z"){
      personnel = 0;};
  }
  
  
  // Check if the game has been won or lost
  function WinOrLose() { 

    if (ProcessedSpecimens >= target) {
        // clear old buttons
        const letterButtons = document.querySelectorAll('.letters button');
        const lettersContainer = document.querySelector('.letters');
        letterButtons.forEach(button => {
        button.disabled = true;
        button.remove;
        button.removeEventListener('click',updateResourceNumbers);
        button.removeEventListener('click',updateSurvivalNumbers);
        lettersContainer.removeChild(button);
        });
        const wordContainer = document.querySelector('.word');
        wordContainer.innerText = "YOU WIN!";
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = `You have ${ProcessedSpecimens} Processed Specimens!`;
        const statusContainer = document.querySelector('.status');
        statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;
        return true
    } else if (tunnels == 0 || scientists == 0 || personnel == 0 || n == 47) {
        // clear old buttons
        const letterButtons = document.querySelectorAll('.letters button');
        const lettersContainer = document.querySelector('.letters');
        letterButtons.forEach(button => {
        button.disabled = true;
        button.remove;
        button.removeEventListener('click',updateResourceNumbers);
        button.removeEventListener('click',updateSurvivalNumbers);
        lettersContainer.removeChild(button);
        });
        const wordContainer = document.querySelector('.word');
        wordContainer.innerText = "GAME OVER.";
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = `You have ${tunnels} tunnels, ${personnel} personnel, ${scientists} scientists and ${n+1} nights have passed.`;
        const statusContainer = document.querySelector('.status');
        statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;
        const buttonEnd = document.createElement('button');
        buttonEnd.innerText = "Click to Restart";
        buttonEnd.addEventListener('click', function () {
        initializeGame();  
        });
        lettersContainer.appendChild(buttonEnd);   
        return true   
    } else {
      return false;
    };
  }

  function daytime() {

    const statusContainer = document.querySelector('.status');
      statusContainer.innerText = `Lose Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists, ${29-n} days remaining. None can reach zero.\n Win Condition: You have ${ProcessedSpecimens} Processed Specimens. Accumulate 10 before Day 30!\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens. ${tech} tech` ;

    if (WinOrLose()){
      //do nothing
    } else{
      // clear old buttons
      const letterButtons = document.querySelectorAll('.letters button');
      const lettersContainer = document.querySelector('.letters');
      letterButtons.forEach(button => {
      button.disabled = true;
      button.remove;
      button.removeEventListener('click',updateResourceNumbers);
      button.removeEventListener('click',updateSurvivalNumbers);
      lettersContainer.removeChild(button);
      });
      // clear old messages
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = ""



      // check if anyone just died
      if(someonejustdied){
        WhoDies();
        } else /* try to feed the characters*/{
          // if there is not enough food, give out hunger tokens until the hunger is resolved
          if (food < (personnel+scientists)) {
            hungryPersonThisRound = scientists + personnel - food - hungertokensthisround;
            if (hungryPersonThisRound>0){
                WhoHungry(); // keep coming back to whohungry and issuing hungertokesn until no more hungry people this round
            } else {
              // if there was not enough food this round, but hungertokensthisround issued.. then check if anyone died from too many hunger tokens.
              food = 0;
              if (SoliderAlive && Soliderhungertoken == 2){
                SoliderAlive = false;
                personnel -= 1;
                const wordContainer = document.querySelector('.word');
                wordContainer.innerText += "\n Solider removed from game due to overdose." 
              }
              if (BotanistAlive && Botanisthungertoken == 2){
                BotanistAlive = false;
                personnel -= 1;
                const wordContainer = document.querySelector('.word');
                wordContainer.innerText += "\n Botanist removed from game due to overdose."
              }
              if (LumberAlive && Lumbersmithhungertoken== 2){
                LumberAlive = false;
                personnel -= 1;
                const wordContainer = document.querySelector('.word');
                wordContainer.innerText += "\n Lumbersmith removed from game due to overdose."
              }
              if (FarmerAlive && Farmerhungertoken == 2){
                FarmerAlive = false;
                personnel -= 1;
                const wordContainer = document.querySelector('.word');
                wordContainer.innerText += "\n Farmer removed from game due to overdose."
              }
              const messageContainer = document.querySelector('.message');
              messageContainer.innerText = `It is Day ${n+1}. \n ${personnel + scientists} food has been deducted` ;
              DisplaySolider(); 
            }
          } else /* if there was enough food for all the people of this round, reset hunger tokens to zero*/{
                  food = food - personnel - scientists;
                  Soliderhungertoken = 0;  
                  Botanisthungertoken = 0;
                  Lumbersmithhungertoken = 0;
                  Farmerhungertoken = 0;
                  const messageContainer = document.querySelector('.message');
                  messageContainer.innerText = `It is Day ${n+1}. \n ${personnel + scientists} food has been deducted` ;
                  DisplaySolider();  
            }
          };   
    }; // end of else loop for Win or Lose 
  }

  function DisplaySolider() {

    // update the message
    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.` ;


    // clear old buttons
    const lettersContainer = document.querySelector('.letters');
    const letterButtons = document.querySelectorAll('.letters button');
    letterButtons.forEach(button => {
    button.disabled = true;
    button.remove;
    button.removeEventListener('click',updateResourceNumbers);
    button.removeEventListener('click',updateSurvivalNumbers);
    lettersContainer.removeChild(button);
    });

    if(SoliderAlive){
      // show the role
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText += "What do you want the solider to do? ";
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
      wordContainer.innerText += "Solider not available";
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
     const letterButtons = document.querySelectorAll('.letters button');
     const lettersContainer = document.querySelector('.letters');
     letterButtons.forEach(button => {
     button.disabled = true;
     button.remove;
     button.removeEventListener('click',updateResourceNumbers);
     button.removeEventListener('click',updateSurvivalNumbers);
     lettersContainer.removeChild(button);
     });

    // update the message
    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.` ;


    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the Botanist to do? ";

    if(BotanistAlive){
    // Generate the choice buttons
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
      const letterButtons = document.querySelectorAll('.letters button');
      const lettersContainer = document.querySelector('.letters');
      letterButtons.forEach(button => {
      button.disabled = true;
      button.remove;
      button.removeEventListener('click',updateResourceNumbers);
      button.removeEventListener('click',updateSurvivalNumbers);
      lettersContainer.removeChild(button);
      });

    // update the message
    //const messageContainer = document.querySelector('.message');
    //messageContainer.innerText = `It is Day ${n+1}.` ;
    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.` ;


    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the Lumbersmith to do? ";
    
    if(LumberAlive){
    // Generate the choice buttons
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
      const letterButtons = document.querySelectorAll('.letters button');
      const lettersContainer = document.querySelector('.letters');
      letterButtons.forEach(button => {
      button.disabled = true;
      button.remove;
      button.removeEventListener('click',updateResourceNumbers);
      button.removeEventListener('click',updateSurvivalNumbers);
      lettersContainer.removeChild(button);
      });

    // update the message
    //const messageContainer = document.querySelector('.message');
    //messageContainer.innerText = `It is Day ${n+1}.` ;
    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.` ;

    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the farmer to do? ";

    if (FarmerAlive){
    // Generate the choice buttons
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
    const letterButtons = document.querySelectorAll('.letters button');
    const lettersContainer = document.querySelector('.letters');
    letterButtons.forEach(button => {
    button.disabled = true;
    button.remove;
    button.removeEventListener('click',updateResourceNumbers);
    button.removeEventListener('click',updateSurvivalNumbers);
    lettersContainer.removeChild(button);
    });

    // update the message
    //const messageContainer = document.querySelector('.message');
    //messageContainer.innerText = `It is Day ${n+1}.` ;
    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.` ;

    // show the role
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = "What do you want the Scientist to do? ";

    if (scientists>0){
      // Generate the choice buttons
      const buttonSc1 = document.createElement('button');
      buttonSc1.innerText = "Collect Specimens";
      buttonSc1.addEventListener('click', function () {
        specimens = specimens + scientists; Displayrobots();
        });
      lettersContainer.appendChild(buttonSc1);
        
      const buttonSc2 = document.createElement('button');
      buttonSc2.innerText = "Collect Food";
      buttonSc2.addEventListener('click', function () {
      food = food + scientists; Displayrobots();
      });
      lettersContainer.appendChild(buttonSc2);

      const buttonSc3 = document.createElement('button');
      buttonSc3.innerText = "Collect Tech";
      buttonSc3.addEventListener('click', function () {
      tech = tech + scientists; Displayrobots();
      });
      lettersContainer.appendChild(buttonSc3);
    } else {
      WinOrLose();
    }
}

function Displayrobots() {

  // clear old buttons
  const letterButtons = document.querySelectorAll('.letters button');
  const lettersContainer = document.querySelector('.letters');
  letterButtons.forEach(button => {
  button.disabled = true;
  button.remove;
  button.removeEventListener('click',updateResourceNumbers);
  button.removeEventListener('click',updateSurvivalNumbers);
  lettersContainer.removeChild(button);
  });

  // update the message
  //const messageContainer = document.querySelector('.message');
  //messageContainer.innerText = `It is Day ${n+1}.` ;
  const statusContainer = document.querySelector('.status');
  statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens, ${tech} tech.` ;

  if (robots>0){
    // if there is enough sun, robots work
    let sun = Math.random()
    if (sun>0.4){
      // show the role
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "What do you want the robots to do? ";

      // Generate the choice buttons
      const buttonSc1 = document.createElement('button');
      buttonSc1.innerText = "Collect Specimens";
      buttonSc1.addEventListener('click', function () {
        specimens = specimens + robots; n=n+1; NighTime(n)
        });
        lettersContainer.appendChild(buttonSc1);
        
      const buttonSc2 = document.createElement('button');
      buttonSc2.innerText = "Collect Food";
      buttonSc2.addEventListener('click', function () {
      food = food + robots; n=n+1; NighTime(n);
      });
      lettersContainer.appendChild(buttonSc2);
    }else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "There is insufficient solar power for the robot to work today.";
      const buttonSc1 = document.createElement('button');
      buttonSc1.innerText = "OK";
      buttonSc1.addEventListener('click', function () {
      n=n+1; NighTime(n);
      });
      lettersContainer.appendChild(buttonSc1);
    }
  } else {
      n=n+1; NighTime(n);
  }
}

function WhoDies(){

  //reset 'someone just died"
  someonejustdied = false;

  const wordContainer = document.querySelector('.word');
  wordContainer.innerText += "Which character is removed from the game?";
      // Generate the choice buttons
      if(SoliderAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP1 = document.createElement('button');
        buttonP1.innerText = "Soldier";
        buttonP1.addEventListener('click', function () {
        SoliderAlive=false;personnel = personnel -1;daytime();
        });
        lettersContainer.appendChild(buttonP1);
      }

      if(BotanistAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP2 = document.createElement('button');
        buttonP2.innerText = "Botanist";
        buttonP2.addEventListener('click', function () {
        BotanistAlive=false;personnel = personnel -1;daytime();
        });
        lettersContainer.appendChild(buttonP2);
      }
      
      if(LumberAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP3 = document.createElement('button');
        buttonP3.innerText = "Lumbersmith";
        buttonP3.addEventListener('click', function () {
        LumberAlive=false;personnel = personnel -1;daytime();
        });
        lettersContainer.appendChild(buttonP3);
      }
      
      if(FarmerAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP4 = document.createElement('button');
        buttonP4.innerText = "Farmer";
        buttonP4.addEventListener('click', function () {
        FarmerAlive=false;personnel = personnel -1;daytime();
        });
        lettersContainer.appendChild(buttonP4);
      }

      if(scientists > 0){
        const lettersContainer = document.querySelector('.letters');
        const buttonP5 = document.createElement('button');
        buttonP5.innerText = "Scientist";
        buttonP5.addEventListener('click', function () {
        scientists = scientists - 1;daytime();
        });
        lettersContainer.appendChild(buttonP5);
      }  
  }

  function WhoHungry(){
        const wordContainer = document.querySelector('.word');
        wordContainer.innerText += "Not enough food. Which personnel gets a hunger token to replace food? \n WARNING: if a character gets 2 tokens, he is removed from the game due to overdose.";
        // Generate the choice buttons
        if(SoliderAlive && SoldierFirstTime){
          const lettersContainer = document.querySelector('.letters');
          const buttonP1 = document.createElement('button');
          buttonP1.innerText = `Soldier. Existing Hunger Tokens = ${Soliderhungertoken}`;
          buttonP1.addEventListener('click', function () {
          Soliderhungertoken += 1;hungertokensthisround += 1; SoldierFirstTime = false; daytime();
          });
          lettersContainer.appendChild(buttonP1);
        }
  
        if(BotanistAlive && BotanistFirstTime){
          const lettersContainer = document.querySelector('.letters');
          const buttonP2 = document.createElement('button');
          buttonP2.innerText = `Botanist. Existing Hunger Tokens = ${Botanisthungertoken}`;
          buttonP2.addEventListener('click', function () {
          Botanisthungertoken += 1;hungertokensthisround += 1;BotanistFirstTime = false;daytime();
          });
          lettersContainer.appendChild(buttonP2);
        }
        
        if(LumberAlive && LumberFirstTime){
          const lettersContainer = document.querySelector('.letters');
          const buttonP3 = document.createElement('button');
          buttonP3.innerText = `Lumbersmith. Existing Hunger Tokens = ${Lumbersmithhungertoken}`;
          buttonP3.addEventListener('click', function () {
          Lumbersmithhungertoken += 1;hungertokensthisround += 1;LumberFirstTime = false;daytime();
          });
          lettersContainer.appendChild(buttonP3);
        }
        
        if(FarmerAlive && FarmerFirstTime){
          const lettersContainer = document.querySelector('.letters');
          const buttonP4 = document.createElement('button');
          buttonP4.innerText = `Farmer. Existing Hunger Tokens = ${Farmerhungertoken}`;
          buttonP4.addEventListener('click', function () {
          Farmerhungertoken += 1;hungertokensthisround += 1;FarmerFirstTime=false;daytime();
          });
          lettersContainer.appendChild(buttonP4);
        }    
  }
  
  // Initialize the game when the page loads
  window.addEventListener('load', initializeGame);