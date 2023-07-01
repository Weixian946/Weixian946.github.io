// Define the list of crises to choose from

const CrisesList = "Maximum Resources needed are 5 ammo, 2 timber and 1 herb";

/*const CrisesList = [
  'Index    Needs   Bonus   Penalty',
  '\nA    2 Ammo    1 specimen    1 scientist',
  '\nB    5 Ammo    None    1 personnel',
  '\nC    2 Ammo    None    5 food',
  '\nD    1 herb    None    5 food',
  '\nE    1 Ammo    None    1 personnel',
  '\nF    1 Timber    None    1 tunnel',
  '\nG    2 Timber    1 specimen    1 scientist',
  '\nH    1 Timber and 1 herb   None    1 personnel',
  '\nI    2 Ammo    None    1 tunnel',
  '\nJ    1 timber    None    1 tunnel',
];*/


const array1 = [
    'A. Scientist Abducted \n Choice A-Expend 2 Ammo to rescue scientist. \n Choice B-lose 1 scientist',
    'B. Horde Wave: \n Choice A-Expend 5 Ammo to defeat the horde; \n Choice B-lose 1 personnel',
    'C. Grain Silo Sabotage: \n Choice A-Expend 2 Ammo to prevent sabotage; \n Choice B-lose 5 food',
    'D. Grain Silo Contaminated: \n Choice A-Expend 1 herb to decontaminate; \n Choice B-lose 5 food',
    'E. Mines detected: \n Choice A-Expend 1 Ammo to de-activate mine; \n Choice B-lose 1 personnel',
    'F. Bombing imminent: \n Choice A-Expend 1 Timber to strengthen tunnels; \n Choice B-lose 1 tunnel',
    'G. Decoy Lab needed: \n Choice A-Expend 2 Timber to distract Horde and gain 1 specimen; \n Choice B-lose 1 scientist',
    'H. Chemical Attack: \n Choice A-Expend 1 Timber and 1 herb to filter air vents; \n Choice B-lose 1 personnel',
    'I. Trackers nearby: \n Choice A-Expend 2 Ammo to prevent detection; \n Choice B-lose 1 tunnel',
    'J. Thunderstorm: \n Choice A-Expend 1 timber to prevent flooding; \n Choice B-lose 1 tunnel',
  ];

  const array2 = [
    'A. Scientist Abducted \n Choice A-Expend 3 Ammo to rescue scientist and gain 1 specimen. \n Choice B-lose 1 scientist',
    'B. Horde Wave: \n Choice A-Expend 5 Ammo to defeat the horde; \n Choice B-lose 1 personnel',
    'C. Grain Silo Sabotage: \n Choice A-Expend 2 Ammo to prevent sabotage; \n Choice B-lose 5 food',
    'D. Grain Silo Contaminated: \n Choice A-Expend 1 herb to decontaminate; \n Choice B-lose 5 food',
    'E. Mines detected: \n Choice A-Expend 1 Ammo to de-activate mine; \n Choice B-lose 1 personnel',
    'F. Bombing imminent: \n Choice A-Expend 1 Timber to strengthen tunnels; \n Choice B-lose 1 tunnel',
    'G. Decoy Lab needed: \n Choice A-Expend 2 Timber to distract Horde and gain 1 specimen; \n Choice B-lose 1 scientist',
    'H. Chemical Attack: \n Choice A-Expend 1 Timber and 1 herb to filter air vents; \n Choice B-lose 1 personnel',
    'I. Trackers nearby: \n Choice A-Expend 2 Ammo to prevent detection; \n Choice B-lose 1 tunnel',
    'J. Thunderstorm: \n Choice A-Expend 1 timber to prevent flooding; \n Choice B-lose 1 tunnel',
  ];

  const array3 = [
    'A. Scientist Abducted \n Choice A-Expend 3 Ammo to rescue scientist and gain 1 specimen. \n Choice B-lose 1 scientist',
    'B. Horde Wave: \n Choice A-Expend 5 Ammo to defeat the horde; \n Choice B-lose 1 personnel',
    'C. Grain Silo Sabotage: \n Choice A-Expend 2 Ammo to prevent sabotage; \n Choice B-lose 5 food',
    'D. Grain Silo Contaminated: \n Choice A-Expend 1 herb to decontaminate; \n Choice B-lose 5 food',
    'E. Mines detected: \n Choice A-Expend 1 Ammo to de-activate mine; \n Choice B-lose 1 personnel',
    'F. Bombing imminent: \n Choice A-Expend 1 Timber to strengthen tunnels; \n Choice B-lose 1 tunnel',
    'G. Decoy Lab needed: \n Choice A-Expend 2 Timber to distract Horde and gain 1 specimen; \n Choice B-lose 1 scientist',
    'H. Chemical Attack: \n Choice A-Expend 1 Timber and 1 herb to filter air vents; \n Choice B-lose 1 personnel',
    'I. Trackers nearby: \n Choice A-Expend 2 Ammo to prevent detection; \n Choice B-lose 1 tunnel',
    'J. Thunderstorm: \n Choice A-Expend 1 timber to prevent flooding; \n Choice B-lose 1 tunnel',
  ];

  // Define the starting conditions for lose
  let tunnels = 6;
  let personnel = 4; //minimum is always 4 
  let scientists = 2;
  // Define the starting conditions for win
  let specimens = 0;
  let ProcessedSpecimens = 0;
  let target = 10; // the goal for processed specimens

  // Define the starting number for resources
  let ammo = 5;
  let food = 12;
  let timber = 2;
  let herb = 1;

  let n = 0;
  let CrisisAtHand = '';

  // Define the life status of personnel
  let SoliderAlive = true;
  let BotanistAlive = true;
  let LumberAlive = true;
  let FarmerAlive = true;
  let someonejustdied = false;
 
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
    const arrayTemporary = array1.concat(array2)
    const array = arrayTemporary.concat(array3)

  // Initialize the game
  function initializeGame() {
    tunnels = 4;
    personnel = 4;
    scientists = 2;
    specimens = 0;
    ammo = 5;
    food = 12;
    timber = 2;
    herb = 1;
    n = 0; 
       
    // Clear any previous message or status
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = "" ;

    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = "" ;

    const CrisesContainer = document.querySelector('.crises');
    CrisesContainer.innerText = `${CrisesList}` ;

    // Display the first crisis
    updateCrisisDisplay(0);
  
  }

  // Update the Crisis to display
  function updateCrisisDisplay(n) {

    if (WinOrLose()){
      // do nothing.
    }else{
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

      // display status
      const messageContainer = document.querySelector('.message');
      messageContainer.innerText = `It is Night ${n+1}.`
      const statusContainer = document.querySelector('.status');
      statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = array[n];

      // Generate the choice buttons
      if((array[n][0]=="A" && ammo < 2) ||(array[n][0]=="B" && ammo < 5) ||(array[n][0]=="C" && ammo < 2) ||(array[n][0]=="D" && herb < 1) ||(array[n][0]=="E" && ammo < 1) ||(array[n][0]=="F" && timber < 1) ||(array[n][0]=="G" && timber  < 2) ||(array[n][0]=="H" && (timber < 1 || herb < 1)) ||(array[n][0]=="I" && ammo < 2) ||(array[n][0]=="J" && timber < 1) ){
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText += "You do not have enough resources for Choice A";
      } else{
        const button = document.createElement('button');
        button.innerText = "Choice A";
        button.addEventListener('click', function () {
        updateResourceNumbers(array[n]); daytime(); 
        });
        lettersContainer.appendChild(button);
      };
      
      const button2 = document.createElement('button');
      button2.innerText = "Choice B";
      button2.addEventListener('click', function () {
      updateSurvivalNumbers(array[n]); daytime();
      });
      lettersContainer.appendChild(button2);
    }
  }

  // Handle a choice A
  function updateResourceNumbers(sentence) {
    let result = sentence.substring(0, 1)
    if (result=="A"){
        ammo = ammo - 2;};
    if (result=="B"){
        ammo = ammo - 5;};
    if (result=="C"){
        ammo = ammo - 2;};
    if (result=="D"){
        herb = herb - 1;
        specimens = specimens + 1;};
    if (result=="E"){
        ammo = ammo - 1;};
    if (result=="F"){
        timber = timber - 1;};
    if (result=="G"){
        timber = timber - 2;
        specimens = specimens + 1;};
    if (result=="H"){
        timber = timber - 1;
        herb = herb - 1;};
    if (result=="I"){
        ammo = ammo - 2;};
    if (result=="J"){
        timber = timber - 1;};

    }

  // Handle a choice B
  function updateSurvivalNumbers(sentence) {
    let result = sentence.substring(0, 1)
    if (result=="A"){
    scientists = scientists - 1;};
    if (result=="B"){
        personnel = personnel - 1;
        someonejustdied = true;
      };
    if (result=="C"){
        food = food - 5;};
    if (result=="D"){
        food = food - 5;};
    if (result=="E"){
        personnel = personnel - 1;
        someonejustdied = true;
      };
    if (result=="F"){
        tunnels = tunnels - 1;};
    if (result=="G"){
        scientists = scientists - 1;};
    if (result=="H"){
        personnel = personnel - 1;
        someonejustdied = true;
      };
    if (result=="I"){
        tunnels = tunnels - 1;};
    if (result=="J"){
        tunnels = tunnels - 1;};
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
    } else if (tunnels == 0 || scientists == 0 || personnel == 0 || n == 29) {
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
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;

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
        personnel = personnel - 1;
        WhoDies();
        } else  {
          //feed the personnel at the start of every day
          if ((food < (personnel+scientists)) && (food != 0)) {
            food = 0;
            personnel = personnel - 1;
            const wordContainer = document.querySelector('.word');
            wordContainer.innerText = "Not enough food."
            WhoDies(); 
          } else {
            if(food==0){
              //do nothing
            }else{
              food = food - personnel - scientists;  
            }
            const messageContainer = document.querySelector('.message');
            messageContainer.innerText = `It is Day ${n+1}. \n ${personnel + scientists} food has been deducted` ;
            DisplaySolider();  
          };
      };    
    }; // end of else loop for Win or Lose 
  }

  function DisplaySolider() {

    // update the message
    const statusContainer = document.querySelector('.status');
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;


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
      wordContainer.innerText = "What do you want the solider to do? ";
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
    } else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "Solider was removed from game";
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
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;


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
      wordContainer.innerText = "Botanist was removed from game";
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
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;


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
    }else{
      const wordContainer = document.querySelector('.word');
      wordContainer.innerText = "Lumbersmith was removed from game";
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
    statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;

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
      wordContainer.innerText = "Farmer was removed from game";
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
  statusContainer.innerText = `Survival Conditions: You have ${tunnels} tunnels,${personnel} personnel,${scientists} scientists,${ProcessedSpecimens} Processed Specimens.\n Resources: You have ${ammo} ammo,${timber} timber,${food} food,${herb} herb, ${specimens} specimens.` ;

  // show the role
  const wordContainer = document.querySelector('.word');
  wordContainer.innerText = "What do you want the Scientist to do? ";

  if (scientists>0){
    // Generate the choice buttons
    if (specimens<=0){
      //do not create the processed specimens button
    } else {
        const buttonSc1 = document.createElement('button');
        buttonSc1.innerText = "Process Specimens";
        buttonSc1.addEventListener('click', function () {
          if (specimens >= scientists){
            ProcessedSpecimens = ProcessedSpecimens + scientists;
            specimens = specimens - scientists;
            const messageContainer = document.querySelector('.message');
            messageContainer.innerText += `\n ${ProcessedSpecimens} specimens processed in total. ${target-ProcessedSpecimens} to go!` ;
          } else{
            ProcessedSpecimens = ProcessedSpecimens + specimens;
            specimens = 0;
            const messageContainer = document.querySelector('.message');
            messageContainer.innerText += `\n ${ProcessedSpecimens} specimens processed in total. ${target-ProcessedSpecimens} to go!` ;
          }; n=n+1; updateCrisisDisplay(n);
          });
          lettersContainer.appendChild(buttonSc1);
      }
    const buttonSc2 = document.createElement('button');
    buttonSc2.innerText = "Collect Food";
    buttonSc2.addEventListener('click', function () {
    food = food + scientists; n=n+1; updateCrisisDisplay(n);
    });
    lettersContainer.appendChild(buttonSc2);
  } else {
    WinOrLose();
  }
}

function WhoDies(){

  //reset 'someone just died"
  someonejustdied = false;

  const wordContainer = document.querySelector('.word');
  wordContainer.innerText += "Which personnel is removed from the game?";
      // Generate the choice buttons
      if(SoliderAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP1 = document.createElement('button');
        buttonP1.innerText = "Soldier";
        buttonP1.addEventListener('click', function () {
        SoliderAlive=false;daytime();
        });
        lettersContainer.appendChild(buttonP1);
      }

      if(BotanistAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP2 = document.createElement('button');
        buttonP2.innerText = "Botanist";
        buttonP2.addEventListener('click', function () {
        BotanistAlive=false;daytime();
        });
        lettersContainer.appendChild(buttonP2);
      }
      
      if(LumberAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP3 = document.createElement('button');
        buttonP3.innerText = "Lumbersmith";
        buttonP3.addEventListener('click', function () {
        LumberAlive=false;daytime();
        });
        lettersContainer.appendChild(buttonP3);
      }
      
      if(FarmerAlive){
        const lettersContainer = document.querySelector('.letters');
        const buttonP4 = document.createElement('button');
        buttonP4.innerText = "Farmer";
        buttonP4.addEventListener('click', function () {
        FarmerAlive=false;daytime();
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
  
  // Initialize the game when the page loads
  window.addEventListener('load', initializeGame);